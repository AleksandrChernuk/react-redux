export const selectLoggedIn = (s) => s.auth.isLoggedIn;
export const selectUserName = (s) => s.auth.user.name;
export const selectToken = (s) => s.auth.user.token;
