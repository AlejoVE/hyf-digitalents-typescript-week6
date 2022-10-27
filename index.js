"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const gamesRouter = require("./routes/public/gamesRoutes");
const adminRouter = require("./routes/private/adminRoutes");
const authRouter = require("./routes/public/authRoutes");
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use('/api/games', gamesRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
