
class ResourceNotFoundError extends Error{
    constructor (message){
        super(message);
    }
}


function init(app){
    app.use((err, req, res, next) => {
        if (err instanceof ResourceNotFoundError){
            res.status(404).json({code : "404", message : err.message});
        }
        else{
            next(err);
        }
    })

    app.use((err, req, res, next) => {
        res.json(err);
    });
}

module.exports = {
    ResourceNotFoundError,
    init
}
