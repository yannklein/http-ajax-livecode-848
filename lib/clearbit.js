const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";

// 1. Select elements (input, submit btn, name, email,bio, location)
const input = document.querySelector('#clearbitEmail');
const name = document.querySelector('#userName');
const bio = document.querySelector('#userBio');
const location = document.querySelector('#userLocation');
const email = document.querySelector('#userEmail');

// 4. Display the data
const displayData = (person) => {
  name.innerText = person.name.fullName;
  email.innerText = person.email;
  location.innerText = person.location;
  bio.innerText = person.linkedin.handle;
}

// 3. Fetch the Clearbit API, get personal data from JSON
const fetchCleabitAPI = (email) => {
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/15.0.1',
      Authorization: authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const person = data.person; 
      displayData(person);
    })
}

const stalkSomeone = (event) => {
  event.preventDefault();
  const inputEmail = input.value;
  console.log(event);
  fetchCleabitAPI(inputEmail);
}

export { stalkSomeone };