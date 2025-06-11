const templates = {
  math: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{title}}</title>
<script>
  window.MathJax = {tex:{inlineMath:[["$","$"],["\\(","\\)"]]}, svg:{fontCache:'global'}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<style>
  body{font-family:'Poppins',sans-serif;background:#fdfdfd;color:#333;padding:20px;max-width:900px;margin:auto;}
  nav{text-align:center;margin-bottom:30px;}
  nav a{margin:0 10px;text-decoration:none;color:#007acc;font-weight:600;}
  h1{color:#5a2a83;font-size:2.2rem;margin-bottom:10px;text-align:center;}
  .content{text-align:left;line-height:1.6;}
  footer{text-align:center;margin-top:40px;font-size:0.85rem;color:#777;}
</style>
</head>
<body>
<nav>
  <a href="index.html">Coding</a> |
  <a href="electrical.html">Electrical Engineering</a> |
  <a href="physics.html">Physics</a> |
  <a href="math.html">Math</a> |
  <a href="admin.html">Admin</a>
</nav>
<h1>{{title}}</h1>
<div class="content">
{{content}}
</div>
<footer>&copy; 2025 Parham</footer>
</body>
</html>`,
  electrical: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{title}}</title>
<script>
  window.MathJax = {tex:{inlineMath:[["$","$"],["\\(","\\)"]]}, svg:{fontCache:'global'}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
<style>
  body{font-family:'Orbitron',sans-serif;background:#101735;color:#d8faff;padding:20px;}
  nav{text-align:center;margin-bottom:30px;}
  nav a{margin:0 12px;color:#0ff;text-decoration:none;font-weight:bold;}
  h1{text-align:center;font-size:1.9rem;margin-bottom:20px;color:#0ff;text-shadow:0 0 8px #0ff;}
  .content{max-width:800px;margin:0 auto;background:#1e264a;padding:32px;border-radius:12px;box-shadow:0 0 20px rgba(0,255,255,0.1);}
  .content p{color:#c8e6f5;line-height:1.7;margin-top:12px;}
  footer{text-align:center;margin-top:40px;font-size:0.85rem;color:#ccc;}
</style>
</head>
<body>
<nav>
  <a href="index.html">Coding</a> |
  <a href="electrical.html">Electrical Engineering</a> |
  <a href="physics.html">Physics</a> |
  <a href="math.html">Math</a> |
  <a href="admin.html">Admin</a>
</nav>
<h1>{{title}}</h1>
<div class="content">
{{content}}
</div>
<footer>&copy; 2025 Parham</footer>
</body>
</html>`,
  physics: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{title}}</title>
<script>
  window.MathJax = {tex:{inlineMath:[["$","$"],["\\(","\\)"]]}, svg:{fontCache:'global'}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<style>
  body{font-family:'Poppins',sans-serif;background:linear-gradient(135deg,#1c1c3c,#32325d);color:#e0e0e0;padding:20px;}
  nav{text-align:center;margin-bottom:30px;}
  nav a{margin:5px 8px;text-decoration:none;color:#f5f5f5;font-weight:600;}
  h1{text-align:center;font-size:2rem;margin-bottom:10px;color:#f5f5f5;}
  .content{max-width:800px;margin:0 auto;line-height:1.6;}
  footer{text-align:center;margin-top:40px;font-size:0.85rem;color:#b0b0b0;}
</style>
</head>
<body>
<nav>
  <a href="index.html">Coding</a> |
  <a href="electrical.html">Electrical Engineering</a> |
  <a href="physics.html">Physics</a> |
  <a href="math.html">Math</a> |
  <a href="admin.html">Admin</a>
</nav>
<h1>{{title}}</h1>
<div class="content">
{{content}}
</div>
<footer>&copy; 2025 Parham</footer>
</body>
</html>`,
  coding: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{title}}</title>
<script>
  window.MathJax = {tex:{inlineMath:[["$","$"],["\\(","\\)"]]}, svg:{fontCache:'global'}};
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
<style>
  body{font-family:'Poppins',sans-serif;background:#121212;color:#e0e0e0;padding:20px;}
  nav{text-align:center;margin-bottom:30px;border-bottom:1px solid #2a2a2a;padding-bottom:10px;}
  nav a{margin:0 12px;text-decoration:none;color:#66d9ef;font-weight:600;}
  h1{text-align:center;font-size:2rem;color:#66d9ef;margin-bottom:20px;}
  .content{max-width:800px;margin:0 auto;background:#1e1e1e;border:1px solid #2a2a2a;border-radius:8px;padding:25px;line-height:1.7;}
  footer{text-align:center;margin-top:40px;font-size:0.85rem;color:#888;}
</style>
</head>
<body>
<nav>
  <a href="index.html">Coding</a> |
  <a href="electrical.html">Electrical Engineering</a> |
  <a href="physics.html">Physics</a> |
  <a href="math.html">Math</a> |
  <a href="admin.html">Admin</a>
</nav>
<h1>{{title}}</h1>
<div class="content">
{{content}}
</div>
<footer>&copy; 2025 Parham</footer>
</body>
</html>`
};

function slugify(text){
  return text.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$|/g,'');
}

function escapeHtml(text){
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function parseMarkdown(md){
  let html = escapeHtml(md);
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g,'<img alt="$1" src="$2">');
  html = html.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g,'<em>$1</em>');
  html = html.replace(/`([^`]+)`/g,'<code>$1</code>');
  html = html.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>');
  html = html.split(/\n\n+/).map(p=>`<p>${p}</p>`).join('\n');
  return html;
}

function generate(){
  const title=document.getElementById('title').value.trim()||'Untitled';
  const subject=document.getElementById('subject').value;
  const content=document.getElementById('content').value;
  const tpl=templates[subject]||templates.math;
  const htmlContent=parseMarkdown(content);
  const html=tpl.replace(/{{title}}/g,title).replace('{{content}}',htmlContent);
  const blob=new Blob([html],{type:'text/html'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=slugify(title)+'.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

async function login(){
  const password=document.getElementById('password').value;
  const res=await fetch('/login',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({password})
  });
  if(res.ok){
    document.getElementById('login-section').style.display='none';
    document.getElementById('panel').style.display='block';
  }else{
    alert('Invalid password');
  }
}

document.getElementById('login-btn').addEventListener('click',login);
document.getElementById('generate').addEventListener('click',generate);
