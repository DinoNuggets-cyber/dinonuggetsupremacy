<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dino Nuggets Image</title>
</head>
<body>

    <div id="image-container"></div>

    <script>
        // Image URL for Dino Nuggets (replace with actual image URL if needed)
        const imageUrl = 'images/images.jpeg';  // Replace this with your image URL
        
        // Create an image element
        const img = document.createElement('img');
        
        // Set the image source
        img.src = imageUrl;
        
        // Optional: Set image properties (width, height, etc.)
        img.alt = "Dino Nuggets";  // Alt text for accessibility
        img.style.width = "300px";  // Example size
        
        // Add the image to the container in the HTML
        const container = document.getElementById('image-container');
        container.appendChild(img);
    </script>

</body>
</html>