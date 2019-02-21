const React = require('react');
const GitHubUser = require('../services/GitHubUser');

const SearchUser = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    GitHubUser.getByUserName(this.refs.username.value)
      .then(function(response) {
        this.props.updateUser(response.data);
      }.bind(this));
    GitHubUser.getResposByUsername(this.refs.username.value)
      .then(function(response) {
        this.props.updateRepos(response.data);
      }.bind(this));
  },
  render: function () {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                onKeyUp={this.handleSubmit}
                ref="username"
                type="text"
                className="form-control"
                placeholder="Ex: marcuspereiragithub"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
});

SearchUser.propTypes = {
  updateUser: React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired
};

module.exports = SearchUser;
