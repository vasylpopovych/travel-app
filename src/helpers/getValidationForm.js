const fullNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{3,20}$/;

export const getValidationForm = (email, pass, fullName = "not-exist") => {
    console.log("validating...");
    console.log(`fullname: ${fullName}`);
    if (fullName === "not-exist") {
        if (emailRegex.test(email.trim()) && passwordRegex.test(pass.trim()))
            return true;
    } else {
        if (
            fullNameRegex.test(fullName.trim()) &&
            emailRegex.test(email.trim()) &&
            passwordRegex.test(pass.trim())
        )
            return true;
    }
};
