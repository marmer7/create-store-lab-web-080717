export default function manageUsers(state = { users: [] }, action) {
  switch (action.type) {
    case "ADD_USER":
      console.log("ADDING USER", action.user);
      return { users: state.users.concat(action.user) };
    default:
      return state;
  }
}
