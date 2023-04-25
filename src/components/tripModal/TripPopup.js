/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BOOKINGS_PATH } from "../../constants/paths";
import { validateDate } from "../../helpers/validateDate";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import styles from "./tripPopup.module.css";

const TripPopup = ({ tripData, onOpen }) => {
    const [guests, setGuests] = useState("1");
    const [totalPrice, setTotalPrice] = useState(tripData[0].price);
    const [date, setDate] = useState("");
    const [dateWarning, setDateWarning] = useState(false);
    const [guestsWarning, setGuestsWarning] = useState(false);

    const navigate = useNavigate();

    const validateModal = () => {
        if (!dateWarning && !guestsWarning) return true;
    };

    const handleGuests = (e) => {
        if (guestsWarning) setGuestsWarning(false);
        const guests = e.target.value;
        if (+guests > 10 || +guests < 1) {
            setGuestsWarning(true);
        }
        setTotalPrice(tripData[0].price * +guests);
        setGuests(guests);
    };

    const handleDate = (e) => {
        if (dateWarning) setDateWarning(false);
        if (!validateDate(e.target.value)) {
            setDateWarning(true);
        }
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateModal()) {
            onOpen(false);
            addToSessionStorage({
                id: tripData[0].id,
                guests: guests,
                price: totalPrice,
                date: date,
                title: tripData[0].title,
            });
            navigate(BOOKINGS_PATH);
        }
    };

    const addToSessionStorage = (item) => {
        let storageData = [];
        if (sessionStorage.bookings) {
            storageData = JSON.parse(sessionStorage.getItem("bookings"));
            storageData.push(item);
            sessionStorage.setItem("bookings", JSON.stringify(storageData));
        } else {
            let arr = [item];
            sessionStorage.setItem("bookings", JSON.stringify(arr));
        }
    };

    return (
        <div>
            <div className={styles.modal}>
                <div
                    data-test-id="book-trip-popup"
                    className={styles.book_trip_popup}
                >
                    <button
                        onClick={() => {
                            onOpen(false);
                        }}
                        data-test-id="book-trip-popup-close"
                        className={styles.book_trip_popup__close}
                    >
                        ×
                    </button>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.book_trip_popup__form}
                        autoComplete="off"
                    >
                        <div className={styles.trip_info}>
                            <h3
                                data-test-id="book-trip-popup-title"
                                className={styles.trip_info__title}
                            >
                                {tripData[0].title}
                            </h3>
                            <div className={styles.trip_info__content}>
                                <span
                                    data-test-id="book-trip-popup-duration"
                                    className={styles.trip_info__duration}
                                >
                                    <strong>{tripData[0].duration}</strong> days
                                </span>
                                <span
                                    data-test-id="book-trip-popup-level"
                                    className={styles.trip_info__level}
                                >
                                    {tripData[0].level}
                                </span>
                            </div>
                        </div>
                        <Input
                            min={new Date().toLocaleDateString("en-ca")}
                            value={date}
                            onChange={handleDate}
                            labelName={"Date"}
                            data-test-id="book-trip-popup-date"
                            name="date"
                            type="date"
                            required
                        />
                        {dateWarning && (
                            <span className={styles.warning}>
                                Date should be no later than tomorrow!
                            </span>
                        )}
                        <Input
                            value={guests}
                            onChange={handleGuests}
                            labelName={"Number of guests"}
                            data-test-id="book-trip-popup-guests"
                            name="guests"
                            type="number"
                            min="1"
                            max="10"
                            required
                        />
                        {guestsWarning && (
                            <span className={styles.warning}>
                                Number of guests must be 1 to 10!
                            </span>
                        )}
                        <span className={styles.book_trip_popup__total}>
                            Total:
                            <output
                                data-test-id="book-trip-popup-total-value"
                                className={styles.book_trip_popup__total_value}
                            >
                                {totalPrice}$
                            </output>
                        </span>
                        <Button
                            data-test-id="book-trip-popup-submit"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Book a trip
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TripPopup;
