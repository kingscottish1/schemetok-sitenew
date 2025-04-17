
document.addEventListener('DOMContentLoaded', function () {
  const mode = localStorage.getItem('theme') || 'light';
  document.body.className = mode + '-theme';

  const toggle = document.createElement('button');
  toggle.textContent = 'Toggle Theme';
  toggle.onclick = () => {
    const current = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
    document.body.className = current + '-theme';
    localStorage.setItem('theme', current);
  };
  document.body.insertBefore(toggle, document.getElementById('root'));
});
