let contactForm = document.getElementById("contact");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let Username = document.getElementById("name").value;
  let Useremail = document.getElementById("email").value;
  let Usermessage = document.getElementById("message").value;

  let data = {
    name: Username,
    email: Useremail,
    message: Usermessage,
  };

  const serviceID = "service_qey34fk";
  const templateID = "template_839eo6i";

  emailjs.send(serviceID, templateID, data).then(function (response) {
    if (response.status === 200) {
      alert("Your message has been sent successfully");
    } else {
      alert("Your message has not been sent");
    }
  });
});
