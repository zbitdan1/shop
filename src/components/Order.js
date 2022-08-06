import React from "react";
import s from "./Order.module.css";
import Img1 from "../assets/img/drees1.png";
import Img2 from "../assets/img/drees.png";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, decrementCountSecond, incrementCount, incrementCountSecond } from "../redux/countReducers";

const Order = () => {
  const dispatch = useDispatch ()

  const count = useSelector((state) => {
    const { countReducer } = state;
    return countReducer.count;
  });

  const countSecond = useSelector((state) => {
    const { countReducer } = state;
    return countReducer.countSecond;
  });

  const handleIncrement = () => {
    dispatch(incrementCount())
  }

  const handleDecrement = () => {
    dispatch(decrementCount())
  }

  const handleIncrementSecond = () => {
    dispatch(incrementCountSecond())
  }

  const handleDecrementSecond = () => {
    dispatch(decrementCountSecond())
  }

  return (
    <div className={s.bodyOrder}>
      <div className={s.order}>
        <div className={s.icon}>
          <div className={s.title}>
            <h1>Cart</h1>
          </div>
          <div className={s.items}>
            <div className={`${s.item} ${s.buttons}`}>
              <div className={s.subItem}>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.itemTtileSubMain}`}>
                    Apollo
                  </p>
                </div>
                <div className={s.itemTitle}>
                  <p className={s.itemSubTitle}>Running Short</p>
                </div>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.prise}`}>$50.00</p>
                </div>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.choose}`}>Size:</p>
                </div>
                <div className={s.itemTitle}>
                  <div className={s.squereSize}>
                    <p>XS</p>
                  </div>
                  <div className={s.squereSize}>
                    <p>S</p>
                  </div>
                  <div className={s.squereSize}>
                    <p>M</p>
                  </div>
                  <div className={s.squereSize}>
                    <p>L</p>
                  </div>
                </div>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.choose}`}>Color:</p>
                </div>
                <div className={s.itemTitle}>
                  <div className={`${s.squereColor} ${s.color1}`}></div>
                  <div className={`${s.squereColor} ${s.color2}`}></div>
                  <div className={`${s.squereColor} ${s.color3}`}></div>
                </div>
              </div>
              <div className={s.subItem}>
                <div className={s.totalClothes}>
                  <div className={s.squerePlus} onClick={handleIncrement}>
                    <p>+</p>
                  </div>
                  <div>
                    <p className={s.itemSubNumber}>{count}</p>
                  </div>
                  <div className={s.squereMinus} onClick={handleDecrement}>
                    <p>-</p>
                  </div>
                  <img className={s.img} alt="" src={Img1} />
                </div>
              </div>
            </div>

            <div className={`${s.item} ${s.buttons}`}>
              <div className={s.subItem}>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.itemTtileSubMain}`}>
                    Jupiter
                  </p>
                </div>
                <div className={s.itemTitle}>
                  <p className={s.itemSubTitle}>Wayfarer</p>
                </div>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.prise}`}>$75.00</p>
                </div>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.choose}`}>Size:</p>
                </div>
                <div className={s.itemTitle}>
                  <div className={s.squereSize}>
                    <p>S</p>
                  </div>
                  <div className={s.squereSize}>
                    <p>M</p>
                  </div>
                </div>
                <div className={s.itemTitle}>
                  <p className={`${s.itemSubTitle} ${s.choose}`}>Color:</p>
                </div>
                <div className={s.itemTitle}>
                  <div className={`${s.squereColor} ${s.color4}`}></div>
                  <div className={`${s.squereColor} ${s.color5}`}></div>
                  <div className={`${s.squereColor} ${s.color6}`}></div>
                </div>
              </div>
              <div className={s.subItem}>
                <div className={s.totalClothes}>
                  <div className={s.squerePlus} onClick={handleIncrementSecond}>
                    <p>+</p>
                  </div>
                  <div>
                    <p className={s.itemSubNumber}>{countSecond}</p>
                  </div>
                  <div className={s.squereMinus} onClick={handleDecrementSecond}>
                    <p>-</p>
                  </div>
                  <img className={s.img} alt="" src={Img2} />
                </div>
              </div>
            </div>
          </div>
          <div className={s.buttons}>
            <div className={s.btnTitle}>
              <p className={s.price}>
                Tax 21%: <p className={s.bold}>$42.00</p>
              </p>
              <p className={s.price}>
                Quantity: <p className={s.bold}>3</p>
              </p>
              <p className={s.price}>
                Total: <p className={s.bold}>$200.00</p>
              </p>
            </div>
            <div className={s.btns}>
              <button className={`${s.btn1} ${s.btn}`}>Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
