setInterval(() => {
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
// console.log(red, green, blue);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
  document.body.innerHTML = `<div>
  <h2>Color Generator</h2>
  <span>${red}, ${green}, ${blue}</span>
</div>
`;

}, 1000);