//Define UI elements
let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");

//Define Event Listeners
searchBtn.addEventListener("click", findUser);

//Define functions
function findUser(e) {
  let userText = searchUser.value;
  if (userText == "") {
    alert("Input field is empty!");
    //Clear Profile
  } else {
    //Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Not Found") {
          //Show Alert
        } else {
          //Show Profile
          searchUser.value = "";
        }
      });
  }
}
