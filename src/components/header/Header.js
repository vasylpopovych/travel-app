import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
    HOME_PAGE_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH,
} from "../../constants/paths";
import BookingsNavButton from "../UI/bookingsNavButtton/BookingsNavButton";
import ProfileNavButton from "../UI/profileNavButton/ProfileNavButton";
import styles from "./header.module.css";

const Header = () => {
    let location = useLocation();
    const [isAuthorizationPages, setIsAuthorizationPages] = useState(false);
    useEffect(() => {
        if (
            location.pathname === SIGN_IN_PATH ||
            location.pathname === SIGN_UP_PATH
        )
            setIsAuthorizationPages(true);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Link
                    data-test-id="header-logo"
                    className={styles.header__logo}
                    to={HOME_PAGE_PATH}
                >
                    Travel App
                </Link>
                <nav data-test-id="header-nav" className={styles.header__nav}>
                    <ul className={styles.nav_header__list}>
                        {isAuthorizationPages ? null : (
                            <>
                                <BookingsNavButton /> <ProfileNavButton />
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
