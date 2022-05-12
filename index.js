const params = new URLSearchParams(window.location.search);
console.log(params);
// console.log(params.has('name'));

//Add event listener for submitting the form
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function (e) {
  e.preventDefault;
  let name = document.getElementById('nameInput').value;
  lengthValidation(name, 2);

  let email = document.getElementById('emailInput').value;
  lengthValidation(email, 10);

  let password = document.getElementById('passwordInput').value;
  lengthValidation(password, 6);

  let age = document.getElementById('ageInput').value;
  lengthValidation(age, 1);

  let phone = document.getElementById('phoneInput').value;
  lengthValidation(phone, 9);

  let birthday = document.getElementById('birthdayInput').value;

  let gender = document.getElementById('gendermaleInput').value;
  // let gender = document.getElementById('genderfemaleInput').value;
  // let gender = document.getElementById('genderInput').value;

  let country = document.getElementById('countryInput').value;

  let terms = document.getElementById('termsInput').value;

  let letter = document.getElementById('letterInput').value;
});

//Create validations
const lengthValidation = (value, length) => {
  if (value) {
    if (value.length > length) {
      return value;
    } else {
      console.log(" Invalid, it's too short.");
    }
  } else {
    console.log(" Invalid, it's empty.");
  }
};

//Loop through params object
for (const [key, value] of params) {
  let switchResult = '';
  switch (key) {
    case 'name':
      switchResult = `Name: ${value}`;
      break;
    case 'email':
      switchResult = `Email: ${value}`;
      break;
    case 'password':
      switchResult = `Password: ${value}`;
      break;
    case 'age':
      switchResult = `Age: ${value}`;
      break;
    case 'phone':
      switchResult = `Phone: ${value}`;
      break;
    case 'birthday':
      switchResult = `Birthday: ${value}`;
      break;
    case 'gender':
      switchResult = `Gender: ${value}`;
      break;
    case 'country':
      switchResult = `Counrty: ${value}`;
      break;
    case 'image':
      switchResult = `Image: ${value}`;
      break;
    case 'terms':
      switchResult = `Terms: ${value}`;
      break;
    case 'letter':
      switchResult = `Letter: ${value}`;
      break;
  }
  const result = document.getElementById('results');
  const div = document.createElement('div');
  div.textContent = switchResult;
  result.appendChild(div);
}

//Use switch for different types of input to get values

//Append form results in results div
//Bonus: add styling to the page
