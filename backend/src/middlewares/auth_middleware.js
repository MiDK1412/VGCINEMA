import jwt from "jsonwebtoken";

export const verify_token = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({
            message: "No token"
        });
    }

    try {
        const decoded = jwt.verify(token ,process.env.JWT_SECRET);
        req.account = decoded;

        next();
        
    } catch (error) {
        res.status(401).json({message:"Invalid token"});
    }
}

export const isAdmin = (req, res, next) => {
    if(req.account.role === "customer") {
        return res.status(403).json({
            message: "Quyen cua ban khong du de co the thi hanh lenh nay"
        })
    }
    next();
}