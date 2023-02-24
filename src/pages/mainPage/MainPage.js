import { useState } from "react";
import Layout from "../../components/layout/Layout";
import TripCard from "../../components/tripCard/TripCard";
import TripsFilter from "../../components/tripsFilter/TripsFilter";
import { tripsData } from "../../helpers/mockData";
import styles from "./mainPage.module.css";

const MainPage = () => {
    const [trips, setTrips] = useState(tripsData);
    const [titleData, setTitleData] = useState("");
    const [durationData, setDurationData] = useState("");
    const [levelData, setLevelData] = useState("");

    //get data from filters
    const handleSearchTitle = (data) => {
        setTitleData(data);
    };

    const handleSearchDuration = (data) => {
        setDurationData(data);
    };

    const handleSearchLevel = (data) => {
        setLevelData(data);
    };

    //firltering trips

    const filterByDuration = (trip) => {
        if (durationData.length === 1) {
            if (trip.duration >= durationData[0]) return true;
        } else if (durationData.length === 2) {
            if (
                trip.duration >= durationData[0] &&
                trip.duration <= durationData[1]
            )
                return true;
        }
    };

    const filteredTrips = trips.filter((trip) => {
        if (
            trip.title.toLowerCase().includes(titleData) &&
            (levelData === "" || trip.level === levelData) &&
            (durationData === "" || filterByDuration(trip))
        ) {
            return true;
        }
        return false;
    });

    return (
        <Layout>
            <main>
                <h1 className="visually-hidden">Travel App</h1>
                <TripsFilter
                    onSearch={handleSearchTitle}
                    onSelectLevel={handleSearchLevel}
                    onSelectDuration={handleSearchDuration}
                />
                <section className={styles.trips}>
                    <h2 className="visually-hidden">Trips List</h2>
                    <ul className={styles.trip_list}>
                        {filteredTrips.map((trip) => (
                            <TripCard key={trip.id} tripData={trip} />
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
};

export default MainPage;
