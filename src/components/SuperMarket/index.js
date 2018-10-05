import React from 'react';
import './index.css';
import ItemList from "../ShopItem";
import BasketItemList from "../Basket";


const SuperMarketTemplate = ({ items, basket }) => {
  return (
    <div className="SuperMarket">
      <div className="items-wrapper">
        <h2>상품</h2>
        {items}
      </div>
      <div className="basket-wrapper">
        <h2>장바구니</h2>
        {basket}
      </div>
    </div>
  );
};

const SuperMarket = () => {
  return <SuperMarketTemplate items={<ItemList />} basket={<BasketItemList />} />;
};

export default SuperMarket;
