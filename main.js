document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('error-modal');
  if (errorModal) {
    errorModal.classList.add('hidden');
  }

  const heart = document.querySelector('.like-glyph');

  // Event listener for heart click
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Handle success
        heart.innerHTML = '&hearts;'; // Change heart to full heart
        heart.classList.add('activated-heart'); // Add activated-heart class
      })
      .catch(() => {
        // Handle failure
        if (errorModal) {
          errorModal.classList.remove('hidden'); // Display error modal
          errorModal.textContent = 'Error: Failed to like.'; // Display error message
          setTimeout(() => {
            errorModal.classList.add('hidden'); // Hide modal after 3 seconds
          }, 3000);
        }
      });
  });
});


