import { useEffect, useState } from "react";
import "./styles/ProductCard.css";

function ProductCard() {
  const [productData, setProductData] = useState(false);

  async function getProducts() {
    fetch("https://sophisticated-humane-dandelion.glitch.me/")
      .then((data) => data.json())
      .then((data) => setProductData(data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getProducts();
  }, []);

  function handleDeleteClick(productId) {
    setProductData(productData.filter((items) => items.id != productId));
  }

  return productData ? (
    <main>
      {productData.map((product) => {
        return (
          <Card
            key={product.id}
            imgUrl={product.image}
            itemTitle={product.title}
            itemPrice={product.price}
            itemID={product.id}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}{" "}
    </main>
  ) : (
    <div>{"Loading..."}</div>
  );
}

function Card({ handleDeleteClick, itemID, imgUrl, itemTitle, itemPrice }) {
  return (
    <div className="itemCard">
      <div className="imageContainer">
        <img src={imgUrl}></img>
      </div>
      <h5>{itemTitle}</h5>
      <h4>{itemPrice}</h4>
      <h6>Item ID: {itemID}</h6>
      <button
        onClick={() => {
          handleDeleteClick(itemID);
        }}
      >
        Ištrinti
      </button>
    </div>
  );
}

export default ProductCard;

// const moreProducts = [
//   {
//     id: "",
//     image:
//       "https://e-food.reaton.lt/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/0/3/0303040_1.jpg",
//     title: "Sūris",
//     price: 3.59,
//   },
//   {
//     id: "",
//     image: "https://www.ristva.lt/wp-content/uploads/2019/07/Saliami.jpg",
//     title: "Dešra",
//     price: 4.99,
//   },
//   {
//     id: "",
//     image:
//       "https://e-food.reaton.lt/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/0/3/0303040_1.jpg",
//     title: "Sūris",
//     price: 3.59,
//   },
//   {
//     id: "",
//     image: "https://www.ristva.lt/wp-content/uploads/2019/07/Saliami.jpg",
//     title: "Dešra",
//     price: 4.99,
//   },
//   {
//     id: "",
//     image:
//       "https://e-food.reaton.lt/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/0/3/0303040_1.jpg",
//     title: "Sūris",
//     price: 3.59,
//   },
//   {
//     id: "",
//     image: "https://www.ristva.lt/wp-content/uploads/2019/07/Saliami.jpg",
//     title: "Dešra",
//     price: 4.99,
//   },
//   {
//     id: "",
//     image:
//       "https://e-food.reaton.lt/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/0/3/0303040_1.jpg",
//     title: "Sūris",
//     price: 3.59,
//   },
//   {
//     id: "",
//     image: "https://www.ristva.lt/wp-content/uploads/2019/07/Saliami.jpg",
//     title: "Dešra",
//     price: 4.99,
//   },
// ];

// async function postProducts(data) {
//   await fetch("https://sophisticated-humane-dandelion.glitch.me/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// }

// moreProducts.forEach((product) => {
//   postProducts(product);
// });
