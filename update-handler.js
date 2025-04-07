function toggleContent(id, titleEl) {
  const content = document.getElementById(id);
  const chevron = titleEl.querySelector('.chevron');
  content.classList.toggle('open');
  if (chevron) chevron.classList.toggle('rotate');
}

function formatRelativeTime(date) {
  const now = new Date();
  const diff = now - date;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;
  return date.toLocaleDateString();
}

async function sortAndTagContent() {
  try {
    const res = await fetch('updates.json');
    const updates = await res.json();

    const container = document.querySelector('.skills-container');
    const skills = Array.from(container.querySelectorAll('.skill'));

    skills.forEach(skill => {
      const subjectId = skill.dataset.id;
      const inlineTag = skill.querySelector('.last-updated-inline');
      const boxTag = skill.querySelector('.last-updated');

      let subjectTime = updates[subjectId] ? new Date(updates[subjectId]) : new Date(0);

      skill.querySelectorAll('li').forEach(li => {
        const subId = li.dataset.id;
        const subTag = li.querySelector('.last-updated');
        if (updates[subId]) {
          const subDate = new Date(updates[subId]);
          subTag.textContent = formatRelativeTime(subDate);
          subTag.title = subDate.toLocaleString();
          if (subDate > subjectTime) subjectTime = subDate;
        }
      });

      if (subjectTime.getTime() > 0) {
        const relative = formatRelativeTime(subjectTime);
        if (inlineTag) {
          inlineTag.textContent = `(Updated ${relative})`;
          inlineTag.title = subjectTime.toLocaleString();
        }
        if (boxTag) {
          boxTag.textContent = "Updated " + relative;
          boxTag.title = subjectTime.toLocaleString();
        }
        skill.dataset.updated = subjectTime.toISOString();
      }
    });

    skills.sort((a, b) => {
      const aTime = new Date(a.dataset.updated || 0).getTime();
      const bTime = new Date(b.dataset.updated || 0).getTime();
      return bTime - aTime;
    });

    skills.forEach(skill => container.appendChild(skill));
  } catch (err) {
    console.error("Failed to fetch updates.json:", err);
  }
}

document.addEventListener('DOMContentLoaded', sortAndTagContent);
