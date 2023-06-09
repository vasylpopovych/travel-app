/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import BookingCard from "../../components/bookingCard/BookingCard";
import Layout from "../../components/layout/Layout";
import { bookingsData } from "../../helpers/mockData";
import styles from "./bookingsPage.module.css";

const BookingsPage = ({ bookedTrip }) => {
    const [bookings, setBookings] = useState(bookingsData);
    const [bookingId, setBookingId] = useState(null);

    const handleRemove = (id) => {
        setBookingId(id);
    };

    const sortBookings = (a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        return timeA - timeB;
    };

    useEffect(() => {
        const filteredBookings = bookings.filter(
            (item) => item.id !== bookingId
        );
        setBookings(filteredBookings);
    }, [bookingId]);

    useEffect(() => {
        if (bookedTrip) {
            setBookings([...bookings, bookedTrip]);
        }
    }, []);
    return (
        <Layout>
            <main className={styles.bookings_page}>
                <h1 className="visually-hidden">Travel App</h1>
                <ul className={styles.bookings__list}>
                    {bookings.sort(sortBookings).map((booking) => (
                        <BookingCard
                            key={booking.id}
                            bookingsData={booking}
                            onRemove={handleRemove}
                        />
                    ))}
                </ul>
            </main>
        </Layout>
    );
};

export default BookingsPage;
