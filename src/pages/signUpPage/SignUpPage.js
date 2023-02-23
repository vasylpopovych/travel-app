import { useState } from "react";
import { getValidationForm } from "../../helpers/getValidationForm";
import Layout from "../../components/layout/Layout";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { HOME_PAGE_PATH, SIGN_IN_PATH } from "../../constants/paths";
import styles from "./signUpPage.module.css";

const SignUpPage = () => {
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleFullNameData = (data) => {
        setFullName(data);
    };

    const handleEmailData = (data) => {
        setEmail(data);
    };

    const handlePasswordData = (data) => {
        setPassword(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (getValidationForm(email, password, fullName))
            navigate(HOME_PAGE_PATH);
    };

    return (
        <Layout>
            <main className={styles.sign_up_page}>
                <h1 className="visually-hidden">Travel App</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles.sign_up_form}
                    autoComplete="off"
                >
                    <h2 className={styles.sign_up_form__title}>Sign Up</h2>
                    <Input
                        onInputData={handleFullNameData}
                        labelName={"Full name"}
                        data-test-id="auth-full-name"
                        name="full-name"
                        type="text"
                        required
                    />
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
                        {" "}
                        Sign Up
                    </Button>
                </form>
                <span>
                    Already have an account?
                    <Link
                        data-test-id="auth-sign-in-link"
                        to={SIGN_IN_PATH}
                        className={styles.sign_up_form__link}
                    >
                        Sign In
                    </Link>
                </span>
            </main>
        </Layout>
    );
};

export default SignUpPage;
