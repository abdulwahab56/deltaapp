import React, { useState } from "react";
import validateForm from "./validationForm";
import "../Form/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email, password, confirmPass });
    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
    setSuccess("Application was submitted!");
  };
  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };
  const formData = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: "password",
    },
  ];
  return (
    <div className="from_section">
      <div className="formcontainer">
        <div className="FormTitle">Sign up</div>
        <form onSubmit={handelSubmit}>
          {formData.map((el, index) => (
            <div div className="FormInputRow" key={index}>
              {" "}
              <label>{el.label}</label>
              <input
                type={el.type}
                placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                value={el.value}
                onChange={el.onChange}
              />
            </div>
          ))}
          <button className="form_btn">Signup</button>
        </form>

        {error && (
          <div
            className="form_message"
            variants={messageVariants}
            initial="hidden"
            animate="animate"
            error
          >
            {error}
          </div>
        )}
        {success && (
          <div
            className="form_message"
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
