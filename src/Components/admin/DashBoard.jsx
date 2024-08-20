import React from "react";
import { Link, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Users from "./Users";
import Posts from "./Posts";

const DashBoard = () => {
  return (
    <div>
      <h1>Admin DashBoard</h1>
      <Sidebar />
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default DashBoard;
