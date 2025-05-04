// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
  
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  
    // Change text and button styles dynamically
    const heroHeading = document.querySelector('.hero h1');
    if (heroHeading) {
      heroHeading.textContent = "Discover Your Unique Look";
    }
  
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
      ctaButton.textContent = "Explore Now";
      ctaButton.style.backgroundColor = "#4caf50";
      ctaButton.style.border = "2px solid #388e3c";
    }
  
    // Create and toggle special offer box
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = "Toggle Special Offer";
    toggleBtn.classList.add('cta-button');
    toggleBtn.style.marginTop = "2rem";
  
    const specialOffer = document.createElement('div');
    specialOffer.classList.add('special-offer');
    specialOffer.innerHTML = `
      <h3>Special Offer!</h3>
      <p>Get 20% off your first order with code: FASHION20</p>
    `;
  
    const mainContent = document.querySelector('.main-content');
    mainContent.appendChild(toggleBtn);
    mainContent.appendChild(specialOffer);
  
    toggleBtn.addEventListener('click', () => {
      specialOffer.style.display = specialOffer.style.display === 'block' ? 'none' : 'block';
    });
  });
  