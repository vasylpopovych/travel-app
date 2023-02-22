import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SIGN_IN_PATH, SIGN_UP_PATH } from "../../constants/paths";

const Header = () => {
    let location = useLocation();
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (
            location.pathname === SIGN_IN_PATH ||
            location.pathname === SIGN_UP_PATH
        )
            setIsLogin(true);
    }, []);

    return (
        <header>
            Header
            {isLogin ? <button>one</button> : null}
        </header>
    );
};

export default Header;
