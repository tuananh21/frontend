export const checkLoginStatus = () => {
    return localStorage.getItem("token") ? true : false;
};
