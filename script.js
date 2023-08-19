const imageContainers = document.querySelectorAll('.image-container-item');

imageContainers.forEach((container) => {
  const imageElement = container.querySelector('img');
  const imagePaths = container.getAttribute('data-images').split(',');
  let currentImageIndex = 0;

  container.addEventListener('mouseenter', () => {
    let interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
      const imagePath = imagePaths[currentImageIndex];
      imageElement.src = imagePath;
      imageElement.classList.add('active'); // Add the active class
    }, 100); // Change image every 1 second

    container.addEventListener('mouseleave', () => {
      clearInterval(interval);
      imageElement.src = imagePaths[0]; // Revert to the original image
      imageElement.classList.remove('active'); // Remove the active class
    });
  });
});
