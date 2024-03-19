import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./table.module.css";
import axios from "axios";

const TableComponent = () => {
  const [users, setUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    const admin = localStorage.getItem("verified");
    if (admin !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://crudcrud.com/api/2d4cf759631b49dbb2f8d7cfe740fb82/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.tableTitle}>
      <h3>Users Table</h3>
      <table className={styles.tableFill}>
        <thead>
          <tr>
            <th className={styles.textLeft}>ID</th>
            <th className={styles.textLeft}>Username</th>
          </tr>
        </thead>
        <tbody className={styles.tableHover}>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className={styles.textLeft}>{index + 1}</td>
              <td className={styles.textLeft}>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
