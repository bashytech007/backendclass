const fs=require('fs');
//Check if folder already exist
//if it does not excdist crate new folder
try{
  if(!fs.existsSync(`practice`)){
    fs.mkdirSync(`practice`)
    console.log('successful')
  }else if(fs.existsSync(`practice`)){
    console.log('folder already exists')
  }
}catch(error){
  console.log(error);
}