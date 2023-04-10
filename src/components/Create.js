import axios from "axios";
import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const Create = () => {
  const [mami, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(`https://64318147d4518cfb0e62f291.mockapi.io/contacts`, {
      mami,
      lastName,
      checkbox,
    });
  };
  return (
    <Form className="create-form">
      <Form.Input
        id="firstName"
        label="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Form.Input
        id="lastName"
        label="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <Form.Checkbox
        label="check box!"
        onChange={() => {
          setCheckbox(!checkbox);
        }}
      />
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
