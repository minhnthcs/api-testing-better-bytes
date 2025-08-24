const result = "win";
if (result == "win") {
  console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
} else if (result == "draw") {
  console.log("Trận đấu hòa, thật đáng tiếc!");
} else {
  console.log("Thua rồi, nhưng đừng bỏ cuộc!");
}

switch (result) {
  case "win":
    console.log("Chúc mừng! Đội của bạn đã chiến thắng!");
    break;
  case "draw":
    console.log("Trận đấu hòa, thật đáng tiếc!");
    break;
  case "lose":
    console.log("Thua rồi, nhưng đừng bỏ cuộc!");
    break;
}
