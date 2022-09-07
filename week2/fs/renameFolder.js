const fs=require('fs')


fs.rename('./practice','./bash',(error)=>{
  if (error){
    console.log(error)
  }
  console.log('done')
})