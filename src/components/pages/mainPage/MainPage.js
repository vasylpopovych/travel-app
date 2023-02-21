import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            MainPage
            <br />
            <Link to="/trip/1">To Trip 1</Link>
            <br />
            <Link to="/trip/2">To Trip 2</Link>
            <br />
            <Link to="/trip/3">To Trip 3</Link>
        </div>
    );
};

export default MainPage;
