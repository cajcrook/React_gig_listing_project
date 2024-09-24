const InputLogger = () => {
    const handleInputChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>
            <label>
                Type something:
            </label>
            <input
            type = "text"
            onChange = {handleInputChange}
            placeholder = "Start typing..."
            />
        </div>
    );
};

export default InputLogger;