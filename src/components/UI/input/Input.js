/* eslint-disable react/prop-types */
import styles from "./input.module.css";

const Input = ({ onInputData, labelName, ...args }) => {
    const handleInputChange = (event) => {
        onInputData(event.target.value);
    };

    return (
        <label className={styles.input}>
            <span className={styles.input__heading}>{labelName}</span>
            <input onChange={handleInputChange} {...args} />
        </label>
    );
};

export default Input;
