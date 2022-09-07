const http=require('http');
console.log(http);

const server=http.createServer((req,res)=>{
  //Homepage
  //About us
  //contact us
  //error page
  console.log(req.url)
 //res.write();
//  res.end(`hello from the server`)
  
 if(req.url==='/'){
  res.end(`Home page`)
 }else if(req.url==='/about'){
  res.end(`About Us page`)
 }else if(req.url==='/contact'){
  res.end(`Contact Us page`)
 }else{
  res.end(`<h1>Ooops<h1>
  <p>We cant seem to find the page you are looking for<p>
  <a href="/">back</a>`)
 }

})

server.listen(3000,()=>{
  console.log('server is running on port 3000')
})