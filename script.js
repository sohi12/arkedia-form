const form = document.getElementById('jobForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const cv = document.getElementById('cv').files[0];
  const internship = document.getElementById('internship').checked;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("CV File:", cv ? cv.name : "No file");
  console.log("Internship?", internship);

  // Show success message
  successMessage.style.display = 'block';

  // Reset form
  form.reset();
});
