import jwt from 'jsonwebtoken';
import  User from '../models/User.js';


export const protectRoute = async (req, res, next) => {
    try {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized->Invalid Token" });
    }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded ) {
            return res.status(401).json({ message: "Unauthorized->Invalid Token" });
        }
        const user = await User.findById(decoded.userid).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized -> User not found" });
        }
        req.user = user; // Attach user to request object
        next();
    } catch (error) {
        console.error("Error in auth middleware:", error);
        res.status(401).json({ message: "Internal Server Error" });
    }
}



