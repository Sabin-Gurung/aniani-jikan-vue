

const port = process.env.PORT || 3500;

require("./app").listen(port, ()=>{
    console.log(`${process.env.ENV} app started on port http://localhost:${port}`);
});