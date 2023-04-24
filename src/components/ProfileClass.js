import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   userInfo: {
    //     name: "Dummy Name",
    //     location: "Dummy location",
    //   },
    // };
    console.log("CONSTRUCTOR");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("skkjsj");
    }, 1000);
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }
  render() {
    console.log("rendre");
    return (
      <div>
        <h1>This is profile class component.</h1>
        {/* <h2>Name : {this.state.userInfo.name}</h2>
        <h2>Location : {this.state.userInfo.location}</h2>
        <h2>COmpany : {this.state.userInfo.company}</h2> */}
      </div>
    );
  }
}

export default Profile;
