import React from 'react';
import './index.css';

const BasketItem = ({ name, price, count }) => {
  return (
    <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="count">{count}</div>
      <div className="return">갖다놓기</div>
    </div>
  );
};

const BasketItemList = () => {
  return (
    <div>
      <BasketItem name="포카칩" price={1500} count={2} />
      <BasketItem name="생수" price={850} count={1} />
      <hr />
      <p>
        <b>총합: </b> 3850원
      </p>
    </div>
  );
};

export default BasketItemList;
