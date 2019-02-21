import axios from 'axios';

const GitHubUser = {
  getByUserName(username) {
    return axios.get(`https://api.github.com/users/${username}`);
  },
  getResposByUsername(username) {
    return axios.get(`https://api.github.com/users/${username}/repos`);
  }
};
export default GitHubUser;