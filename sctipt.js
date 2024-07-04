function searchHandling() {
    loading(true);
    const searchElement = document.getElementById("search");
    loadData(searchElement.value);
  }
  
  const loading = (hidden) => {
    const load = document.getElementById("load");
    hidden ? load.classList.remove("hidden") : load.classList.add("hidden");
  };
  
  const loadData = async (Value) => {
    const data = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${Value}`
    ).then((x) => x.json());
    displaySearchReseal(data.data);
  };
  
  const displaySearchReseal = (data) => {
    const product = document.getElementById("cardSection");
    product.innerHTML = "";
    console.log(data);
  
    data.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("cardItem");
      // console.log(card);
      card.innerHTML = `
          <div class="imgDiv">
              <img
                src=${element.image}
                alt="product_photo"
              />
            </div>
            <h2>${element.phone_name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
              harum cum debitis,
            </p>
            <p class="price">$ <span>price</span></p>
            <button class="btn">Details</button>
      `;
      product.appendChild(card);
    });
    loading(false);
  };