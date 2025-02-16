module.exports.log = (req, res, next)=>{
    console.log("Logging...");
    next(); // if no error then call next function
};