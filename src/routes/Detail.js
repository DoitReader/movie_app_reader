import React from "react";
import "./About.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="about__container">
          <span>{location.state.title}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
