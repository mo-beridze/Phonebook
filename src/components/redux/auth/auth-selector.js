const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserToken,
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrentUser
};

export default authSelectors;
