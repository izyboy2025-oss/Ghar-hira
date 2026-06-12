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

  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    
    // Check if the page has been scrolled more than 50 pixels
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });

function handleSubmit() {
    // 1. Get the values from the form fields
    const firstName = document.querySelector('input[placeholder="Amina"]').value;
    const lastName = document.querySelector('input[placeholder="Mensah"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const subject = document.querySelector('select').value;
    const message = document.querySelector('textarea').value;

    // 2. Define the recipient email
    const recipient = "admissions@gharhiraschool.edu.gh";

    // 3. Construct the email body
    const body = `Name: ${firstName} ${lastName}%0D%0A` +
                 `Phone: ${phone}%0D%0A` +
                 `Email: ${email}%0D%0A%0D%0A` +
                 `Message:%0D%0A${message}`;

    // 4. Create the mailto link
    // %0D%0A are URL-encoded line breaks
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // 5. Open the user's email client
    window.location.href = mailtoLink;
}


function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:var(--green-dark);padding:20px 5%;gap:16px;z-index:99;';
  }
}

