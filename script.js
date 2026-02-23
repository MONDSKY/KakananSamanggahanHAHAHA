function showAlert(message) {
  alert(message);
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

function openReservation() {
  const name = prompt("Enter your name for reservation:");
  if (name && name.trim() !== "") {
    alert("Thank you, " + name + ". Your reservation request has been received.");
  } else {
    alert("Reservation cancelled.");
  }
}
