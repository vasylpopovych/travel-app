/* eslint-disable react/prop-types */
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./layout.module.css";

const Layout = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
