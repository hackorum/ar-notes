AFRAME.registerComponent("create-buttons", {
  init: function () {
    var button1 = document.createElement("button");
    button1.innerHTML = "Add Category";
    button1.setAttribute("id", "add-category-button");
    button1.setAttribute("class", "btn btn-warning ml-3 mr-3 mb-3");

    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button1);
  },
});
