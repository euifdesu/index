class UI_text {
  constructor(text,color,font_size_16) {
    this.element                       = document.createElement('p');
    //this.element.textContent           = text;
    this.element.innerHTML             = text;
    this.element.style.position        = 'absolute';
    this.element.style.left            = '0px';
    this.element.style.top             = '0px';
    this.element.style.fontSize        = font_size_16 + 'px';
    this.element.style.color           = color;
	ROOT.appendChild(this.element);
  }
}