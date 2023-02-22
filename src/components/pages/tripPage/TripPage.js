import { useParams } from "react-router-dom";

const TripPage = () => {
    const { tripId } = useParams();
    return <div>TripPage {tripId}</div>;
};

export default TripPage;
