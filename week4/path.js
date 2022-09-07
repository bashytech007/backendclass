//path module
const path=require('path');

// console.log(path.sep)

const filePath=path.join('/content/','subfolder','readMe.html')
// console.log(filePath)
// console.log(path.extname(filePath))
if(path.extname(filePath) !=='.Md'){
   console.log('Wrong input');
}else{
 console.log('right input');
}

const base=path.basename(filePath)
// console.log(base);

const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)