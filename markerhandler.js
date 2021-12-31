AFRAME.registerComponent("markerhandler", {
  init: function () {
    this.el.addEventListener("markerFound", () => {
      console.log("markerfound");
    });
  },
});
