// Task 2 Fetch Products with .then()

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products') // Using Fetch to get product data from API
    .then(response => { // Check if the response is working correctly
       if (!response.ok)  {
        throw new Error('Error Loading HTTP') // Throw an error if response is not successful 
       }
       return response.json(); // Converting the response data to JSON 
    })

    .then(products => {
        // Going through each product in the list
        products.forEach(product => { 
            console.log(product.fields.name); // Log each product's name in the console
        } )
    })

    // Handling of Errors that can occur with Fetching 
    .catch(error => {
        console.error('Error occurred during fetch operation:', error); // Logging of error to console
    })
}

// Task 3 Fetch Products With async/await

async function fetchProductsAsync(){
    try{
        const response = await fetch('https://www.course-api.com/javascript-store-products'); // Fetching Product data from API

        const productData = await response.json(); // Convert response to JSON

        displayProducts(productData); // displaying products on webpage
    }
    catch(error){
        handleError(error); // Error function will take care of any errors present
    }
}

// Task 4: Display the Products

function displayProducts(products) {
   const container = document.getElementById('product-container') // Selecting the product container
   
   const firstFiveProducts = products.slice(0,5); // Getting the first five products

   firstFiveProducts.forEach(product => { // Loop through the first five products
   
    const productCards = document.createElement('div'); // Creating the product Cards
    productCards.setAttribute('class','product-card'); // Setting attributes for product cards

    const productName = document.createElement('h3'); // Creating Header element for product name
    productName.setAttribute('class', 'product-header'); // Setting attributes for product name
    productName.textContent = product.fields.name; // Setting text content to the product name

    const productPrice = document.createElement('p'); // Creating Paragraph element for product price
    productPrice.setAttribute('class', 'product-price' ); // Setting attributes for product price
    productPrice.textContent = '$' + product.fields.price; // Setting text content to the product price

    const productImage = document.createElement('img'); // Creating Img element for the product image
    productImage.setAttribute('class', 'product-image'); // Setting attributes for product Image
    productImage.src = product.fields.image[0].thumbnails.small.url; // Setting the product image URL
    productImage.width = 300; // Setting the Width of the product image
    productImage.height = 300; // Setting the height of the product image

    productCards.appendChild(productName); // Appending product name to product cards div
    productCards.appendChild(productPrice); // Appending product price to product cards div
    productCards.appendChild(productImage); // Appending product image to product cards div

    container.appendChild(productCards); // Appending product cards to the product container
   }
   )
}

// Task 5 Reusable Error Handler

function handleError(error) {
    console.error("An error has occurred: ", error); // Logs an error message to the console
}

// Task 6 Call Your Fetch Functions

fetchProductsThen(); // logs the product names to console
fetchProductsAsync(); // displays the products on the webpage