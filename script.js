//1 лисенер на на основателей
//2 по клику на основателей выводить их номер
//3 получить потомков
//4 менять соответствующий стиль у потомков

const containers = document.querySelectorAll(".containerShow");

console.log(containers);

containers.forEach((parents, id) => {
  parents.addEventListener("click", () => {
    console.log(id);
  });
});

// function removeActiveClasses() {
//   containers.forEach((containerShow) => {
//     containerShow.classList.remove("active");
//   });
// }
