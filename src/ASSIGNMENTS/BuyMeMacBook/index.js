import Card from "./Card";
import "./index.css";
import React, { useState } from "react";
const dataArray = [
  { id: 1, name: "256GB SSD storage", price: 80000 },
  { id: 2, name: "512GB SSD storage", price: 100000 },
  { id: 3, name: "1TB SSD storage", price: 120000 },
  { id: 4, name: "2TB SSD storage", price: 160000 },
];

export default function Macbook() {
  const [selectedIndex, setSeletecdIndex] = useState(0);

  const changeHandler = (information) => {
    const whichCardShouldBeSelected = information - 1;
    setSeletecdIndex(whichCardShouldBeSelected);
  };

  return (
    <div className="app">
      <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {dataArray.map((item, index) => {
          const { name, price, id } = item;

          const isCardSelected = index === selectedIndex;

          return (
            <div>
              <Card
                id={id}
                clickhandler={changeHandler}
                isCardSelected={isCardSelected}
                name={name}
                price={price}
              />
            </div>
          );
        })}

        <p id="finalPrice">Price : {dataArray[selectedIndex].price}/-</p>
      </div>

      {/* <Card /> */}
    </div>
  );
}
