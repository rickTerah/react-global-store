const userInitialState = {
    user: { loggedIn: false }
  };
  
 const userActions = {
    deleteRule: state => {
      return { user: { loggedIn: true } };
    },
    logout: state => {
      return { user: { loggedIn: false } };
    }
  };

  module.exports = {
      userInitialState,
      userActions
  }
  