AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
      let value = this.el.getAttribute("value");
      let marker = document.querySelector(`#marker-${value}`);
      let plane = document.createElement("a-plane");
      plane.setAttribute("geometry", { height: 3, width: 2 });
      plane.setAttribute("rotation", { x: -90, y: 0, z: 0 });

      let categoryName = this.el.getAttribute("category_name");
      let text = document.createElement("a-entity");
      text.setAttribute("position", { x: 0, y: 0, z: -1.3 });
      text.setAttribute("rotation", { x: -90, y: 0, z: 0 });
      text.setAttribute("text", {
        font: "aileronsemibold",
        width: 4.5,
        height: 3,
        align: "center",
        value: `${categoryName} Notes`,
        color: "black",
      });

      let notesAttribute = this.el.getAttribute("notes");
      let notes = JSON.parse(notesAttribute);
      let z = -0.85;
      for (let noteIndex in notes) {
        let noteTitle = notes[noteIndex];
        let noteTextEl = document.createElement("a-entity");
        noteTextEl.setAttribute("position", { x: 1.1, y: 0, z: z });
        noteTextEl.setAttribute("rotation", { x: -90, y: 0, z: 0 });
        noteTextEl.setAttribute("text", {
          shader: "msdf",
          font: "https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/droidsans/DroidSans-Regular.json",
          width: 4,
          height: 2.5,
          align: "left",
          value: `${noteTitle}`,
          color: "black",
        });
        marker.appendChild(noteTextEl);
        z += 0.3;
      }

      if (marker !== null) {
        marker.appendChild(plane);
        marker.appendChild(text);
      }
    });
  },
});
