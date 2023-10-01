import styles from "./Card.module.css";

function Card(props) {
  const { albumId, id, title, url, thumbnailUrl } = props;

  return (
    <div className={styles["card-container"]}>
      <img src={thumbnailUrl} alt="profile" className={styles.cardImage} />

      <div className={styles["card-info"]}>
        <h3>AlbumId: {albumId}</h3>
        <h3>TITLE: {title} </h3>
      </div>
    </div>
  );
}

export default Card;
