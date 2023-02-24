/* eslint-disable react/prop-types */
import { dateFormater } from "../../helpers/dateFormater";
import styles from "./bookingCard.module.css";

const BookingCard = ({ bookingsData, onRemove }) => {
    return (
        <li data-test-id="booking" className={styles.booking}>
            <h3 data-test-id="booking-title" className={styles.booking__title}>
                {bookingsData.trip.title}
            </h3>
            <span data-test-id="booking-guests" className="booking__guests">
                {bookingsData.guests} guests
            </span>
            <span data-test-id="booking-date" className="booking__date">
                {dateFormater(bookingsData.date)}
            </span>
            <span data-test-id="booking-total" className="booking__total">
                {bookingsData.totalPrice} $
            </span>
            <button
                onClick={() => {
                    onRemove(bookingsData.id);
                }}
                data-test-id="booking-cancel"
                className={styles.booking__cancel}
                title="Cancel booking"
            >
                <span className="visually-hidden">Cancel booking</span>×
            </button>
        </li>
    );
};

export default BookingCard;
