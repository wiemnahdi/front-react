
const RoleReducer = (state, action) => {
    switch (action.type) {
  
      case "ADMIN": {
        return {
          currentRole: action.type,
        };
      }
      case "TEAM_LEADER": {
        return {
          currentRole: action.type,
        };
      }
      case "DEPARTEMENT_CHEF": {
        return {
          currentRole: action.type,
        };
      }
      case "EMPLOYE": {
        return {
          currentRole: action.type,
        };
      }

      default:
        return state;
    }
  };
  
  export default RoleReducer;
  