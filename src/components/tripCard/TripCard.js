/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "../UI/button/Button";
import styles from "./tripCard.module.css";

const TripCard = ({ tripData }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/trip/" + tripData.id);
    };
    return (
        <li data-test-id="trip-card" className={styles.trip_card}>
            <img
                data-test-id="trip-card-image"
                src={tripData.image}
                alt="trip image"
                className={styles.trip_card_image}
            />
            <div className={styles.trip_card__content}>
                <div className={styles.trip_info}>
                    <h3
                        data-test-id="trip-card-title"
                        className={styles.trip_info__title}
                    >
                        {tripData.title}
                    </h3>
                    <div className={styles.trip_info__content}>
                        <span
                            data-test-id="trip-card-duration"
                            className={styles.trip_info__duration}
                        >
                            <strong>{tripData.duration}</strong> days
                        </span>
                        <span
                            data-test-id="trip-card-level"
                            className={styles.trip_info__level}
                        >
                            {tripData.level}
                        </span>
                    </div>
                </div>
                <div className={styles.trip_price}>
                    <span>Price</span>
                    <strong
                        data-test-id="trip-card-price-value"
                        className={styles.trip_price__value}
                    >
                        {tripData.price} $
                    </strong>
                </div>
            </div>
            <Button onClick={handleClick} data-test-id="trip-card-link">
                Discover a trip
            </Button>
        </li>
    );
};

export default TripCard;
