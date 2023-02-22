import { useParams } from "react-router-dom";
import Layout from "../../Layout";

const TripPage = () => {
    const { tripId } = useParams();
    return <Layout>TripPage {tripId}</Layout>;
};

export default TripPage;
