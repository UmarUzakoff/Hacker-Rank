import React from "react";
import cn from "./admin.module.css";
import { RxAvatar } from "react-icons/rx";
import TableComponent from "./Table/Table";

const AdminPanel = () => {
  return (
    <section className={`${cn.main_box} `}>
      <div className={cn.left_box}>
        <button className={cn.btn}>Users</button>
      </div>
      <div className={cn.right_box}>
        <div className={cn.header}>
          <h1>Admin</h1>
          <RxAvatar size={35} />
        </div>
        <TableComponent />
      </div>
    </section>
  );
};

export default AdminPanel;
