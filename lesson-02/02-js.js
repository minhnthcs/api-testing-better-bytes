const spotifyType = "student";

if (spotifyType === "free") {
  console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
} else if (spotifyType === "premium") {
  console.log("Không quảng cáo, nghe nhạc offline!");
} else if (spotifyType === "family") {
  console.log("Gói dùng cho nhiều thành viên!");
} else if (spotifyType === "student") {
  console.log("Ưu đãi dành riêng cho sinh viên!");
} else {
  console.log("Khong hop le");
}

switch (spotifyType) {
  case "free":
    console.log("Bạn có thể nghe nhạc nhưng có quảng cáo.");
    break;

  case "premium":
    console.log("Không quảng cáo, nghe nhạc offline!");
    break;

  case "family":
    console.log("Gói dùng cho nhiều thành viên!");
    break;

  case "student":
    console.log("Ưu đãi dành riêng cho sinh viên!");
    break;

  default:
    console.log("Khong hop le");
    break;
}
