import { useState } from "react";
import { Route } from "react-router";
import { Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import BookingsPage from "../pages/bookingsPage/BookingsPage";
import SignInPage from "../pages/signInPage/SignInPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import TripPage from "../pages/tripPage/TripPage";
import {
    BOOKINGS_PATH,
    HOME_PAGE_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH,
    TRIP_PATH,
} from "../constants/paths";

const Router = () => {
    const [bookedTrip, getBookedTrip] = useState(null);
    return (
        <>
            <Routes>
                <Route path={HOME_PAGE_PATH} element={<MainPage />} />
                <Route path={SIGN_UP_PATH} element={<SignUpPage />} />
                <Route path={SIGN_IN_PATH} element={<SignInPage />} />
                <Route
                    path={TRIP_PATH}
                    element={<TripPage bookedTripData={getBookedTrip} />}
                />
                <Route
                    path={BOOKINGS_PATH}
                    element={<BookingsPage bookedTrip={bookedTrip} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default Router;
