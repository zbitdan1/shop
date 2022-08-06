import React from "react";
import s from "./Shop.module.css";
import Img from "../assets/img/drees.png";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Order from "./Order";

const Magazine = () => {
  return (
    <div className={s.sshop}>
      <div className={s.shop}>
        <div className={s.container}>
          <div className={s.items}>
            <div className={s.item}>
              <img className={s.img1} alt="" src={Img} />
              <img className={s.img1} alt="" src={Img} />
              <img className={s.img1} alt="" src={Img} />
            </div>
            <div className={s.item}>
              <img className={s.img2} alt="" src={Img} />
            </div>
            <div className={s.item}>
              <div className={s.cart}>
                <p className={s.title}>Apollo</p>
                <p className={s.subTitle}>Running Short</p>
                <p className={s.size}>Size:</p>
                <div className={s.chooseSize}>
                  <div>
                    <p>XS</p>
                  </div>
                  <div>
                    <p>S</p>
                  </div>
                  <div>
                    <p>M</p>
                  </div>
                  <div>
                    <p>L</p>
                  </div>
                </div>
                <p className={`${s.color} ${s.size}`}>Color:</p>
                <div className={s.chooseColor}>
                  <div className={s.greyColor}></div>
                  <div className={s.blackColor}></div>
                  <div className={s.greenColor}></div>
                </div>
                <p className={s.price}>Price:</p>
                <p className={s.priceCurrent}>$50.00</p>
                <NavLink to="/cart">
                  <button className={s.btn}>ADD TO CART</button>
                </NavLink>
                <p className={s.lorem}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
