import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const gamesRouter = require("./routes/public/gamesRoutes")
const adminRouter = require("./routes/private/adminRoutes")
const authRouter = require("./routes/public/authRoutes")

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/games', gamesRouter)
app.use('/api/admin', adminRouter)
app.use('/api/auth', authRouter)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

