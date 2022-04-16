let cartData = JSON.parse(localStorage.getItem("cartData"));

let totalPrice = cartData.reduce((sum, ele) => sum + Number(ele.price), 0);
console.log("totalPrice: " +  totalPrice);

cartData.forEach((product) => {
  let productCard = document.createElement("div");

  let image = document.createElement("img");
  image.src = product.image_url;

  let name = document.createElement("p");
  name.innerText = product.name;

  let price = document.createElement("p");
  price.innerText = product.price;

  let rating = document.createElement("p");
  rating.innerText = product.rating;

  productCard.append(image, name, price, rating);

  document.getElementById("cartContainer").append(productCard);
});

let discountedPrice;
document.getElementById("promoBtn").addEventListener("click", () => {
  let enteredPromoCode = document.getElementById("promo").value;

  if ((enteredPromoCode = "masai30")) {
    discountedPrice = totalPrice - 0.3 * totalPrice;
  }
});

document.getElementById("tfare").innerText =
  "Total Price :" + " " + "Rs" + " " + totalPrice;
document.getElementById("dfare").innerText =
  "Discounted Price :" + " " + "Rs" + " " + discountedPrice;
