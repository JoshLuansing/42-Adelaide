function changeColor() {
    var colors = ["#FF5733", "#C70039", "#900C3F", "#581845", "#1F618D", "#7D6608", "#A04000"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }