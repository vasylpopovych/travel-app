import { Link } from "react-router-dom";
import { BOOKINGS_PATH } from "../../constants/paths";
import styles from "./bookingsNavButton.module.css";
import briefcaseImg from "../../assets/briefcase.svg";

const BookingsNavButton = () => {
    return (
        <li className={styles.nav_header__item} title="Bookings">
            <Link
                data-test-id="header-bookings-link"
                to={BOOKINGS_PATH}
                className={styles.nav_header__inner}
            >
                <span className="visually-hidden">Bookings</span>
                <img src={briefcaseImg} alt="bookings icon" />
            </Link>
        </li>
    );
};

export default BookingsNavButton;
