const headerTabela = ["Nome", "Especie", "Pais", "Exemplares"];
const animaisLista = [
  {
    nome: "Lobo-vermelho",
    especie: "Canis rufus",
    pais: "Canada",
    exemplares: 200,
  },
  {
    nome: "Tigre de bengala",
    especie: "Panthera tigris tigris",
    pais: "India",
    exemplares: 1800,
  },
  {
    nome: "Lince iberico",
    especie: "Lynx pardinus",
    pais: "Espanha",
    exemplares: 200,
  },
  {
    nome: "Diabo da Tasmania",
    especie: "Sarcophilus harrisii",
    pais: "Australia",
    exemplares: 2500,
  },
  {
    nome: "Foca monge",
    especie: "Monachus schauinslandi",
    pais: "Estados Unidos",
    exemplares: 1000,
  },
  {
    nome: "Zebra de grevy",
    especie: "Equus grevyi",
    pais: "Etiopia",
    exemplares: 2400,
  },
  {
    nome: "Porco pigmeu",
    especie: "Porcula salvania",
    pais: "India",
    exemplares: 250,
  },
  {
    nome: "Gorila das montanhas",
    especie: "Gorilla beringei",
    pais: "Uganda",
    exemplares: 1000,
  },
  {
    nome: "Kakapo",
    especie: "Strigops habroptilus",
    pais: "Nova Zelandia",
    exemplares: 180,
  },
  {
    nome: "Camelo bactriano",
    especie: "Camelus bactrianus",
    pais: "Afeganistao",
    exemplares: 900,
  },
];

const body = document.querySelector("body");
const main = document.createElement("main");
const tabela = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tfoot = document.createElement("tfoot");
const tr = document.createElement("tr");
const td = document.createElement("td");
body.appendChild(main);
main.appendChild(tabela);
tabela.appendChild(thead);
tabela.appendChild(tbody);
tabela.appendChild(tfoot);
tfoot.appendChild(tr);
tr.appendChild(td);
td.setAttribute("colspan", "4");

let total = 0;

for (let i = 0; i < animaisLista.length; i++) {
  const tr = document.createElement("tr");
  tr.setAttribute("data-item", i);

  for (let j = 0; j < headerTabela.length; j++) {
    if (i == 0) {
      const th = document.createElement("th");
      th.setAttribute("data-item", j);
      th.textContent = headerTabela[j];
      thead.appendChild(tr);
      tr.appendChild(th);
    } else {
      const td = document.createElement("td");
      const texto = document.createTextNode(Object.values(animaisLista[i])[j]);
      td.setAttribute("data-item", j);
      tbody.appendChild(tr);
      tr.appendChild(td);
      td.appendChild(texto);

      if (j == 3) {
        total += animaisLista[i].exemplares;
      }
    }
  }
}

td.textContent = "Total de exemplares vivos:" + " " + total;

Object.assign(tabela.style, {
  backgroundColor: "#588157",
  fontFamily: "Courier",
  height: "75vh",
  width: "90vw",
  textAlign: "center",
});

Object.assign(thead.style, {
  backgroundColor: "#2f3e46",
  color: "#cad2c5",
  fontSize: "1.6rem",
  letterSpacing: "2px",
  width: "100%",
  height: "10%",
});

Object.assign(tbody.style, {
  backgroundColor: "#cad2c5",
  color: "#2f3e46",
  fontWeight: "600",
  width: "100%",
  height: "80%",
});

Object.assign(tfoot.style, {
  backgroundColor: "#cad2c5",
  color: "#2f3e46",
  fontSize: "1.4rem",
  fontWeight: "600",
  letterSpacing: "2px",
  width: "100%",
  height: "10%",
  align: "left",
});
