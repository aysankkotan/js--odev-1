let veri = prompt("Lütfen İsminizi Giriniz", "");
document.getElementById("myName").innerHTML = veri;
myName.innerHTML = `${veri.toUpperCase()}!`;

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
  let time = h + ":" + m + ":" + s + " " + day;
  document.getElementById("myClock").innerHTML = time;

  setInterval(showTime, 1000);
}

showTime();
