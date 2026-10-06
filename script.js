document.addEventListener('DOMContentLoaded', () => {
  const savePdfButton = document.getElementById('save-pdf');
  if (savePdfButton) {
    savePdfButton.addEventListener('click', () => window.print());
  }
});
