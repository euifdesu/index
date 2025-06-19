class UI_circularImage {
  constructor(src) {
    this.element = document.createElement('img');
    this.element.src = src;
    this.element.style.position = 'absolute';
    this.element.style.left = '100px';
    this.element.style.top = '100px';
    this.element.style.width = '100px';
    this.element.style.height = '100px';
    this.element.style.borderRadius = '50%'; // Define o raio para fazer a imagem circular
    this.element.style.clipPath = 'circle(50% at 50% 50%)'; // Define uma máscara de corte circular (opcional)
    ROOT.appendChild(this.element);
  }
}
