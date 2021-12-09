import Employees from "./components/employees";
import Navbar from "./components/navbar";
import jwtDecode from "jwt-decode";
import { Redirect, Route, Router, Switch } from "react-router";
import { useState, useEffect } from "react";

import Clients from "./components/clients";
import Sales from "./components/sales";
import NewEmployee from "./components/newEmployee";
import eProfile from "./components/employeeProfile";
import Login from "./components/login";
import Logout from "./components/logout";
import Home from "./components/home";
import NewClient from "./components/newClient";
import { SpeedDial } from "@mui/material";
import BasicSpeedDial from "./components/speedDial";
import NewNotice from "./components/newNoticeMessage";
import Forbidden from "./components/400";

function App() {
  const [user, setUser] = useState("");
  const [stop, setStop] = useState("");

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const currentUser = jwtDecode(jwt);
      setUser(currentUser);
    } catch (err) {}
  }, [stop]);

  return (
    <div
      className="App"
      style={{ backgroundColor: "rgba(240, 242, 250)", minHeight: "100vh" }}
    >
      <Navbar user={user}></Navbar>
      <div className="container">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route
            path="/new-notice"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <NewNotice user={user} {...props} />;
            }}
          ></Route>
          <Route
            path="/new-client"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <NewClient {...props} />;
            }}
          ></Route>
          <Route
            path="/clients"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <Clients user={user} {...props} />;
            }}
          ></Route>
          <Route
            path="/new-employee"
            render={(props) => {
              if (!user.isAdmin) return <Forbidden />;
              return <NewEmployee user={user} {...props} />;
            }}
          ></Route>
          <Route
            path="/employees/:id"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <eProfile user={user} {...props} />;
            }}
          ></Route>
          <Route
            path="/employees"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <Employees user={user} {...props} />;
            }}
          ></Route>
          <Route user={user} path="/" component={Home}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
