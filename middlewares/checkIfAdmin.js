"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const checkIfAdmin = (req, res, next) => {
        const token = req.header('x-token');
        if (!token) {
            return res.status(401).json({
                msg: 'Token missing'
            });
        }
        if (req.role === "admin") {
            next();
        }
        else {
            return res.status(403).json({
                msg: "You don't have the right permission to do this action."
            });
        }
    };
    module.exports = {
        checkIfAdmin
    };
})();
