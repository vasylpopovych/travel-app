import { useParams } from "react-router-dom";

const TripPage = () => {
    const { id } = useParams();
    return <div>TripPage {id}</div>;
};

export default TripPage;
