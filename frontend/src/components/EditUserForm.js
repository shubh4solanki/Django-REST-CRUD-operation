import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
const EditUserForm = (props) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (props.userData) {
      setFormData(props.userData);
    }
  }, [props.userData]);

  const handleChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { first_name, last_name, user_name, email, phone_number, ...rest } =
      formData;
    let data = {
      user_name: user_name,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
    };
    axios
      .put(`http://127.0.0.1:8000/user/update/${formData.id}`, data)
      .then((res) => alert("User Updated"))
      .catch((errors) => console.log(errors));
  };

  return (
    <CustomWrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrap>
          <label>User Name</label>
          <input type="text" value={formData.user_name} />
        </InputWrap>
        <InputWrap>
          <label>First Name</label>
          <input
            type="text"
            value={formData.first_name}
            onChange={(e) => handleChange(e, "first_name")}
          />
        </InputWrap>
        <InputWrap>
          <label>Last Name</label>
          <input
            type="text"
            value={formData.last_name}
            onChange={(e) => handleChange(e, "last_name")}
          />
        </InputWrap>
        <InputWrap>
          <label>Email</label>
          <input
            type="text"
            value={formData.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </InputWrap>
        <InputWrap>
          <label>Phone No.</label>
          <input
            type="text"
            value={formData.phone_number}
            onChange={(e) => handleChange(e, "phone_number")}
          />
        </InputWrap>
        <SubmitBtn>
          <button type="submit">Update</button>
        </SubmitBtn>
      </Form>
    </CustomWrapper>
  );
};

export default EditUserForm;

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
