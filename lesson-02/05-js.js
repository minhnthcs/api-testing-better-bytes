let mode = "dark";

// if-else
if (mode === "dark") {
  console.log("Chế độ tối đã được bật!");
} else if (mode === "light") {
  console.log("Chế độ sáng đã được bật!");
} else {
  console.log("Chế độ không hợp lệ!");
}

// switch-case
switch (mode) {
  case "dark":
    console.log("Chế độ tối đã được bật!");
    break;
  case "light":
    console.log("Chế độ sáng đã được bật!");
    break;
  default:
    console.log("Chế độ không hợp lệ!");
}
