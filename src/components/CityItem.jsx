import styles from './CityItem.module.css'

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

function CityItem({city}) {
    const {cityName, date,flag} = city;

    return (
        <li className={styles.cityItem}>
            <span >
                <img className={styles.imgFlag} src={flag} />
            </span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>({formatDate(date)})</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    )
}

export default CityItem
