import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getValidationForm } from "../../helpers/getValidationForm";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import Layout from "../../components/layout/Layout";
import { HOME_PAGE_PATH, SIGN_UP_PATH } from "../../constants/paths";
import styles from "./signInPage.module.css";

const SignInPage = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleEmailData = (data) => {
        setEmail(data);
    };

    const handlePasswordData = (data) => {
        setPassword(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getValidationForm(email, password)) navigate(HOME_PAGE_PATH);
    };

    return (
        <Layout>
            <main className={styles.sign_in_page}>
                <h1 className="visually-hidden">Travel App</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles.sign_in_form}
                    autoComplete="off"
                >
                    <h2 className={styles.sign_in_form__title}>Sign In</h2>

                    <Input
                        onInputData={handleEmailData}
                        labelName={"Email"}
                        data-test-id="auth-email"
                        name="email"
                        type="email"
                        required
                    />
                    <Input
                        onInputData={handlePasswordData}
                        labelName={"Password"}
                        data-test-id="auth-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    <Button data-test-id="auth-submit" type="submit">
                        Sign In
                    </Button>
                </form>
                <span>
                    Dont have an account?
                    <Link
                        data-test-id="auth-sign-up-link"
                        to={SIGN_UP_PATH}
                        className={styles.sign_in_form__link}
                    >
                        Sign Up
                    </Link>
                </span>
            </main>
        </Layout>
    );
};

export default SignInPage;
