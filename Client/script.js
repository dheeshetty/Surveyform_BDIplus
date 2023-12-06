function validateAndSubmit() {
    
    var userName = document.getElementById('userName').value;
    var rating = document.querySelector('input[name="rating"]:checked');
    var checkboxes = document.querySelectorAll('input[name="features[]"]:checked');
    var productCategory = document.getElementById('productCategory');
    
    var nameErrorContainer = document.getElementById('nameError');
    var ratingErrorContainer = document.getElementById('ratingError');
    var featuresErrorContainer = document.getElementById('featuresError');
    var categoryErrorContainer = document.getElementById('categoryError');

    nameErrorContainer.textContent = '';
    ratingErrorContainer.textContent = '';
    featuresErrorContainer.textContent = '';
    categoryErrorContainer.textContent = '';

    if (userName.trim() === '') {
        displayValidationError('Please Enter your Name!', nameErrorContainer);
        return;
    }
0
    if (!rating) {
        displayValidationError('Please Rate the Product.', ratingErrorContainer);
        return;
    }

    if (checkboxes.length === 0) {
        displayValidationError('Please select at least one Feature you Liked.', featuresErrorContainer);
        return;
    }

    if (productCategory.value === '') {
        displayValidationError('Please select a Product Category.', categoryErrorContainer);
        return;
    }
    var formData = {
        userName: userName,
        rating: rating.value,
        features: Array.from(checkboxes).map(checkbox => checkbox.value),
        productCategory: productCategory.value
    };

    fetch('https://surveyform-kx6v.onrender.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('confirmation').classList.remove('hidden');
        console.log(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
    document.getElementById('surveyForm').reset();
    setTimeout(function() {
        document.getElementById('confirmation').classList.add('hidden');
    }, 7000);
}

function displayValidationError(message, container) {
    var validationMessage = document.createElement('p');
    validationMessage.textContent = message;
    container.appendChild(validationMessage);
}
