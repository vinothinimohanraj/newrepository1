
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //Responsive Points
  breakpoints: {
    0:{
        slidesPreView: 1
    },
    768:{
        slidesPreView: 1
    },
    1024:{
        slidesPreView: 1
    },

  }

});

document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    if (rating === '' || review === '') {
        alert('Please fill in all fields');
    } else {
        // Send request to server to save review
        // For demonstration purposes, we'll just log the review data
        console.log(`Rating: ${rating}, Review: ${review}`);
    }
});

document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // Validate card details and process payment
    // For demonstration purposes, we'll just log the payment details
    console.log(`Card Number: ${cardNumber}, Expiry Date: ${expiryDate}, CVV: ${cvv}, Amount: ${amount}`);
});