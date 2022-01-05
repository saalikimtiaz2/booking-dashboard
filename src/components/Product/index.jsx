import React, { useState, useContext } from "react";
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
  const { addToCard } = useContext(CartContext);
  const [setActiveImage] = useState(dogImages[0]);
  const [activePan, setActivePan] = useState(0);
  const { colors } = useColor();

  const handleChangeActivePan = (value) => () => {
    setActivePan(value);
  };
  const renderViews = () => {
    switch (activePan) {
      case 0:
        return <div>{product?.description}</div>;
      case 1:
        return (
          <div>
            adipisicing elit. Neque officia similique modi architecto animi
            voluptatem dolores accusantium aliquam, fugiat placeat fugit vel
            dolore asperiores officiis quasi sit odit consequatur facilis?
          </div>
        );
      case 2:
        return (
          <div>
            Voluptatem accusantium aliquam, fugiat placeat fugit vel dolore
            asperiores officiis quasi sit odit consequatur facilis?
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
          ${product?.price} <span>$23</span>
        </h3>
        <p className={Styles.productDetail}>{product?.description}</p>
        <p>Select Color</p>
        <select name="colors" id="colors" className={Styles.dropDown}>
          {colors.map((color) => (
            <option value={color} className={Styles.color}>
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

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default Product;
