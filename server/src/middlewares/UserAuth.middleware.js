const jwt = require ("jsonwebtoken");

exports.verifyTokens = (req,res)=>{
    
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.statue(401).json({ message : "No Token Provided"});
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token , process.env.JWT_SECRET );
        req.user = decoded;


        next();
    } catch (error) {
        return res.status(403).json({ message : "Invalid Token"})
    }
}
