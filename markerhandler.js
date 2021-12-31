AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
      let marker = document.querySelector(
        `#marker-${this.el.getAttribute("value")}`
      );
      let plane = document.createElement("a-plane");
      plane.setAttribute("geometry", { height: 3, width: 2 });
      plane.setAttribute("rotation", { x: -90, y: 0, z: 0 });

      let text = document.createElement("a-entity");
      text.setAttribute("position", { x: 0, y: 0, z: -1.3 });
      text.setAttribute("rotation", { x: -90, y: 0, z: 0 });
      text.setAttribute("text", {
        font: "aileronsemibold",
        width: 4.5,
        height: 3,
        align: "center",
        value: `${this.el.getAttribute("category_name")} Notes`,
        color: "black",
      });

      if (marker !== null) {
        marker.appendChild(plane);
        marker.appendChild(text);
      }
      console.log(JSON.parse(this.el.getAttribute("notes")));
    });
  },
});
