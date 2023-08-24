import { useSearchParams } from "react-router-dom";
import Dog from "./Animals/Dog";
import Lion from "./Animals/Lion";

function Animals() {
  const params = useSearchParams();

  const animalToDisplay = params[0].get("type");

  if (animalToDisplay === "dog") {
    // display dog
  }

  //   console.log("params debug", params[0].);

  return (
    <>
      <h1> Animals</h1>

      {/* <p>on some condition Ill show dog or cat</p> */}

      {animalToDisplay === "dog" && <Dog />}
      {animalToDisplay === "lion" && <Lion />}
      {animalToDisplay !== "dog" && animalToDisplay !== "lion" && (
        <div>no animals there</div>
      )}
    </>
  );
}

export default Animals;
