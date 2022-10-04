import useInputHook from "./hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    resetValue: resetName,
  } = useInputHook((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetValue: resetLastName,
  } = useInputHook((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: resetEmail,
  } = useInputHook((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredName && enteredLastName && enteredEmail) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    resetName();
    resetLastName();
    resetEmail();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            type="text"
            id="name"
          />
          {nameHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            type="text"
            id="name"
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="text"
          id="name"
        />
      </div>
      {emailHasError && <p className="error-text">Email must include @.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
