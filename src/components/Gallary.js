import React from "react";
import s from "./Gallary.module.css";
import Img1 from "../assets/img/drees.png";
import Img2 from "../assets/img/drees1.png";
import Img3 from "../assets/img/sweter.png";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Shop from "./Shop";
import Order from "./Order";

const Gallary = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Order />}/>
      </Routes>
      <div className={s.body}>
        <div className={s.container}>
          <div className={s.title}>
            <h1>Category name</h1>
          </div>
          <div className={s.icons}>
            <div className={s.iconsAbove}>
              <div className={s.icon}>
                <img
                  alt=""
                  src={Img1}
                  // onClick={
                  //   <BrowserRouter>
                  //     <Routes>
                  //       <Route path="/shop" element={<Magazine />}/>
                  //     </Routes>
                  //   </BrowserRouter>
                  //}
                />

                <NavLink to="/shop">
                  <p>Apollo Running Short</p>
                </NavLink>
                <p>$50.00</p>
              </div>
              <div className={s.icon}>
                <img alt="" src={Img2} />
                <p>Apollo Running Short</p>
                <p>$50.00</p>
              </div>
              <div className={s.icon}>
                <img alt="" src={Img3} />
                <p>Apollo Running Short</p>
                <p>$50.00</p>
              </div>
            </div>
            <div className={s.iconsBelow}>
              <div className={s.icon}>
                <img alt="" src={Img3} />
                <p>Apollo Running Short</p>
                <p>$50.00</p>
              </div>
              <div className={s.icon}>
                <img alt="" src={Img2} />
                <p>Apollo Running Short</p>
                <p>$50.00</p>
              </div>
              <div className={s.icon}>
                <img alt="" src={Img1} />
                <p>Apollo Running Short</p>
                <p>$50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Gallary;
