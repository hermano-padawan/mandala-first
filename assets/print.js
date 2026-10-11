(() => {
  const image = document.getElementById('print-image');
  const button = document.getElementById('print-button');
  async function printReady() {
    if (!image.complete) await new Promise((resolve, reject) => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', reject, { once: true });
    });
    if (!image.naturalWidth) return;
    if (image.decode) await image.decode().catch(() => {});
    requestAnimationFrame(() => requestAnimationFrame(() => window.print()));
  }
  button.addEventListener('click', () => printReady().catch(() => {}));
  window.addEventListener('load', () => printReady().catch(() => {}), { once: true });
})();
