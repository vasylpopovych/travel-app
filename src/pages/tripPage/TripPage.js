/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import TripPopup from "../../components/tripModal/TripPopup";
import { HOME_PAGE_PATH } from "../../constants/paths";
import { tripsData } from "../../helpers/mockData";
import styles from "./tripPage.module.css";

const TripPage = ({ bookedTripData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [bookedTrip, getBookedTrip] = useState(null);
    const { tripId } = useParams();
    const navigate = useNavigate();
    const currentTrip = tripsData.filter((trip) => trip.id === tripId);
    const handleClick = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        bookedTripData(bookedTrip);
    }, [bookedTrip]);

    if (!currentTrip) navigate(HOME_PAGE_PATH);

    return (
        <Layout>
            <main className={styles.trip_page}>
                <h1 className="visually-hidden">Travel App</h1>
                <div className={styles.trip}>
                    <img
                        data-test-id="trip-details-image"
                        src={currentTrip[0].image}
                        className={styles.trip__img}
                        alt="trip image"
                    />
                    <div className={styles.trip__content}>
                        <div className={styles.trip_info}>
                            <h3
                                data-test-id="trip-details-title"
                                className={styles.trip_info__title}
                            >
                                {currentTrip[0].title}
                            </h3>
                            <div className={styles.trip_info__content}>
                                <span
                                    data-test-id="trip-details-duration"
                                    className={styles.trip_info__duration}
                                >
                                    <strong>{currentTrip[0].duration}</strong>{" "}
                                    days
                                </span>
                                <span
                                    data-test-id="trip-details-level"
                                    className={styles.trip_info__level}
                                >
                                    {currentTrip[0].level}
                                </span>
                            </div>
                        </div>
                        <div
                            data-test-id="trip-details-description"
                            className={styles.trip__description}
                        >
                            {currentTrip[0].description}
                        </div>
                        <div className={styles.trip_price}>
                            <span>Price</span>
                            <strong
                                data-test-id="trip-details-price-value"
                                className={styles.trip_price__value}
                            >
                                {currentTrip[0].price} $
                            </strong>
                        </div>
                        <button
                            onClick={handleClick}
                            data-test-id="trip-details-button"
                            className={`${styles.trip__button} button`}
                        >
                            Book a trip
                        </button>
                    </div>
                </div>
            </main>
            {isOpen && (
                <TripPopup
                    tripData={currentTrip}
                    bookedTrip={getBookedTrip}
                    onOpen={setIsOpen}
                />
            )}
        </Layout>
    );
};

export default TripPage;
