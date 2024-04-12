console.log('%c HI', 'color: firebrick')

// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Challenge 1: Fetch and display dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
   .then(response => response.json())
    .then(data => {
    const dogImagesContainer = document.getElementById('dog-images');
    data.message.forEach(imgUrl => {
    const imgElement = document.createElement('img');
     imgElement.src = imgUrl;
     dogImagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));

    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
     const dogBreedsList = document.getElementById('dog-breeds');
     Object.keys(data.message).forEach(breed => {
     const liElement = document.createElement('li');
     liElement.textContent = breed;
     dogBreedsList.appendChild(liElement);
            });
        })
        .catch(error => console.error('Error fetching breeds:', error));

    // Challenge 3: Change font color on click
    document.getElementById('dog-breeds').addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'red'; // Change 'red' to any color you prefer
        }
    });

    // Challenge 4: Filter breeds by letter
    document.getElementById('filter-breeds').addEventListener('change', function(event) {
    const filterValue = event.target.value;
    const breeds = document.querySelectorAll('#dog-breeds li');
    breeds.forEach(breed => {
    if (filterValue === '' || breed.textContent.toLowerCase().startsWith(filterValue)) {
     breed.style.display = 'block';
     } else {
      breed.style.display = 'none';
    }
     });
    });
});
