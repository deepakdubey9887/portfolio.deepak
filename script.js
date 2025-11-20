
// theme toggle, svg rotation, accordion, smooth scroll
(function () {
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlBody = document.body;

  const setIcon = (dark) => {
    if (dark) {
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>';
    } else {
      themeIcon.innerHTML = '<circle cx="12" cy="12" r="3" fill="currentColor"/>';
    }
  };

  const darkMode = localStorage.getItem('site-dark') === 'true';
  if (darkMode) htmlBody.classList.add('dark');
  setIcon(darkMode);

  themeBtn.addEventListener('click', () => {
    const isDark = htmlBody.classList.toggle('dark');
    setIcon(isDark);
    localStorage.setItem('site-dark', isDark);
  });

  // rotation for blob
  const rotGroup = document.getElementById('rotGroup');
  let angle = 0;
  function rotate() {
    angle += 0.35;
    if (rotGroup) {
      rotGroup.setAttribute('transform', `translate(300,200) rotate(${angle})`);
    }
    requestAnimationFrame(rotate);
  }
  rotate();

  // accordion behavior
  document.querySelectorAll('.proj-summary').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.parentElement;
      const details = card.querySelector('.proj-details');
      const opened = details.style.display === 'block';
      document.querySelectorAll('.proj-details').forEach(d => d.style.display = 'none');
      document.querySelectorAll('.proj-summary .chev').forEach(c => c.textContent = '▾');
      if (!opened) {
        details.style.display = 'block';
        btn.querySelector('.chev').textContent = '▴';
      } else {
        details.style.display = 'none';
        btn.querySelector('.chev').textContent = '▾';
      }
    });
  });

  // navbar smooth scroll mapping
  const sections = {
    'btn-about': 'about',
    'btn-skills': 'about',
    'btn-projects': 'projects',
    'btn-contact': 'contact'
  };
  Object.keys(sections).forEach(btnId => {
    const b = document.getElementById(btnId);
    const secId = sections[btnId];
    if (b && secId) {
      b.addEventListener('click', () => {
        const el = document.getElementById(secId);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      });
    }
  });

})();
