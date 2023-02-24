import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import TripCard from "../../components/tripCard/TripCard";
import TripsFilter from "../../components/tripsFilter/TripsFilter";
import { tripsData } from "../../helpers/mockData";
import styles from "./mainPage.module.css";

const MainPage = () => {
    const [titleData, setTitleData] = useState(null);
    const [durationData, setDurationData] = useState(null);
    const [levelData, setLevelData] = useState(null);
    const [isFiltering, setIsFiltering] = useState(false);

    //get data from filters
    const handleSearchTitle = (data) => {
        setTitleData(data);
        console.log(data);
    };

    const handleSearchDuration = (data) => {
        setDurationData(data);
        console.log(data);
    };

    const handleSearchLevel = (data) => {
        setLevelData(data);
        console.log(data);
    };

    /* logic of filering. When one of filters starts - filter data by all 3 filters 
    problem: коли використовую функцію як аргумент для методу filter, то коли очищую поле вводу всі картки зникають
    Це тому що не запускається фультрація з пустою строкою
    */
    const trips = tripsData;
    const filterByTitle = (trip) => {
        if (titleData) {
            return trip.title.toLowerCase().includes(titleData);
        } else {
            trip;
        }
    };

    const filterByLevel = (trip) => {
        if (levelData) {
            return trip.level === levelData;
        } else {
            trip;
        }
    };

    useEffect(() => {
        if (titleData || durationData || levelData) {
            console.log("effect works");
            setIsFiltering(true);
        }
    }, [titleData, durationData, levelData]);

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
                    {/* {trips.map((trip) => (
                        <TripCard key={trip.id} tripData={trip} />
                    ))} */}
                    <ul className={styles.trip_list}>
                        {isFiltering
                            ? trips
                                  .filter(filterByTitle)
                                  .filter(filterByLevel)
                                  .map((trip) => (
                                      <TripCard key={trip.id} tripData={trip} />
                                  ))
                            : trips.map((trip) => (
                                  <TripCard key={trip.id} tripData={trip} />
                              ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
};

export default MainPage;
