const displayPersonInfo = (person) => {
  const userName = document.querySelector("#userName");
  const userEmail = document.querySelector("#userEmail");
  const userBio = document.querySelector("#userBio");
  const userLocation = document.querySelector("#userLocation");
  userName.innerText = person.name.fullName;
  userEmail.innerText = person.email;
  userBio.innerText = person.bio;
  userLocation.innerText = person.location;
};

const fetchClearBit = (email) => {
  const authorization = "Bearer sk_f9deb0090ac7688f94eb11ce09fd6a6e";
  const url = `https://person.clearbit.com/v2/combined/find?email=${email}`;
  fetch(url, { headers: { Authorization: authorization } })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    // => is a fat-arrow in JS
    // => is a hash-rocket in ruby
    // 3.Change the DOM(fill the name, email)
    displayPersonInfo(data.person);
  })
};

const stalkSomeone = (event) => {
  const inputBox = document.querySelector("#clearbitEmail");
  // something not to forget!!
  event.preventDefault();
  console.log(event);
  // 2.5 Fetch from API
  fetchClearBit(inputBox.value);
}

export { stalkSomeone };