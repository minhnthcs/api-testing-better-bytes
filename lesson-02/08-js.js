let transport = "bus";

// if-else
if (transport === "bike") {
  console.log("Mất khoảng 15 phút");
} else if (transport === "car") {
  console.log("Mất khoảng 10 phút");
} else if (transport === "bus") {
  console.log("Mất khoảng 30 phút");
} else if (transport === "train") {
  console.log("Mất khoảng 45 phút");
} else {
  console.log("Phương tiện không hợp lệ!");
}

// switch-case
switch (transport) {
  case "bike":
    console.log("Mất khoảng 15 phút");
    break;
  case "car":
    console.log("Mất khoảng 10 phút");
    break;
  case "bus":
    console.log("Mất khoảng 30 phút");
    break;
  case "train":
    console.log("Mất khoảng 45 phút");
    break;
  default:
    console.log("Phương tiện không hợp lệ!");
}
