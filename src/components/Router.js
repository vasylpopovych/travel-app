import { Route } from "react-router";
import { Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import BookingsPage from "./pages/bookingsPage/BookingsPage";
import SignInPage from "./pages/signInPage/SignInPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import TripPage from "./pages/tripPage/TripPage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/trip/:tripId" element={<TripPage />} />
                <Route path="/bookings" element={<BookingsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default Router;
