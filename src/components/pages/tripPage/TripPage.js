import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";

const TripPage = () => {
    const { tripId } = useParams();
    return <Layout>TripPage {tripId}</Layout>;
};

export default TripPage;
