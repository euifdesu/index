class UI_book {
  constructor(src) {
    this.element = document.createElement('iframe');
    this.element.style.position = 'absolute';
    this.element.src = src;
    this.element.setAttribute('allowfullscreen', '');
    ROOT.appendChild(this.element);
  }
}