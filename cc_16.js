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



