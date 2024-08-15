function totalClick(click) {
  const totalClicks = document.getElementById("totalClicks");
  const sumValue = parseInt(totalClicks.innerText) + click;
  totalClicks.innerText = sumValue;

  //   to avoid negatives

  if (sumValue < 0) {
    totalClicks.innerText = 0;
  }
}

function totalPrice(price) {
  const totalPrice = document.getElementById("price");
  totalPrice.innerText = price;
}
