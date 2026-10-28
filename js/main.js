import { content } from '../data/content.js';
import { initGallery } from './gallery.js';

const setText = (key, value) => document.querySelectorAll(`[data-content="${key}"]`).forEach((node) => { node.textContent = value; });
document.title = `${content.motherName} — uma homenagem com amor`;
for (const key of ['eyebrow', 'motherName', 'heroTitle', 'introMessage', 'closingMessage', 'birthdayMessage', 'signature']) setText(key, content[key]);
for (const [key, src] of Object.entries({ heroImage: content.heroImage, closingImage: content.closingImage })) {
  const image = document.querySelector(`[data-image="${key}"]`);
  image.src = src;
  image.addEventListener('error', () => image.closest('figure').classList.add('image-missing'), { once: true });
}

const gallery = document.querySelector('#gallery-grid');
const empty = document.querySelector('#gallery-empty');
if (content.gallery.length === 0) empty.hidden = false;
content.gallery.forEach((photo, index) => {
  const button = document.createElement('button');
  button.className = `gallery-item gallery-item-5n-${index % 5}`;
  button.type = 'button';
  button.dataset.galleryIndex = index;
  button.setAttribute('aria-label', `Ampliar fotografia${photo.caption ? `: ${photo.caption}` : ''}`);
  const img = document.createElement('img');
  img.src = photo.src; img.alt = photo.alt || 'Fotografia de família'; img.loading = 'lazy'; img.width = photo.width || 800; img.height = photo.height || 600;
  img.addEventListener('error', () => button.remove(), { once: true });
  button.append(img);
  if (photo.caption || photo.date) {
    const caption = document.createElement('span'); caption.className = 'gallery-caption';
    caption.textContent = [photo.caption, photo.date].filter(Boolean).join(' · '); button.append(caption);
  }
  gallery.append(button);
});
if (content.gallery.length) empty.hidden = true;

const list = document.querySelector('#letters-list');
content.letters.slice(0, 3).forEach((letter, index) => {
  const article = document.createElement('article'); article.className = `letter-card${index === 0 ? ' letter-featured' : ''}`;
  const author = document.createElement('p'); author.className = 'letter-author'; author.textContent = letter.author;
  const relation = document.createElement('p'); relation.className = 'letter-relationship'; relation.textContent = letter.relationship;
  article.append(author, relation);
  if (letter.title) { const title = document.createElement('h3'); title.textContent = letter.title; article.append(title); }
  const message = document.createElement('div'); message.className = 'letter-message';
  letter.message.split(/\n\s*\n/).forEach((paragraphText) => { const p = document.createElement('p'); p.textContent = paragraphText; message.append(p); });
  article.append(message);
  if (letter.signature) { const signature = document.createElement('p'); signature.className = 'letter-signature'; signature.textContent = letter.signature; article.append(signature); }
  if (letter.image) { const img = document.createElement('img'); img.className = 'letter-image'; img.src = letter.image; img.alt = `Fotografia que acompanha a carta de ${letter.author}`; img.loading = 'lazy'; article.append(img); }
  list.append(article);
});

initGallery(content.gallery);

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('has-reveal');
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.section-heading, .gallery-item, .letter-card, .closing-copy, .photo-frame').forEach((item) => observer.observe(item));
}
