/* eslint-disable react/prop-types */

const Input = ({ onInputData, labelName, ...args }) => {
    const handleInputChange = (event) => {
        onInputData(event.target.value);
    };

    return (
        <label className="input">
            <span className="input__heading">{labelName}</span>
            <input onChange={handleInputChange} {...args} />
        </label>
    );
};

export default Input;
