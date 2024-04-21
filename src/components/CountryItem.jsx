import styles from "../css/CountryItem.module.css";
import Flag from "react-flagkit";


function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span><Flag country={country.countryCode} /></span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
