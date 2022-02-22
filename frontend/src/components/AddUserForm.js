import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const AddUserForm = (props) => {
  const [formData, setFormData] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.user_name &&
      formData.first_name &&
      formData.last_name &&
      formData.email &&
      formData.phone_number
    ) {
      axios
        .post(`http://127.0.0.1:8000/user/create/`, formData)
        .then((res) => {
          alert("User Created");
          setFormData({
            user_name: "",
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
          });
          props.closeModal(false);
        })
        .catch((errors) => console.log(errors));
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <CustomWrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <label>User Name*</label>
          <input
            type="text"
            value={formData.user_name}
            onChange={(e) => handleChange(e, "user_name")}
          />
        </InputWrap>
        <InputWrap>
          <label>First Name*</label>
          <input
            type="text"
            value={formData.first_name}
            onChange={(e) => handleChange(e, "first_name")}
          />
        </InputWrap>
        <InputWrap>
          <label>Last Name*</label>
          <input
            type="text"
            value={formData.last_name}
            onChange={(e) => handleChange(e, "last_name")}
          />
        </InputWrap>
        <InputWrap>
          <label>Email*</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </InputWrap>
        <InputWrap>
          <label>Phone No.*</label>
          <input
            type="text"
            value={formData.phone_number}
            onChange={(e) => handleChange(e, "phone_number")}
          />
        </InputWrap>
        <SubmitBtn>
          <button type="submit">Add</button>
        </SubmitBtn>
      </Form>
    </CustomWrapper>
  );
};

export default AddUserForm;

const CustomWrapper = styled.div`
  margin: 24px auto;
  background: #f5f5f5;
`;

const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
`;

const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  & button {
    padding: 4px 16px;
    cursor: pointer;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 14px 0;
  & label {
    margin-bottom: 6px;
  }
  & input {
    background: #f5f5f5;
    border-radius: 4px;
    border: 1px solid #333;
    width: 320px;
    height: 24px;
    padding: 0 12px;
  }
`;
