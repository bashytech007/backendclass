//Custom middleware


const sayHi=(req,res,next)=>{
    const name=req.body.name
    console.log(`HI ${name}`)

    next()
}
const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear()
    console.log(method,url,time)
    next()
}
module.exports={sayHi,logger}