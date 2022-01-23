const containers = document.querySelectorAll(".containerShow");
const containersChild = document.querySelectorAll(".childShow");
const windsor = document.querySelector(".containerWindsor");

containers.forEach((parents, id) => {
  parents.addEventListener("click", () => {
    makeActive(id);
    makeActiveChild(id);
  });
});

function makeActive(id) {
  containers.forEach((parents) => {
    parents.classList.remove("active");
  });
  containers[id].classList.add("active");
}

function makeActiveChild(id) {
  containersChild.forEach((child) => {
    child.classList.remove("active");
  });
  containersChild[id].classList.add("active");
}

// containersChild.forEach((child, id) => {
//   child.addEventListener("click", () => {
//     makeActiveChild(id);
//   });
// });
