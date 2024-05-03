function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultPara = document.getElementById("resultPara");
    resultPara.textContent = `The result is: ${result} 🎲`;
  
    // Change background color with RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
  