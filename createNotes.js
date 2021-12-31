AFRAME.registerComponent("createnotes", {
  init: async function () {
    var categories = await this.getCategories();

    var barcodes = Object.keys(categories);

    barcodes.map((barcode) => {
      var category = categories[barcode];
      this.createCategory(category);
    });
  },
  getCategories: function () {
    return fetch("categoryList.json")
      .then((res) => res.json())
      .then((data) => data);
  },
  createCategory: async function (category) {
    let categoryName = category.category_name;
    let barcodeValue = category.barcode_value;

    var scene = document.querySelector("a-scene");

    var marker = document.createElement("a-marker");

    marker.setAttribute("id", `marker-${barcodeValue}`);
    marker.setAttribute("type", "barcode");
    marker.setAttribute("element_name", categoryName);
    marker.setAttribute("value", barcodeValue);
    marker.setAttribute("markerhandler", {});

    scene.appendChild(marker);
  },
});
