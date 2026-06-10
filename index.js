function filterCourses(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.course-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden-course');
    } else {
      card.classList.add('hidden-course');
    }
  });
}

function fakeDownload(e, filename) {
  e.preventDefault();
  const msg = document.createElement('div');
  msg.textContent = '✓ ' + filename + ' — replace this link with your actual file URL';
  msg.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:#0D5C3B;color:white;padding:12px 24px;border-radius:8px;font-family:Nunito,sans-serif;font-size:0.85rem;font-weight:600;z-index:9999;';
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3500);
}

function handleSubmit() {
  const btn = document.querySelector('.btn-submit');
  btn.textContent = '✓ Message sent! We\'ll be in touch shortly.';
  btn.style.background = '#126B45';
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
  }, 4000);
}

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:var(--green-dark);padding:20px 5%;gap:16px;z-index:99;';
  }
}