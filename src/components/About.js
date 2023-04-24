import React from "react";
import { Outlet } from "react-router-dom";

const About2 = () => {
  return (
    <div>
      <h1>This is the about page</h1>
      <p>THis is the page where we route the about us page</p>
      <Outlet />
    </div>
  );
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent-constructor");
  }

  componentDidMount() {
    console.log("parent-componentdidmount");
  }

  render() {
    console.log("parent-rendre");
    return (
      <div>
        <h1>This is the about page</h1>
        <p>THis is the page where we route the about us page</p>
        <Outlet />
      </div>
    );
  }
}

export default About;
