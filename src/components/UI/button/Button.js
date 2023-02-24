/* eslint-disable react/prop-types */
import styles from "./button.module.css";
const Button = ({ children, ...args }) => {
    return (
        <button className={styles.button} {...args}>
            {children}
        </button>
    );
};

export default Button;
