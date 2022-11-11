const parser = new DOMParser();

const docXML = parser.parseFromString(
  `<produtos>
    <produto>
      <titulo>Camiseta Esportiva</titulo>
      <descricao>
        Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir
        a transpiração.
      </descricao>
      <preco>35,50</preco>
    </produto>
    <produto>
      <titulo>Bermuda Jeans</titulo>
      <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
      <preco>54,62</preco>
    </produto>
    <produto>
      <titulo>Calça Moletom</titulo>
      <descricao>
        Básica com modelagem reta, perfeita para o look confortável, com forro
        peludinho.
      </descricao>
      <preco>79,90</preco>
    </produto>
  </produtos>
  `,
  "text/xml"
);

//CAMISETA
const divCamiseta = document.querySelector(
  'div[data-item="camiseta-esportiva"]'
);

divCamiseta.getElementsByTagName("h1")[0].textContent =
  docXML.getElementsByTagName("titulo")[0].textContent;
divCamiseta.getElementsByTagName("p")[0].textContent =
  docXML.getElementsByTagName("descricao")[0].textContent;
divCamiseta.getElementsByTagName("span")[0].textContent =
  docXML.getElementsByTagName("preco")[0].textContent;

//BERMUDA
const divBermuda = document.querySelector('div[data-item="bermuda-jeans"]');
const descBerm = document.createElement("p");
const precoBerm = document.createElement("span");
divBermuda.appendChild(descBerm);
divBermuda.appendChild(precoBerm);

divBermuda.getElementsByTagName("h1")[0].textContent =
  docXML.getElementsByTagName("titulo")[1].textContent;
divBermuda.getElementsByTagName("p")[0].textContent =
  docXML.getElementsByTagName("descricao")[1].textContent;
divBermuda.getElementsByTagName("span")[0].textContent =
  docXML.getElementsByTagName("preco")[1].textContent;

//CALCA
const divCalca = document.querySelector('div[data-item="calca-moletom"');
const tituloCalca = document.createElement("h1");
const descCalca = document.createElement("p");
const precoCalca = document.createElement("span");
divCalca.appendChild(tituloCalca);
divCalca.appendChild(descCalca);
divCalca.appendChild(precoCalca);

divCalca.getElementsByTagName("h1")[0].textContent =
  docXML.getElementsByTagName("titulo")[2].textContent;
divCalca.getElementsByTagName("p")[0].textContent =
  docXML.getElementsByTagName("descricao")[2].textContent;
divCalca.getElementsByTagName("span")[0].textContent =
  docXML.getElementsByTagName("preco")[2].textContent;

Object.assign(document.querySelector("section").style, {
  fontFamily: "Courier",
  width: "50vw"
});
