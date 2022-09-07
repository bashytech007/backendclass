//operating system module

const os=require('os')
// console.log(os);
console.log(os.totalmem());
const userInfo=os.userInfo();
// console.log(userInfo);

const uptime=`your system is ${os.uptime()} milliseconds`;
// console.log(uptime);
const currentOs={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem(),
}
// console.log(currentOs);