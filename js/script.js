document.addEventListener('DOMContentLoaded', () => {

  // Hero Slider Animation
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  if (slides.length > 0) {
    // Make the first slide active initially
    slides[currentSlide].classList.add('active');

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${index * 100}%)`;
    });

    setInterval(() => {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide - 1) * 100}%)`;
      });
      currentSlide = (currentSlide + 1) % slides.length;
    }, 5000);
  }

  // Smooth scroll for navigation (if any anchor links are added)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Testimonial Carousel
  const testimonials = document.querySelectorAll('.testimonial-item');
  let currentTestimonial = 0;

  if (testimonials.length > 0) {
    setInterval(() => {
      testimonials[currentTestimonial].classList.remove('active');
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      testimonials[currentTestimonial].classList.add('active');
    }, 5000);
  }

  // Responsive Navigation
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navUl = document.querySelector('nav ul');

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
      navUl.classList.toggle('active');
    });
  }

  // Portfolio Modal
  const modal = document.getElementById('portfolio-modal');
  const modalVideo = document.getElementById('modal-video');
  const modalDescription = document.getElementById('modal-description');
  const closeButton = document.querySelector('.close-button');
  const portfolioItemsForModal = document.querySelectorAll('.portfolio-gallery .portfolio-item');

  if (modal) {
    portfolioItemsForModal.forEach(item => {
      item.addEventListener('click', () => {
        const videoSrc = item.querySelector('iframe').src;
        const description = item.querySelector('.overlay').textContent;

        modalVideo.src = videoSrc;
        modalDescription.textContent = description;
        modal.style.display = 'block';
      });
    });

    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      modalVideo.src = ''; // Stop the video
    });

    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
        modalVideo.src = ''; // Stop the video
      }
    });
  }

  // Portfolio Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item'); // Assuming items are added to HTML

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Handle active button state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        // Show/hide portfolio items
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

});
