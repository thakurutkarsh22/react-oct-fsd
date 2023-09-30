import { useState } from "react";
import Star from "./Star";

function StarSystem(props) {
  const [tempRating, setTempRating] = useState(0); // how many stars should be selected
  const [premanentRating, setPremanentRating] = useState(0);

  let val = 12;

  //   console.log(tempRating, )

  function handleStartClickRating(rating) {
    setPremanentRating(rating);
    setTempRating(0);
  }

  const { noStar = 5 } = props;

  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <div>Star system</div>

      {arr.map((item, index) => {
        return (
          <Star
            key={index}
            filled={
              tempRating
                ? tempRating > index
                : premanentRating
                ? premanentRating > index
                : false
            }
            onMouseEnterHandler={() => {
              setTempRating(index + 1);
            }}
            onMouseLeaveHandler={() => {
              setTempRating(0);
            }}
            onClickHandler={() => {
              handleStartClickRating(index + 1);
            }}
          />
        );
      })}

      <p>Hey you have tempRating of {tempRating} no. stars</p>
      <p>Hey you have seleted {premanentRating} no. stars</p>
    </>
  );
}

export default StarSystem;
