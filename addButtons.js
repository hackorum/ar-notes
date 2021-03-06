AFRAME.registerComponent("create-buttons", {
  init: function() {
    var button1 = document.createElement("button");
    button1.innerHTML = "Add Category";
    button1.setAttribute("id", "add-category-button");
    button1.setAttribute("class", "btn btn-warning ml-3 mr-3 mb-3");

    var button2 = document.createElement("button");
    button2.innerHTML = "Add Notes";
    button2.setAttribute("id", "add-note-button");
    button2.setAttribute("class", "btn btn-warning ml-3 mr-3 mb-3");

    var button3 = document.createElement("button");
    button3.innerHTML = "Remove Note";
    button3.setAttribute("id", "remove-note-button");
    button3.setAttribute("class", "btn btn-warning ml-3 mr-3 mb-3");

    var button4 = document.createElement("button");
    button4.innerHTML = "Remove Category";
    button4.setAttribute("id", "remove-category-button");
    button4.setAttribute("class", "btn btn-warning ml-3 mr-3 mb-3");

    var buttonDiv = document.getElementById("button-div");
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
    buttonDiv.appendChild(button3);
    buttonDiv.appendChild(button4);
  },
});
