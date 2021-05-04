import React from "react";
import { Redirect, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
function ManagerRoute({ component: Component, ...rest }) {

  const role = localStorage.getItem("role");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (role === "mod"||"admin") {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default withRouter(ManagerRoute)