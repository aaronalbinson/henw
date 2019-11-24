import React from "react";
import turning from "../../img/turning.svg";
import milling from "../../img/milling.svg";
import welding from "../../img/welding.svg";
import repair from "../../img/repair.svg";
import bespoke from "../../img/bespoke.svg";
import products from "../../img/products.svg";

require("./Services.scss");

class Services extends React.Component {
  render() {
    return (
      <div className="services-links">
        <div className="service-links-inner">
          <div className="twenty turning">
            <a href="/turning">
              <img width="200" src={turning} alt="Turning" />
              <div>Turning</div>
            </a>
          </div>
          <div className="twenty milling">
            <a href="/milling">
              <img width="200" src={milling} alt="Milling" />
              <div>Milling</div>
            </a>
          </div>
          <div className="twenty welding">
            <a href="/welding">
              <img width="200" src={welding} alt="Welding" />
              <div>Welding</div>
            </a>
          </div>
          <div className="twenty repair">
            <a href="/repair-work">
              <img width="200" src={repair} alt="Repair Work" />
              <div>Repair Work</div>
            </a>
          </div>
          <div className="twenty bespoke">
            <a href="/bespoke-parts">
              <img width="200" src={bespoke} alt="Bespoke parts" />
              <div>Bespoke parts</div>
            </a>
          </div>
          <div className="twenty twentyone products">
            <a href="/products">
              <img width="200" src={products} alt="Products" />
              <div>Our Products</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
