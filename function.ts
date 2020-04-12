const getSum = (num1: number, num2: number): number => {
  return num1 + num2;
}

// console.log(getSum(1, 4))

let mySum = (num1: any, num2: any): number => {
  if (typeof num1 == 'string') {
    num1 = parseInt(num1);
  }
  if (typeof num2 == 'string') {
    num2 = parseInt(num2);
  }
  return num1 + num2
}

// console.log(mySum("Hello", 5))

const getName = (firstName: string, lastName?: string): string => {
  if (lastName == undefined) {
    return firstName;
  }
  return firstName + ' ' + lastName
}

// console.log(getName('Joe'))

const myVoid = (): void => {
  return;
}

console.log(myVoid);