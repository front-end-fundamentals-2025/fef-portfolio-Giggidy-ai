//Selecting all project containers
const projectContainers = document.querySelectorAll(".project_container");

projectContainers.forEach((project) => {
  project.addEventListener("click", () => {
    //Change background color on click
    project.style.backgroundColor = "#d3f8e2";

    //Showing an alert with the project title
    const projectTitle = project.querySelector("h2").textContent;
  });
});
