const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
  document.body.classList.toggle('menu-open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open'); menuToggle?.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
}));

const slider = document.querySelector('[data-slider]');
if (slider) {
  const slides = [...slider.querySelectorAll('.hero-slide')];
  const dots = [...slider.querySelectorAll('[data-slide-to]')];
  const current = slider.querySelector('[data-slide-current]');
  let index = 0, timer;
  const show = next => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide,i) => { slide.classList.toggle('is-active', i === index); slide.setAttribute('aria-hidden', String(i !== index)); });
    dots.forEach((dot,i) => dot.classList.toggle('is-active', i === index));
    if (current) current.textContent = String(index + 1).padStart(2,'0');
  };
  const restart = () => { clearInterval(timer); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => show(index + 1), 6500); };
  slider.querySelector('[data-slide-prev]')?.addEventListener('click', () => { show(index - 1); restart(); });
  slider.querySelector('[data-slide-next]')?.addEventListener('click', () => { show(index + 1); restart(); });
  dots.forEach((dot,i) => dot.addEventListener('click', () => { show(i); restart(); }));
  slider.addEventListener('mouseenter', () => clearInterval(timer)); slider.addEventListener('mouseleave', restart); restart();
}

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImg = lightbox?.querySelector('[data-lightbox-img]');
const lightboxCaption = lightbox?.querySelector('[data-lightbox-caption]');
const closeLightbox = () => { lightbox?.classList.remove('is-open'); lightbox?.setAttribute('aria-hidden','true'); document.body.classList.remove('lightbox-open'); };
document.querySelectorAll('[data-gallery-image]').forEach(button => button.addEventListener('click', () => {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = button.dataset.galleryImage; lightboxImg.alt = button.dataset.galleryCaption || 'Gallery image';
  if (lightboxCaption) lightboxCaption.textContent = button.dataset.galleryCaption || '';
  lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden','false'); document.body.classList.add('lightbox-open');
  lightbox.querySelector('[data-lightbox-close]')?.focus();
}));
lightbox?.querySelector('[data-lightbox-close]')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

const form = document.querySelector('[data-contact-form]');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry — ${data.get('service') || 'General enquiry'}`);
  const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email') || 'Not provided'}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message')}`);
  const note = form.querySelector('[data-form-note]');
  if (note) note.textContent = 'Your email app should open with the enquiry prepared. Please send the email to complete your enquiry.';
  window.location.href = `mailto:Info@trauzanelevator.co.in?subject=${subject}&body=${body}`;
});
