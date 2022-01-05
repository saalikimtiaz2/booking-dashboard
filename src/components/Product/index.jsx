import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Rate from "rc-rate";
import { CartContext } from "../../context/cartContext";
import Tabs from "../Tabs";
import useColor from "../../hooks/useColor";
import "rc-rate/assets/index.css";
import Styles from "./style.module.scss";

const dogImages = [
  "/assets/image.png",
  "/assets/image2.png",
  "/assets/image3.png",
  "/assets/image4.png",
];

function Product({ product }) {
  // Context
  const { addToCard } = useContext(CartContext);

  // Hooks
  const { colors } = useColor();

  // States
  const [activeImage, setActiveImage] = useState(dogImages[0]);
  const [activePan, setActivePan] = useState(0);
  const [discount, setDiscount] = useState(0);

  // this functions sets discount
  const getDiscount = (price, dis) => {
    const val1 = (dis / 100) * price;
    setDiscount(price - val1);
  };

  useEffect(() => {
    const temp = product?.price;
    if (temp < 30) {
      getDiscount(temp, 30);
    } else if (temp > 30 && temp < 70) {
      getDiscount(temp, 20);
    } else if (temp > 70 && temp < 100) {
      getDiscount(temp, 10);
    } else if (temp > 100 && temp < 200) {
      getDiscount(temp, 5);
    } else {
      setDiscount(0);
    }
  }, [product]);

  const handleChangeActivePan = (value) => () => {
    setActivePan(value);
  };
  const renderViews = () => {
    switch (activePan) {
      case 0:
        return (
          <div className={Styles.productDetail}>{product?.description}</div>
        );
      case 1:
        return (
          <div className={Styles.productDetail}>
            adipisicing elit. Neque officia similique modi architecto animi
            voluptatem dolores accusantium aliquam, fugiat placeat fugit vel
            dolore asperiores officiis quasi sit odit consequatur facilis?
          </div>
        );
      case 2:
        return (
          <div className={Styles.productDetail}>
            Voluptatem accusantium aliquam, fugiat placeat fugit vel dolore
            asperiores officiis quasi sit odit consequatur facilis?{activeImage}
          </div>
        );
      default:
        return <span>Found Nothing</span>;
    }
  };

  return (
    <div className={Styles.grid}>
      <div className={Styles.images}>
        <img src={product?.image} alt="" className={Styles.activeImage} />
        <div className={Styles.thumbnailWrapper}>
          {dogImages.map((image, idx) => (
            <img
              src={image}
              alt=""
              className={Styles.thumbnail}
              key={image}
              onClick={() => setActiveImage(dogImages[idx])}
            />
          ))}
        </div>
      </div>
      <div className={Styles.details}>
        <h2>{product?.title}</h2>
        <div className={Styles.rating}>
          <Rate value={product?.rating?.rate} count={5} allowHalf disabled />
          <p className={Styles.review}>({product?.rating?.count} Reviews)</p>
        </div>
        <h3 className={Styles.price}>
          ${discount === 0 ? product?.price : Number(discount).toFixed(2)}
          {discount >= 0 ? <span>${product?.price}</span> : ""}
        </h3>
        <p className={Styles.productDetail}>{product?.description}</p>
        <p>Select Color</p>
        <select name="colors" id="colors" className={Styles.dropDown}>
          {colors.map((color) => (
            <option value={color} className={Styles.color} key={color}>
              {color}
            </option>
          ))}
        </select>
        <button className="btn btn-primary" onClick={() => addToCard(product)}>
          Add to Cart
        </button>
        <button className="btn btn-secondary">Add to Wishlist</button>
        <Tabs
          active={activePan}
          changePan={handleChangeActivePan}
          items={["Description", "Delivery", "Refund"]}
        />
        <div className={Styles.tabPan}>{renderViews()}</div>
      </div>
    </div>
  );
}

// default props values for product
Product.defaultProps = {
  product: "",
};

// propstypes for product
Product.propTypes = {
  product: PropTypes.instanceOf(Object),
};

export default Product;
