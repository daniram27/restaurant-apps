class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <picture>
      <div class="banner">
      <source media="(max-width: 600px)" srcset="/images/heros/banner.jpg">
    <img src='/images/heros/banner.jpg' 
         alt="banner">
    </picture>
    </div>
    `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
