const fizzBuzz=()=>{
  for(let i=1;i<=100;i++){
  console.log(i%3 ?'':'fizz')+(i%5 ? '':'buzz')
  }
}
fizzBuzz()
const printPrimeNumbers=(num)=>{
  let primes=[]
  for(let n=3;n<=num;n+=2){
    if (primes.every((prime)=>{return n % prime !==0})){

      primes.push(n)
    }
  }
  primes.unshift(2)
  console.log(primes)
}
printPrimeNumbers(100)

const newArray=()=>{
  let str=`i love alogorithims but i think the ones here are too simple`
  let simple=str.split(" ");
  console.log(simple)
}
newArray()