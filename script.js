const displayCalculator = () => {
    const calculator = document.createElement('div');
        calculator.style.display = "grid";
        calculator.style.gridTemplateColumns = "repeat(4, 1fr)";
        calculator.style.gridTemplateRows = "repeat(6, 1fr)";
        calculator.style.columnGap = "10px";
        calculator.style.rowGap = "10px";
        calculator.style.width = "255px"
        calculator.style.height = "375px"
        calculator.style.margin = " 150px auto";

    const result = document.createElement('input');
        result.style.gridArea = "1 / 1 / 2 / 5";
        result.setAttribute('id', 'result');
        calculator.appendChild(result);

    const parOuv = document.createElement('button');
        parOuv.style.gridArea = "2 / 1 / 3 / 2";
        parOuv.textContent="(";
        parOuv.classList.add('lightgrey');
        parOuv.addEventListener("click" , () => {
            displayCalcul("(");
        })
        calculator.appendChild(parOuv);

    const parFer = document.createElement("button");
        parFer.style.gridArea = "2 / 2 / 3 / 3";
        parFer.textContent = ")";
        parFer.classList.add("lightgrey");
        parFer.addEventListener("click", () => {
          displayCalcul(")");
        });
        calculator.appendChild(parFer);

    const pourc = document.createElement("button");
        pourc.style.gridArea = "2 / 3 / 3 / 4";
        pourc.textContent = "%";
        pourc.classList.add("lightgrey");
        pourc.addEventListener("click", () => {
          displayCalcul(" % ");
        });
        calculator.appendChild(pourc);

    const divi = document.createElement("button");
        divi.style.gridArea = "2 / 4 / 3 / 5";
        divi.innerHTML = "&divide";
        divi.classList.add("ope");
        divi.addEventListener("click", () => {
          displayCalcul(" / ");
        });
        calculator.appendChild(divi);

    const fois = document.createElement("button");
        fois.style.gridArea = "3 / 4 / 4 / 5";
        fois.innerHTML = "&times";
        fois.classList.add("ope");
        fois.addEventListener("click", () => {
          displayCalcul(" * ");
        });
        calculator.appendChild(fois);

    const neuf = document.createElement("button");
        neuf.style.gridArea = "3 / 3 / 4 / 4";
        neuf.textContent = "9";
        neuf.classList.add("num");
        neuf.addEventListener("click", () => {
          displayCalcul("9");
        });
        calculator.appendChild(neuf);

    const huit = document.createElement("button");
        huit.style.gridArea = "3 / 2 / 4 / 3";
        huit.textContent = "8";
        huit.classList.add("num");
        huit.addEventListener("click", () => {
          displayCalcul("8");
        });
        calculator.appendChild(huit);

    const sept = document.createElement("button");
        sept.style.gridArea = "3 / 1 / 4 / 2";
        sept.textContent = "7";
        sept.classList.add("num");
        sept.addEventListener("click", () => {
          displayCalcul("7");
        });
        calculator.appendChild(sept);

    const quatre = document.createElement("button");
        quatre.style.gridArea = "4 / 1 / 5 / 2";
        quatre.textContent = "4";
        quatre.classList.add("num");
        quatre.addEventListener("click", () => {
          displayCalcul("4");
        });
        calculator.appendChild(quatre);

    const cinq = document.createElement("button");
        cinq.style.gridArea = "4 / 2 / 5 / 3";
        cinq.textContent = "5";
        cinq.classList.add("num");
        cinq.addEventListener("click", () => {
          displayCalcul("5");
        });
        calculator.appendChild(cinq);

    const six = document.createElement("button");
        six.style.gridArea = "4 / 3 / 5 / 4";
        six.textContent = "6";
        six.classList.add("num");
        six.addEventListener("click", () => {
          displayCalcul("6");
        });
        calculator.appendChild(six);

    const moins = document.createElement("button");
        moins.style.gridArea = "4 / 4 / 5 / 5";
        moins.innerHTML = "-";
        moins.classList.add("ope");
        moins.addEventListener("click", () => {
          displayCalcul(" - ");
        });
        calculator.appendChild(moins);

    const plus = document.createElement("button");
        plus.style.gridArea = "5 / 4 / 6 / 5";
        plus.textContent = "+";
        plus.classList.add("ope");
        plus.addEventListener("click", () => {
          displayCalcul(" + ");
        });
        calculator.appendChild(plus);

    const trois = document.createElement("button");
        trois.style.gridArea = "5 / 3 / 6 / 4";
        trois.textContent = "3";
        trois.classList.add("num");
        trois.addEventListener("click", () => {
          displayCalcul("3");
        });
        calculator.appendChild(trois);

    const deux = document.createElement("button");
        deux.style.gridArea = "5 / 2 / 6 / 3";
        deux.textContent = "2";
        deux.classList.add("num");
        deux.addEventListener("click", () => {
          displayCalcul("2");
        });
        calculator.appendChild(deux);

    const un = document.createElement("button");
        un.style.gridArea = "5 / 1 / 6 / 2";
        un.textContent = "1";
        un.classList.add("num");
        un.addEventListener("click", () => {
          displayCalcul("1");
        });
        calculator.appendChild(un);

    const zero = document.createElement("button");
        zero.style.gridArea = "6 / 1 / 7 / 2";
        zero.textContent = "0";
        zero.classList.add("num");
        zero.addEventListener("click", () => {
          displayCalcul("0");
        });
        calculator.appendChild(zero);

    const virgule = document.createElement("button");
        virgule.style.gridArea = "6 / 2 / 7 / 3";
        virgule.textContent = ",";
        virgule.classList.add("num");
        virgule.addEventListener("click", () => {
          displayCalcul(",");
        });
        calculator.appendChild(virgule);

    const ac = document.createElement("button");
        ac.style.gridArea = "6 / 3 / 7 / 4";
        ac.textContent = "AC";
        ac.classList.add("num");
        ac.addEventListener("click", () => {
          reset();
        });
        calculator.appendChild(ac);

    const egal = document.createElement("button");
        egal.style.gridArea = "6 / 4 / 7 / 5";
        egal.textContent = "=";
        egal.classList.add("ope");
        egal.addEventListener("click", () => {
          calcul();
        });
        calculator.appendChild(egal);
    
    
    document.body.appendChild(calculator);
}

let calculString = "";

const displayCalcul = (i) => {
    console.log(i);
    calculString = calculString + i;
    document.getElementById('result').value = calculString;
}

const reset = () => {
    calculString = "";
    document.getElementById("result").value = calculString;
}

const calcul = () => {
  document.getElementById("result").value = computeResult(calculString);
  calculString = computeResult(calculString);
};

function computeResult(str) {
  return Function("return " + str)();
}

document.body.addEventListener('keyup', (event) => {
    if (
      event.key === "0" ||
      event.key === "1" ||
      event.key === "2" ||
      event.key === "3" ||
      event.key === "4" ||
      event.key === "5" ||
      event.key === "6" ||
      event.key === "7" ||
      event.key === "8" ||
      event.key === "9" ||
      event.key === "+" ||
      event.key === "-" ||
      event.key === "*" ||
      event.key === "/"
    ) {
      displayCalcul(event.key);
    } else if (event.key === "Backspace") {
      reset();
    } else if (event.key === "Enter") {
      calcul();
    }
})

displayCalculator()