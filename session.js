let data = document.getElementById("data");
    let userDisplay = document.getElementById("user"); 
    let mail_id = document.getElementById("mail_id");

   
    data.addEventListener("submit", (event) => {
      event.preventDefault();

      // Get values from form inputs
      let username = document.getElementById("username").value;
      let mail = document.getElementById("mail").value;

      // Store data in Session storage
      sessionStorage.setItem("name", username);
      sessionStorage.setItem("email", mail);

      // Retrieve data from local storage and display
      let user_name = sessionStorage.getItem("name");
      userDisplay.innerHTML = `Name: ${user_name}`;

      let email_id = sessionStorage.getItem("email");
      mail_id.innerHTML = `Email: ${email_id}`;

      alert("Data saved to Local Storage");
    });