let data = document.getElementById("data");

    data.addEventListener("submit", (event) => {
      event.preventDefault();

      // Get values from form Input
      let user = document.getElementById("username").value;
      let mail = document.getElementById("mail").value;

      // Storing data in Local storage
      localStorage.setItem("name", user);
      localStorage.setItem("email", mail);
      
      // get name
      user_name = localStorage.getItem("name");
      let user_Display = document.getElementById("user");
      user_Display.innerHTML = `Name: ${user_name}`;

      // get email
      email_id = localStorage.getItem("email");
      let mail_id = document.getElementById("mail_id");
      mail_id.innerHTML = `Email: ${email_id}`;
      alert("Data saved to Local Storage");
    });