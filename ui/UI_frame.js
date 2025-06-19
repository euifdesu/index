class UI_frame {
  constructor(color) {
  this.element                      = document.createElement('div');
	this.element.style.position       = 'absolute';
	this.element.style.left           = '100px';
	this.element.style.top            = '100px';
	this.element.style.width          = '100px';
	this.element.style.height         = '100px';
	this.element.style.border         = '2px solid '+ color;
	ROOT.appendChild(this.element);
  }
}