// let name = "Ganesh"
// // name.slice(2,3);
// name.toUpperCase()
// let name = prompt("Enter your name");
// let capitalizeFirstLetter = name.slice(0,1).toUpperCase()+ name.slice(1,name.length).toLowerCase();
// console.log(capitalizeFirstLetter);

// let cost  = 3+5*2;
// console.log(cost)

// let dogAge = 10;
// let humanAge = (dogAge - 2)*4+21
// console.log(humanAge)
// let dogAge = prompt("Enter your dog age : ")
// let humanAge  = (dogAge -2 )* 4+21;
// alert("your dog age is "+ humanAge + " as a human age ")

// let x = 5;
// let y = x++;
// y += 1;
// console.log(y);

let fun = (mony) => {
  let amount = Math.floor(mony / 1.5);
  console.log(amount);

  // let interest = amount * 0.05;
  // return mony + interest;
};
fun(34);
