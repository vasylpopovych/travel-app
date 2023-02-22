/* eslint-disable react/prop-types */
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = (props) => {
    return (
        <div>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
