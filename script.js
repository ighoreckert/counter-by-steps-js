function calcNumber() {
  let iniNum = document.getElementById("initialNumber");
  let endNum = document.getElementById("endNumber");
  let stepNum = document.getElementById("stepNumber");
  let res = document.querySelector("div#res");

  if (
    iniNum.value.length == 0 ||
    endNum.value.length == 0 ||
    stepNum.value.length == 0
  ) {
    res.innerHTML = `Impossível contar`;
    alert("[ERRO]Faltam dados!");
  } else {
    res.innerHTML = "Contando... <br>";
    let i = Number(iniNum.value);
    let e = Number(endNum.value);
    let s = Number(stepNum.value);
    if (s <= 0) {
      alert("Passo inválido! Considerando PASSO 1.");
      s = 1;
    }
    if (i < e) {
      // From minor to higher
      for (let c = i; c <= e; c += s) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      //From higher to minor
      for (let c = i; c >= e; c -= s) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += ` ...\u{1F3C1}`;
  }
}
