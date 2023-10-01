import { useCallback } from "react";
import styles from "./ReactWindow.module.css";
import Card from "./components/Card/Card";

import { data } from "./data/data";
import { FixedSizeList as ListPerfComponent } from "react-window";

function ReactWindowApp() {
  const dataArray = data;

  const Row = useCallback(
    (props) => {
      const { index } = props;
      const dataProps = dataArray[index];
      console.log(props, "props debug, row");
      return (
        <div>
          <Card {...dataProps} />
        </div>
      );
    },
    [dataArray]
  );

  return (
    <div className={styles["container-Window"]}>
      <div className={styles.container}>
        {/* THIS IS THE CULPRIT THIS MAKES ALL THE ELEMENTS WITHOUT BEING ON THE SCREEN */}

        {/* {dataArray.map((item) => {
          return <Card key={item.id} {...item} />;
        })} */}

        {/* REACT WINDOW */}

        <ListPerfComponent
          height={500}
          width={500}
          itemSize={100}
          itemCount={dataArray.length}
        >
          {Row}
        </ListPerfComponent>
      </div>
      ;
    </div>
  );
}

export default ReactWindowApp;

// ADVANTAGES ->
// 1. Initial Page load would be very fast
// 2. Resource taken by brwoser will be less the object creation will be less.

// TRADEOFFS ->
// 1. SEO properly ...
// 2. Local Searches it will not work (Pm , Ops people )
// 3. Showing jankiness (if you are doing heavy computation/ heavy component )

// REAL PRACTICAL LIFE ->

// 1. Internal Dashboards, where data is simple text and it is of huge amount.
