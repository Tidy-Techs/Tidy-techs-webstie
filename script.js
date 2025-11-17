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

// Contact form submission via Web3Forms
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  formMsg.style.color = 'black';
  formMsg.innerHTML = "Sending...";

  const formData = new FormData(contactForm);
  
  // Add your Web3Forms access key
  formData.append('access_key', 'f3dcdb82-b602-42f1-be7f-48961e9c1189');

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      formMsg.style.color = 'green';
      formMsg.textContent = "Message sent successfully!";
      contactForm.reset();
    } else {
      formMsg.style.color = 'red';
      formMsg.textContent = "Failed to send message. Try again later.";
    }
  })
  .catch(err => {
    formMsg.style.color = 'red';
    formMsg.textContent = 'An error occurred. Please try again later.';
  });
});


