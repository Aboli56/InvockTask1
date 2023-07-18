import { connect } from "react-redux";

const Details = props => {
  return (
    <div className="getData">
      <img src={props.image_url} alt="" />
      <h1>Username : {props.username}</h1>
      <p>Repositories : {props.repos}</p>
      <p>Following : {props.following}</p>
      <p>Followers : {props.followers}</p>
      <br />
      <form action="/">
         <button className="homePage" type="submit"> Back</button>
      </form>
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
    image_url: state.image_url
  };
};

export default connect(
  mapStateToProps,
  null
)(Details);