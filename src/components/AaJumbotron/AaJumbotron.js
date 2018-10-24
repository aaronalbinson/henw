import React from "react";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Button from "react-bootstrap/lib/Button";

class AaJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var jumbotronstyles = {
      backgroundImage: `url(${this.props.featuredimage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      height: "80vh"
    };
    return (
      <Jumbotron style={jumbotronstyles}>
        <div className="jumbotron-container">
          <div className="container">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default AaJumbotron;