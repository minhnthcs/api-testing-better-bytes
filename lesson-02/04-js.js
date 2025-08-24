let newEvent = "blackfriday";

if (newEvent === "blackfriday") {
  console.log("Giảm 50% toàn bộ sản phẩm!");
} else if (newEvent === "cybermonday") {
  console.log("Giảm 40% cho sản phẩm công nghệ!");
} else if (newEvent === "christmas") {
  console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
} else {
  console.log("Không có khuyến mãi!");
}

switch (newEvent) {
  case "blackfriday":
    console.log("Giảm 50% toàn bộ sản phẩm!");
    break;
  case "cybermonday":
    console.log("Giảm 40% cho sản phẩm công nghệ!");
    break;
  case "christmas":
    console.log("Ưu đãi đặc biệt mùa Noel - giảm 30%!");
    break;
  default:
    console.log("Không có khuyến mãi!");
}
