console.clear()
  
  const reverseNum = (num: number) => {
    let numStr = num.toString();
    let revStr = numStr.split("")
    let Str:string = "";
    
  while(revStr.length !== 0) {
      let k = revStr.pop();
      Str += ` ${k}`
      
    }
    
    return Str

  }
  let numb = 123456;
  let reversedNum = reverseNum(numb)
  

  console.log(`Orig Num: ${numb}`)
  console.log(`Rev Num: ${reversedNum}`)

  const biggestNumber = (numb: number) => {
    let num = numb.toString().split("").sort((a: any, b: any) => b - a);

    return parseInt(num[0]);
  };
  
  const smallestNumber = (numb: number) => {
    let num = numb.toString().split("").sort((a: any, b: any) => a - b);

    return parseInt(num[0]);
  };
  
  console.log(biggestNumber(numb));
  console.log(smallestNumber(numb));

//   let OrigNum = 123456;

//   let reversedNum = reverseNum(OrigNum);

//   console.log(`Original Number: ${OrigNum}`)

//   console.log(`Reversed Number: ${reversedNum}`)