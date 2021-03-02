import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

const PORT = 4000;

const handleListening = () => {
    console.log(`✅ Listening On: http://localhost:${PORT}`);
}

const home = (req, res) => {
    res.send(`Welcome to my Home!`);
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));

app.get('/', home);

app.listen(PORT, handleListening);