/* eslint-disable react/prop-types */
import styles from "./button.module.css";
const Button = ({ ...args }) => {
    return (
        <button className={styles.button} {...args}>
            Sign Up
        </button>
    );
};

export default Button;
