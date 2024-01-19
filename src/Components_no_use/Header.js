import React from "react";
import { push } from "connected-react-router";
import { toggleLanguage } from "../store";
import { goToRedPage } from "../store";
import { connect } from "react-redux";
import { withNavigation } from "../HOC/withNavigation";
class Header extends React.Component {

  UNSAFE_componentWillReceiveProps(nextProps){
    const {isFrench} = nextProps
    this.isFrench = isFrench
    console.log(nextProps);
  }

  handleToggleLanguage = () => {
    this.props.dispatch(toggleLanguage());
  };

  handleDropdown = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "home") {
      this.props.dispatch(push("/"));
    } else if (selectedOption === "red") {
      this.props.dispatch(goToRedPage());
    }
  };

  handleRedButton = () => {
    this.props.dispatch(goToRedPage());
  };

  render() {
    return (
      <div style={{border:'2px solid black'}}>
        <h1>
          {this.isFrench ? "Bonjour" : "This is Class Based Header Component"} {this.props.name}
        </h1>
        <button onClick={this.handleToggleLanguage}>Toggle Language</button>

        {/* <select
          id="Dropdown"
          className="dropdown"
          onChange={(e) => this.handleDropdown(e)}
        >
          <option value="home">Home Page</option>
          <option value="red">Red Page</option>
        </select> */}

        <button onClick={this.handleRedButton}>Route 1</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isFrench: state.app.isFrench,
});
export default connect(mapStateToProps, null)(Header);
// export default withNavigation(Header);
