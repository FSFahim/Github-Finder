//Define UI elements
let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

//Define Event Listeners
searchBtn.addEventListener("click", findUser);

//Define functions
function findUser(e) {
  let userText = searchUser.value;
  if (userText == "") {
    ui.showAlert("Input field is empty!", "alert alert-danger");
    //Clear Profile
    ui.clearProfile();
  } else {
    //Fetch API
    fetch(`https://api.github.com/users/${userText}`)
      .then((result) => result.json())
      .then((data) => {
        if (data.message == "Not Found") {
          //Show Alert
          ui.showAlert("User not Found!", "alert alert-danger");
        } else {
          //Show Profile
          ui.showProfile(data);
          searchUser.value = "";
        }
      });
  }
}
