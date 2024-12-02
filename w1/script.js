// esercizio 1
function controllaNumeri() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const risultato = num1 === 50 || num2 === 50 || (num1 + num2 === 50);
    document.getElementById("risultato1").textContent = `Risultato: ${risultato}`;
  }
  
  // esercizio 2
  function rimuoviCarattere() {
    const stringa = document.getElementById("stringa").value;
    const posizione = parseInt(document.getElementById("posizione").value);
    if (posizione >= 0 && posizione < stringa.length) {
      const nuovaStringa = stringa.slice(0, posizione) + stringa.slice(posizione + 1);
      document.getElementById("risultato2").textContent = `Nuova stringa: ${nuovaStringa}`;
    } else {
      document.getElementById("risultato2").textContent = "Errore: posizione non valida.";
    }
  }
  
  // esercizio 3
  function controllaRange() {
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const risultato = (
      (num3 >= 40 && num3 <= 60) || (num3 >= 70 && num3 <= 100)
    ) && (
      (num4 >= 40 && num4 <= 60) || (num4 >= 70 && num4 <= 100)
    );
    document.getElementById("risultato3").textContent = `Risultato: ${risultato}`;
  }


  // esercizio 4
function controllaCitta() {
    const citta = document.getElementById("citta").value.trim();
    const risultato = citta.startsWith("Los") || citta.startsWith("New") ? citta : false;
    document.getElementById("risultato4").textContent = `Risultato: ${risultato}`;
  }
  
  // esercizio 5
  function calcolaSomma() {
    const input = document.getElementById("arraySomma").value;
    const array = input.split(',').map(Number);
    const somma = array.reduce((acc, num) => acc + num, 0);
    document.getElementById("risultato5").textContent = `Somma: ${somma}`;
  }
  
  // esercizio 6
  function controllaArray() {
    const input = document.getElementById("arrayControllo").value;
    const array = input.split(',').map(Number);
    const risultato = !array.includes(1) && !array.includes(3);
    document.getElementById("risultato6").textContent = `Risultato: ${risultato}`;
  }

  // esercizio 7
function trovaTipoAngolo() {
    const angolo = parseInt(document.getElementById("angolo").value);
    let tipo = "";
  
    if (angolo < 90) {
      tipo = "acuto";
    } else if (angolo === 90) {
      tipo = "retto";
    } else if (angolo > 90 && angolo < 180) {
      tipo = "ottuso";
    } else if (angolo === 180) {
      tipo = "piatto";
    } else {
      tipo = "Valore non valido";
    }
  
    document.getElementById("risultato7").textContent = `Tipo di angolo: ${tipo}`;
  }
  
  // esercizio 8
  function creaAcronimo() {
    const frase = document.getElementById("frase").value.trim();
    const parole = frase.split(" ");
    const acronimo = parole.map(parola => parola.charAt(0).toUpperCase()).join("");
    document.getElementById("risultato8").textContent = `Acronimo: ${acronimo}`;
  }