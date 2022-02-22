import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import EditUserForm from "./EditUserForm";
import AddUserForm from "./AddUserForm";
import Modal from "../shared-components/Modal/Modal";
import styled from "styled-components";
const users = [];

const User = (props) => {
  const [userData, setUserData] = useState(users);
  const [editUserData, setEditUserData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEditUser = (data) => {
    setEditUserData(data);
    setShowEditModal(true);
  };

  useEffect(() => {
    getUsers();
  }, [loading, showAddModal]);

  function getUsers() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/user/lists/",
    })
      .then((response) => {
        const data = response.data;
        setUserData(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  
  function deleteUser(user) {
    setLoading(true);
    axios
      .delete(`http://127.0.0.1:8000/user/${user.id}/delete/`)
      .then((res) => {
        alert("User Deleted");
        setLoading(false);
      })
      .catch((errors) => console.log(errors));
  }

  return (
    <div>
      <button onClick={() => setShowAddModal(true)}>Add User</button>
      <Table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={`user-${user.id}`}>
              <td onClick={() => handleEditUser(user)}>{user.user_name}</td>
              <td onClick={() => handleEditUser(user)}>{user.first_name}</td>
              <td onClick={() => handleEditUser(user)}>{user.last_name}</td>
              <td onClick={() => handleEditUser(user)}>{user.email}</td>
              <td onClick={() => handleEditUser(user)}>{user.phone_number}</td>
              <td>
                <FaTrash onClick={() => deleteUser(user)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        showModal={showEditModal}
        closeModal={() => setShowEditModal(false)}
      >
        <EditUserForm userData={editUserData} />
      </Modal>
      <Modal showModal={showAddModal} closeModal={() => setShowAddModal(false)}>
        <AddUserForm closeModal={setShowAddModal} />
      </Modal>
    </div>
  );
};

export default User;

const Table = styled.table`
  border: 1px solid #ccc;
  margin: 24px 0 0 0;
  border-collapse: collapse;
  width: 100%;
  & thead {
    & tr {
      & th {
        padding: 5px 10px;
        background: #ddd;
        border-left: 1px solid #ccc;
      }
    }
  }
  & tbody {
    & tr {
      & td {
        padding: 5px 10px;
        text-align: center;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
      }
    }
  }
`;
