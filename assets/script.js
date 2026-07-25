const button = document.getElementById('copyBib');
if (button) {
  button.addEventListener('click', async () => {
    const text = document.getElementById('bibtex').innerText;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Copied';
      setTimeout(() => button.textContent = 'Copy', 1400);
    } catch (_) {
      button.textContent = 'Select text';
    }
  });
}
