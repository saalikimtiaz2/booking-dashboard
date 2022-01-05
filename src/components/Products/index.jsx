import React from "react";
import PropTypes from "prop-types";
import Styles from "./style.module.scss";
import Product from "../Product";

function Products({ product }) {
  return (
    <section>
      <div className="container">
        <h2 className={Styles.subHeading}>Product Page</h2>
        <p className={Styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          amet!
        </p>
        <Product product={product} />
      </div>
    </section>
  );
}

Products.defaultProps = {
  product: "",
};

Products.propTypes = {
  product: PropTypes.instanceOf(Object),
};

export default Products;
