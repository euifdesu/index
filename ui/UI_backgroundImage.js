class UI_backgroundImage {
  constructor(src) {
    // Crie um elemento div para representar o contêiner do fundo.
    this.element = document.createElement('div');
    this.element.style.position = 'fixed'; // Fixa a posição do contêiner
    this.element.style.top = '0';
    this.element.style.left = '0';
    this.element.style.width = '100%';
    this.element.style.height = '100%';
    this.element.style.backgroundImage = `url(${src})`;
    this.element.style.backgroundSize = 'cover'; // Ajuste o tamanho da imagem para cobrir todo o contêiner
    this.element.style.backgroundPosition = 'center'; // Centralize a imagem no contêiner
    this.element.style.zIndex = '-1'; // Coloque o contêiner no plano de fundo
    document.body.appendChild(this.element);
  }
}