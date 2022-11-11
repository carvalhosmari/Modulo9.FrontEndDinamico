Enunciado

Utilizando o DomParser processe o XML abaixo:

```xml
<produtos>
  <produto>
    <titulo>Camiseta Esportiva</titulo>
    <descricao>Com tecnologia inovadora que, além de controlar o calor, ajuda a reduzir a transpiração.</descricao>
    <preco>35,50</preco>
  </produto>
  <produto>
    <titulo>Bermuda Jeans</titulo>
    <descricao>Bordada no estilo ROCK! 100% Algodão.</descricao>
    <preco>54,62</preco>
  </produto>
  <produto>
    <titulo>Calça Moletom</titulo>
    <descricao>Básica com modelagem reta, perfeita para o look confortável, com forro peludinho.</descricao>
    <preco>79,90</preco>
  </produto>
</produtos>
```

E insira os dados no HTML:

```html
<section class="produtos-lista">
  <div class="produtos-lista__produto-item" data-item="camiseta-esportiva">
    <h1>TÍTULO</h1>
    <p>DESCRIÇÃO</p>
    <span>PREÇO</span>
  </div>
  <div class="produtos-lista__produto-item" data-item="bermuda-jeans">
    <h1>TÍTULO</h1>
  </div>
  <div class="produtos-lista__produto-item" data-item="calca-moletom"></div>
</section>
```

Os 3 produtos devem ficar com a mesma estrutura HTML final apresentando o título `h1`, descrição `p` e preço `span`, em cada um dos respectivos `div`.
