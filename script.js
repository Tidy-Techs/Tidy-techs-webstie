// Mobile menu toggle
const toggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  mobileNav.style.display = mobileNav.style.display==='block' ? 'none' : 'block';
});

// Hide menu when clicking outside
document.addEventListener('click', (e) => {
  if(!mobileNav.contains(e.target) && e.target !== toggle){
    mobileNav.style.display='none';
  }
});

// Back button handling
window.onpopstate = function(){
  window.location.hash = "#home";
}

// Contact form submission via AJAX
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  formMsg.innerHTML = "Sending...";
  
  const formData = new FormData(contactForm);

  fetch('contact.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      formMsg.style.color = 'green';
      formMsg.textContent = data.message;
      contactForm.reset();
    } else {
      formMsg.style.color = 'red';
      formMsg.textContent = data.message;
    }
  })
  .catch(err => {
    formMsg.style.color = 'red';
    formMsg.textContent = 'An error occurred. Please try again later.';
  });
});


