import { Link } from "react-router-dom";
import { SIGN_IN_PATH } from "../../constants/paths";
import userImg from "../../assets/user.svg";
import styles from "./profileNavButton.module.css";

const ProfileNavButton = () => {
    return (
        <>
            <li className={styles.nav_header__item} title="Profile">
                <div
                    data-test-id="header-profile-nav"
                    className={`${styles.nav_header__inner} ${styles.profile_nav}`}
                    tabIndex="0"
                >
                    <span className="visually-hidden">Profile</span>
                    <img src={userImg} alt="profile icon" />
                    <ul
                        data-test-id="header-profile-nav-list"
                        className={styles.profile_nav__list}
                    >
                        <li
                            data-test-id="header-profile-nav-username"
                            className={`${styles.profile_nav__item} ${styles.profile_nav__username}`}
                        >
                            John Doe
                        </li>
                        <li className={styles.profile_nav__item}>
                            <Link
                                data-test-id="header-profile-nav-sign-out"
                                to={SIGN_IN_PATH}
                                className={`${styles.profile_nav__sign_out} button`}
                            >
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    );
};

export default ProfileNavButton;
