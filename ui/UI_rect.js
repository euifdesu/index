class UI_rect {
  constructor(color) {
  this.element                           = document.createElement('div');
	this.element.style.position            = 'absolute';
	this.element.style.backgroundColor     = color;
	ROOT.appendChild(this.element);
  }
}