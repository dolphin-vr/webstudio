const projects = document.querySelectorAll(".project");
showProject("1");

function showProject(clicked_id) {
    switch (clicked_id) {
      case "1":
         projects.forEach((el) => {el.style.display = "block";});
          break;
      case "2":
         projects.forEach((el) => {el.style.display = "none";});
         showCategory(".flt-web");
          break;
      case "3":
         projects.forEach((el) => {el.style.display = "none";});
         showCategory(".flt-app");
          break;
      case "4":
         projects.forEach((el) => {el.style.display = "none";});
         showCategory(".flt-design");
          break;
      case "5":
         projects.forEach((el) => {el.style.display = "none";});
         showCategory(".flt-market");
          break;
  }   
}

function showCategory(catId){
   const category = document.querySelectorAll(catId);
   category.forEach((el) => {el.style.display = "block";});
}
