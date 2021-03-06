AFRAME.registerComponent("handle-categories", {
  init: async function () {
    var categories = await this.getCategories();

    var barcodes = Object.keys(categories);

    barcodes.map((barcode) => {
      var category = categories[barcode];
      this.createCategory(category);
    });

    let addCategoryButton = document.querySelector("#add-category-button");
    addCategoryButton.addEventListener("click", async () => {
      let newCategoryName = prompt("Please enter the new category name:", "");
      if (newCategoryName != null) {
        await firebase
          .firestore()
          .collection("categories")
          .doc(JSON.stringify(categories.length))
          .set({
            barcode_value: categories.length,
            category_name: newCategoryName,
            notes: [],
          })
          .then(() => {
            window.location.reload();
          });
      }
      categories = await this.getCategories();
    });

    let removeCategoryButton = document.querySelector(
      "#remove-category-button"
    );
    removeCategoryButton.addEventListener("click", async () => {
      let removeCategoryName = prompt(
        "Please enter the category name that you want to remove:",
        ""
      );
      if (removeCategoryName != null) {
        await firebase
          .firestore()
          .collection("categories")
          .where("category_name", "==", removeCategoryName)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              doc.ref.delete();
            });
          });
      }
      categories = await this.getCategories();
    });
  },
  getCategories: async function () {
    return await firebase
      .firestore()
      .collection("categories")
      .get()
      .then((snap) => snap.docs.map((doc) => doc.data()));
  },
  createCategory: async function (category) {
    let categoryName = category.category_name;
    let barcodeValue = category.barcode_value;
    let notes = JSON.stringify(category.notes);

    var scene = document.querySelector("a-scene");

    var marker = document.createElement("a-marker");

    marker.setAttribute("id", `marker-${barcodeValue}`);
    marker.setAttribute("type", "barcode");
    marker.setAttribute("category_name", categoryName);
    marker.setAttribute("value", barcodeValue);
    marker.setAttribute("notes", notes);
    marker.setAttribute("markerhandler", {});

    scene.appendChild(marker);
  },
});
