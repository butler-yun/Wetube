import routes from "../routes";

// Join
export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
};

export const postJoin = (req, res) => {
    const {
        body: {
            name, email, password, password2
        }
    } = req;
    // req.body.name과 같음

    // 입력한 비밀번호가 다를 때
    if (password !== password2) {
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else {
        // 비밀번호가 같을 때
        res.redirect(routes.home)
    }
};


// login
export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "Login"});
};

export const postLogin = (req, res) => {
    res.redirect(routes.home)
};

export const logout = (req, res) => {
    res.render("logout",  {pageTitle: "Logout"});
};

export const users = (req, res) => {
    res.render("users",  {pageTitle: "Users"});
};

export const userDetail = (req, res) => {
    res.render("userDetail",  {pageTitle: "User Detail"});
};

export const editProfile = (req, res) => {
    res.render("editProfile",  {pageTitle: "Edit Profile"});
};

export const changePassword = (req, res) => {
    res.render("changePassword",  {pageTitle: "Change Password"});
};