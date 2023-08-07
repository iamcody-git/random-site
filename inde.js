// Function to handle the product search
function searchProducts() {
    // Get the input value from the search box
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Get all product boxes
    const productBoxes = document.querySelectorAll('.box');

    // Loop through each product box
    productBoxes.forEach((box) => {
        const productName = box.querySelector('h3').innerText.toLowerCase();

        // Check if the product name contains the search term
        if (productName.includes(searchTerm)) {
            box.style.display = 'block'; // Show the box if it matches the search term
        } else {
            box.style.display = 'none'; // Hide the box if it doesn't match the search term
        }
    });
}

// Add an event listener to the search input to call the searchProducts function on input change
document.getElementById('searchInput').addEventListener('input', searchProducts);
