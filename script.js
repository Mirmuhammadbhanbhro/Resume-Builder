const form = document.getElementById("cv-form");
const resumeContent = document.getElementById("resume-content");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Retrieve form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const degree = document.getElementById("degree").value;
  const institution = document.getElementById("institution").value;
  const educationStartDate = document.getElementById("education-start-date").value;
  const educationEndDate = document.getElementById("education-end-date").value || "Present";
  const skills = document.getElementById("skills").value;
  const profilePicInput = document.getElementById("profile-pic");
  let profilePicURL = "";
  if (profilePicInput.files && profilePicInput.files[0]) {
    const file = profilePicInput.files[0];
    profilePicURL = URL.createObjectURL(file);
  }
  resumeContent.innerHTML = `
    <div class="profile-section">
      <img src="${profilePicURL}" alt="Profile Picture" class="profile-pic">
      <h3>${name}</h3>
    </div>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <hr>
    <h4>Professional Summary</h4>
    <p>${summary}</p>
    <hr>
    <h4>Education</h4>
    <p><strong>${degree}</strong> from ${institution}</p>
    <p>${educationStartDate} - ${educationEndDate}</p>
    <hr>
    <h4>Skills</h4>
    <p>${skills}</p>
  `;
});
