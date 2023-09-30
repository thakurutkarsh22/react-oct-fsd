import hollowStar from "./asset/hollowStar.svg";
import filledStar from "./asset/filledStar.svg";

function Star(props) {
  const { filled, onMouseEnterHandler, onMouseLeaveHandler, onClickHandler } =
    props;

  return (
    <div
      style={{
        display: "inline-block",
        width: "100px",
        height: "100px",
        padding: "50px",
      }}
      onClick={onClickHandler}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {!filled ? (
        <img src={hollowStar} alt="hollow" width={"100px"} height={"100px"} />
      ) : (
        <img src={filledStar} alt="filled" width={"100px"} height={"100px"} />
      )}
    </div>
  );
}

export default Star;
