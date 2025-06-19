class UI_video {
  constructor(src) {
    this.element = document.createElement('video');
    this.element.src = src;
    this.element.style.position = 'absolute';
    this.element.style.left = '100px';
    this.element.style.top = '100px';
    this.element.style.width = '320px';
    this.element.style.height = '240px';
    this.element.controls = true; // Adicione controles de reprodução (play, pause, etc.)
    ROOT.appendChild(this.element);
  }
}