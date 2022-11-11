const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function sendEmail(){
  Email.send({
Host : "smtp.elasticemail.com",
Username : "JadeLewis4499@gmail.com",
Password : "Hidalgo102",
To : 'JadeLewis4499@gmail.com',
From : document.getElementById("email").value,
Subject : "New Contact Form Enquiry",
Body : "Name: " + document.getElementById("name").value
+ "<br> Email: " + document.getElementById("email").value
+ "<br> Phone no: " + document.getElementById("phone").value
+ "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("Message Sent Succesfully")
);
}

