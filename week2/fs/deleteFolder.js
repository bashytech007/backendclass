const fs=require('fs');

fs.rm('./practice',{recursive:true},(error)=>{
  if(error){
    console.log(error)
  }
  console.log('done');
})