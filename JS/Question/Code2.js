prompt("Enter your name ");
prompt("Enter your partner name : ");

let loveScore = Math.floor(Math.random() * 100) + 1;
alert("Your love Score :  " + loveScore + " %");

if (loveScore > 70) {
  alert("Your love is very strong. You should spend time together");
} else {
  alert("Your love is not strong enough. You should focus on other things");
}
