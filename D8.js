/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function () {
  const title = document.querySelector("h1");
  title.innerText = "Dom Manipulation New Title";
};
changeTitle();

/* ESERCIZIO 2
         Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
      */

const addClass = function () {
  const title = document.querySelector("h1");
  title.classList.add("myHeading");
};

addClass();

/* ESERCIZIO 3
          Scrivi una funzione che cambi il testo dei p figli di un div
         */

const paragraph = function () {
  const p = document.querySelectorAll("div p");
  for (let i = 0; i < p.length; i++) {
    const newP = p[i];
    newP.innerText = "Abbiamo cambiato il testo dei paragrafi";
  }
};
paragraph();

/* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
         */

const changeLink = function () {
  const Url = document.querySelectorAll("a:not(footer a)");
  for (let i = 0; i < Url.length; i++) {
    const newLink = Url[i];
    newLink.href = "https://www.google.com";
  }
};
changeLink();

/* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
       */

const newElement = function () {
  const listUl = document.getElementById("secondList");
  const newLi = document.createElement("li");
  newLi.innerText = "4th";
  listUl.appendChild(newLi);
};
newElement();

/* ESERCIZIO 6
          Scrivi una funzione che aggiunga un paragrafo al primo div
       */

const addP = function () {
  const p = document.querySelector("div");
  const newP = document.createElement("p");
  newP.innerText = "Nuovo paragrafo aggiunto al div";
  p.appendChild(newP);
};
addP();

/* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

const remList = function () {
  const primaLista = document.getElementById("firstList");
  primaLista.onclick = function () {
    primaLista.remove();
  };
};
remList();

/* ESERCIZIO 8
          Scrivi una funzione che renda verde il background di ogni lista non ordinata
         */

const newBackground = function () {
  const green = document.querySelectorAll("ul");
  green.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
};

newBackground();

/* ESERCIZIO 9
          Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
         */

const remuvoLastWord = function () {
  const h1 = document.querySelector("h1");
  h1.onclick = function () {
    h1.textContent = h1.textContent.slice(0, -1);
  };
};
remuvoLastWord();

/* ESERCIZIO 10
          Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
         */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  footer.onclick = function () {
    const footerAncor = document.querySelector("footer a");
    const Url = footerAncor.getAttribute("href");
    alert(Url);
  };
};
revealFooterLink();
/* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea".
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */

const generateTable = function () {};

/* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */

const addRow = function () {};

/* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */

const changeColorWithRandom = function () {};
