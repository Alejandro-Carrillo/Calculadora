let botones = document.querySelectorAll(".btn");
let pant = document.querySelector(".pantalla");
let resul = pant.textContent;
let otro = "";
let operador = 0;
let igual = false;

botones.forEach((boton) => {
  boton.addEventListener("click", function () {
    if (resul === "0") {
      resul = "";
      pant.textContent = resul;
    }
    if (boton.textContent === "C") {
      resul = "0";
      pant.textContent = resul;
    } else if (boton.textContent === "←") {
      resul = pant.textContent.slice(0, pant.textContent.length - 1);
      if (resul === "") {
        resul = "0";
      }
      pant.textContent = resul;
    } else if (boton.textContent === "+") {
      if (operador != 0) {
        operacion();
      }
      operador = 1;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "-") {
      if (operador != 0) {
        operacion();
      }
      operador = 2;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "X") {
      if (operador != 0) {
        operacion();
      }
      operador = 3;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "/") {
      if (operador != 0) {
        operacion();
      }
      operador = 4;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "%") {
      if (operador != 0) {
        operacion();
      }
      operador = 5;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "√") {
      if (operador != 0) {
        operacion();
      }
      operador = 6;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "˄") {
      if (operador != 0) {
        operacion();
      }
      operador = 7;
      otro = resul;
      resul = "0";
    } else if (boton.textContent === "=") {
      operacion();
    } else {
      if (igual === true) {
        igual = false;
        resul = "";
        pant.textContent = resul;
      }
      resul = resul += boton.textContent;
      pant.textContent = resul;
    }
  });
});

function operacion() {
  try {
    if (operador === 1) {
      resul = Number(otro) + Number(resul);
      operador = 0;
      otro = "";
    } else if (operador === 2) {
      resul = Number(otro) - Number(resul);
      operador = 0;
      otro = "";
    } else if (operador === 3) {
      resul = Number(otro) * Number(resul);
      operador = 0;
      otro = "";
    } else if (operador === 4) {
      resul = Number(otro) / Number(resul);
      operador = 0;
      otro = "";
    } else if (operador === 5) {
      resul = Number(resul) * (Number(otro) / 100);
      operador = 0;
      otro = "";
    } else if (operador === 6) {
      resul = Math.sqrt(Number(otro));
      operador = 0;
      otro = "";
    } else if (operador === 7) {
      resul = Math.pow(Number(otro), Number(resul));
      operador = 0;
      otro = "";
    } else {
      resul = "0";
    }
    if (isNaN(resul) || resul == Infinity) {
      pant.textContent = "Opera. no valida";
      resul = 0;
    } else if (resul == 0 || resul === "" || resul == "0") {
      pant.textContent = "0";
    } else {
      pant.textContent = Number(resul.toFixed(2));
      igual = true;
    }
  } catch (error) { }
}







