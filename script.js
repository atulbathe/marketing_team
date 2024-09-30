const images = [
    'im1.jpeg',
    'im2.jpeg',
    'im3.jpeg',
    'im4.jpeg',
    'im5.jpeg',
    'im6.jpeg'
     ];

// Function to display a random image
function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    
    const imgElement = document.getElementById('randomImage');
    imgElement.src = randomImage; // Set the image source
}

// Call the function to display a random image on page load
displayRandomImage();
