document.addEventListener("DOMContentLoaded", () => {
  console.log("About Me page loaded successfully.");

 
  const sections = document.querySelectorAll(".about-section");

  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(15px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    setTimeout(() => {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, 300 * index);
  });
});
