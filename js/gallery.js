export function initGallery(photos) {
  const dialog = document.querySelector('#lightbox');
  if (!dialog || !photos.length) return;
  const image = dialog.querySelector('#lightbox-image');
  const caption = dialog.querySelector('#lightbox-caption');
  const count = dialog.querySelector('.lightbox-count');
  let current = 0;
  let opener = null;
  const show = (index) => {
    current = (index + photos.length) % photos.length;
    const photo = photos[current]; image.src = photo.src; image.alt = photo.alt || 'Fotografia de família';
    caption.textContent = [photo.caption, photo.date].filter(Boolean).join(' · ');
    count.textContent = `${current + 1} de ${photos.length}`;
  };
  document.querySelector('#gallery-grid').addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-gallery-index]');
    if (!trigger) return;
    opener = trigger; show(Number(trigger.dataset.galleryIndex)); dialog.showModal(); document.body.classList.add('modal-open');
    dialog.querySelector('.lightbox-close').focus();
  });
  const close = () => { dialog.close(); document.body.classList.remove('modal-open'); opener?.focus(); };
  dialog.querySelector('.lightbox-close').addEventListener('click', close);
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('click', (event) => { if (event.target === dialog) close(); });
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus(); });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
  });
}
