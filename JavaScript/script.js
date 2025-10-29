let items = [
  {
    itemName: "Banana",
    image: "banana2.jpg",
    description: "for Breakfast and for Snack",
    importance: 0,
  },
  {
    itemName: "Olives",
    image: "olives.jpg",
    description: "Green and big ones",
    importance: 0,
  },
  {
    itemName: "Yoghurt",
    image: "yoghurt.jpg",
    description: "for Breakfast and for Snack",
    importance: 0,
  },
  {
    itemName: "Coffee",
    image: "coffee.jpg",
    description: "Beans for Espresso",
    importance: 0,
  },
  {
    itemName: "Milk",
    image: "milk.jpg",
    description: "Lactose free",
    importance: 0,
  },

  {
    itemName: "Bread",
    image: "bread.jpg",
    description: "Crunchy and dark",
    importance: 0,
  },
  {
    itemName: "Eggs",
    image: "eggs.jpg",
    description: "12 pieces",
    importance: 0,
  },
  {
    itemName: "Onions",
    image: "onion.jpg",
    description: "Bag of white big ones",
    importance: 0,
  },
  {
    itemName: "Wine",
    image: "wine.jpg",
    description: "Red for drinking",
    importance: 0,
  },
];

function init() {
  let item_container = document.getElementById("container");

  items.forEach((item, index) => {
    item_container.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-2 mb-2">
            <div class="d-flex justify-content-center">
                <div class="card" style="width: 18rem">
                    <img src="./Images/${item.image}" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${item.itemName}</h5>
                        <p class="card-text">${item.description}</p>
                        <hr>
                        <div class="counter-container">
                            <div class="priority">
                                <strong>Priority Level: </strong>
                                <span id="${item.itemName}" class="btn btn-success priority-badge" onclick="priorityButtonClick('${item.itemName}')">${item.importance}</span>
                            </div>

                            <div class="d-flex justify-content-end">
                                <a href="#" class="btn btn-danger me-2">Delete</a>
                                <a href="#" class="btn btn-success" onclick="doneClick('${item.itemName}')">Done</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  });
}

function priorityButtonClick(itemName) {
  items.forEach((itemArray) => {
    if (itemArray.itemName === itemName) {
      if (itemArray.importance < 5) {
        itemArray.importance++;
      } else {
        itemArray.importance = 0;
      }

      let buttonToUpdate = document.getElementById(itemName);

      buttonToUpdate.innerHTML = itemArray.importance;

      buttonToUpdate.className =
        "btn priority-badge " + priorityColour(itemArray.importance);
    }
  });
}

function priorityColour(importance) {
  if (importance < 2) return "btn-success";
  else if (importance < 4) return "btn-warning";
  else return "btn-danger";
}

function sortMe() {
  items.sort((a, b) => b.importance - a.importance);

  let item_container = document.getElementById("container");
  item_container.innerHTML = "";

  init();
}

function resetMe() {
  items.forEach((item) => {
    item.importance = 0;
  });

  let item_container = document.getElementById("container");
  item_container.innerHTML = "";

  init();
}

function doneClick(itemName) {
  items.forEach((item) => {
    if (item.itemName === itemName) {
      item.importance = 0;
    }

    let item_container = document.getElementById("container");
    item_container.innerHTML = "";

    init();
  });
}

init();
