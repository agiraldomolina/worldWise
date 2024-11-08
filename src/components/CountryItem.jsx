import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span >
          <img className={styles.imgFlag} src={country.flag} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
