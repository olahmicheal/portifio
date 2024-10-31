
let sections = document.querySelectorAll('section');

window.onscroll= ()=>{
sections.forEach( sec=>{

  let top= window.scrollY;
  let offset= sec.offsetTop -150;
  let height =sec.offsetHeight;

  if( top>= offset && top< offset + height){
    sec.classList.add('show-animate')
  }
  else{
    sec.classList.remove('show-animate')
  }
})
}

function toggleDropdown() {
  const dropdown = document.getElementById('dropdownMenu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function sendEmail(service) {
  // Define the recipient email and email message content
  const recipientEmail = "olahmicheal10@gmail.com"; // Insert your email here
  const subject = `Inquiry for ${service}`;
  const message = `Hello,\n\nI am interested in your ${service} services. Please provide me with more information.\n\nThank you.`;

  // Open the email client with a pre-filled email
  window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Hide dropdown menu after selection
  document.getElementById('dropdownMenu').style.display = 'none';
}



document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded'); // Toggle expand/collapse
  });
});



// contact section 
function sendMessage() {
  // Collect user input
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let issue = document.getElementById('issue').value;

  // Ensure all fields are filled
  if (name && email && issue) {
      // Create a message for WhatsApp
      let whatsappMessage = `Hello, my name is ${name}. My email is ${email}. I am facing the following issue: ${issue}`;
      let whatsappUrl = `https://wa.me/+2349123540102?text=${encodeURIComponent(whatsappMessage)}`; // Replace with your WhatsApp number

      // Option to send via email
      let emailSubject = `Issue from ${name}`;
      let emailBody = `Name: ${name}\nEmail: ${email}\nIssue: ${issue}`;
      let mailtoLink = `mailto:olahmicheal10@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Ask the user how they want to submit the message
      if (confirm("Do you want to send via WhatsApp?")) {
          // Redirect to WhatsApp
          window.open(whatsappUrl, '_blank');
      } else {
          // Send via email
          window.open(mailtoLink, '_blank');
      }
        // Reset the form after sending the message
    document.getElementById('contactForm').reset();
  } else {
      alert("Please fill in all fields.");
  }
}