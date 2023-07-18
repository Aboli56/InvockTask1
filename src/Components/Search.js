import { connect } from "react-redux";
import * as reactStore from "../Redux-store/Actions/action";
import Details from "./UserProfile/Details";
import './card.css'
const Search = props => {
  const handleChange = e => {
    props.handleUsername(e);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    props.submitForm(e, props.username);
  };

  if (props.grabbedData === true) {
    return <Details />;
  }

  return (
    <div className="getData">
      <h3>{props.message}</h3>
      <input
        type="text"
        placeholder="Enter the Username here ....."
        name="username"
        onChange={handleChange}
        id="username"
        autoComplete="off"
      />
      <br />
      <br />
      <button  className="homePage" onClick={handleSubmitForm}>Search</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    following: state.following,
    followers: state.followers,
    email: state.email,
    grabbedData: state.grabbedData,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);