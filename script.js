const THEME_KEY = 'rico-theme';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');

    const icon = toggle.querySelector('.theme-icon');
    const label = toggle.querySelector('.theme-label');
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    if (label) label.textContent = isDark ? 'Light' : 'Dark';
  }

  const meta = document.getElementById('theme-color-meta');
  if (meta) meta.setAttribute('content', isDark ? '#08111f' : '#f5f5dc');
}

document.addEventListener('DOMContentLoaded', () => {
  const initialTheme = document.documentElement.dataset.theme || 'light';
  applyTheme(initialTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  const savePdfButton = document.getElementById('save-pdf');
  if (savePdfButton) {
    savePdfButton.addEventListener('click', () => window.print());
  }
});

window.addEventListener('storage', (event) => {
  if (event.key === THEME_KEY && (event.newValue === 'light' || event.newValue === 'dark')) {
    applyTheme(event.newValue);
  }
});
