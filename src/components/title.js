import React from "react";
import Navbar from "./navbar";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titleBtn: false };
    this.handletitleBtn = this.handletitleBtn.bind(this);
  }

  handletitleBtn() {
    this.setState({ titleBtn: true });
  }

  render() {
    const { titleBtn } = this.state;
    return (
      <div className="main">
        <button
          style={
            window.innerWidth < 815 && this.props.bg
              ? { backgroundImage: "linear-gradient(150deg, grey ,#0276FD)" }
              : null
          }
          onClick={this.handletitleBtn}
          className="title"
        >
          A<span className="letter">c</span>
          <span className="letter">c</span>ent
        </button>
        {titleBtn ? <Navbar /> : null}
      </div>
    );
  }
}

export default Title;
