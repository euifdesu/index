class UI_roundedImage {
  constructor(src) {
    this.element = document.createElement('img');
    this.element.src = src;
    this.element.style.position = 'absolute';
    this.element.style.left = '100px';
    this.element.style.top = '100px';
    this.element.style.width = '100px';
    this.element.style.height = '100px';
    this.element.style.borderRadius = '10px'; // Define o raio para fazer as quatro quinas arredondadas
    ROOT.appendChild(this.element);
  }
}