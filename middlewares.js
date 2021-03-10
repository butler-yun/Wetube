import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 12345,
    }
    next();
};

// helmet csp 때문에 임시로 설정. [추후 수정 건]
export const videoSetHeader = (req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    next();
}