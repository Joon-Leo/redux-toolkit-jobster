import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../components/FormRow";

const initalStates = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initalStates);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log("form submitted");
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <FormRow
          handleChange={handleChange}
          type="text"
          labelText="name"
          name="name"
          value={values.name}
        />

        {/* email field */}
        <FormRow
          handleChange={handleChange}
          type="email"
          labelText="email"
          name="email"
          value={values.email}
        />

        {/* Password */}
        <FormRow
          handleChange={handleChange}
          type="password"
          labelText="password"
          name="password"
          value={values.password}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
