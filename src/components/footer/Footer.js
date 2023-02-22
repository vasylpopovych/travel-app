import styles from "./footer.module.css";
import heartIcon from "../../assets/heart.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.footer__text}>
                from
                <a
                    className={styles.footer__link}
                    href="https://binary-studio.com"
                >
                    binary studio
                </a>
                with
                <img
                    className={styles.footer__icon}
                    src={heartIcon}
                    alt="heart icon"
                />
            </span>
        </footer>
    );
};

export default Footer;
