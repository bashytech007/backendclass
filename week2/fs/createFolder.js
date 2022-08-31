const fs=require('fs');
//Check if folder already exist
//if it does not eist crate new folder
try{
  if(!fs.existsSync(`ios`)){
    fs.mkdirSync('ios')
    console.log('successful')
  }else if(fs.existsSync(`ios`)){
    console.log('folder already exists')
  }
}catch(error){
  console.log(error);
}