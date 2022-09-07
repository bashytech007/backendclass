const http=require('http');
const fs=require('fs');
fs.readFileSync(`./assets/index.txt`,'utf-8')

const server=http.createServer((req,res)=>{
  const data=fs.readFileSync('./assets/index.txt')
  res.end(data)
})
server.listen(3001,()=>{
  console.log('server port is running 3001')
})


