/* eslint-disable react/prop-types */
import styles from "./tripsFilter.module.css";

const TripsFilter = ({ onSearch, onSelectLevel, onSelectDuration }) => {
    const handleInputData = (event) => {
        onSearch(event.target.value.toLowerCase().trim());
    };

    const handleSelectLevel = (event) => {
        onSelectLevel(event.target.value);
    };

    const handleSelectDuration = (event) => {
        const duration = event.target.value.replace("_x", "").split("_");
        onSelectDuration(duration);
    };
    return (
        <section className={styles.trips_filter}>
            <h2 className="visually-hidden">Trips filter</h2>
            <form className={styles.trips_filter__form} autoComplete="off">
                <label className={`${styles.trips_filter__search} input`}>
                    <span className="visually-hidden">Search by name</span>
                    <input
                        onChange={handleInputData}
                        data-test-id="filter-search"
                        name="search"
                        type="search"
                        placeholder="search by title"
                    />
                </label>
                <label className={styles.select}>
                    <span className="visually-hidden">Search by duration</span>
                    <select
                        data-test-id="filter-duration"
                        name="duration"
                        onChange={handleSelectDuration}
                    >
                        <option value="">duration</option>
                        <option value="0_x_5">&lt; 5 days</option>
                        <option value="5_x_10">&lt; 10 days</option>
                        <option value="10_x">&ge; 10 days</option>
                    </select>
                </label>
                <label className={styles.select}>
                    <span className="visually-hidden">Search by level</span>
                    <select
                        data-test-id="filter-level"
                        name="level"
                        onChange={handleSelectLevel}
                    >
                        <option value="">level</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
                </label>
            </form>
        </section>
    );
};

export default TripsFilter;
