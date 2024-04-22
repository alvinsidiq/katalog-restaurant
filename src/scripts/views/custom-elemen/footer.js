class Footer extends HTMLElement {
    constructor() {
      super();
  
      this._style = document.createElement('style');
    }
  
    _updateStyle() {
      this._style.textContent = `
      footer {
        background-color: rgb(221, 87, 70);
        padding: 1rem;
        width: 100%;
        text-align: center;
      }
      
      footer p {
       color:black;
        font-size: 16px;
        font-weight: bold;
      }
      
      
      `;
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this._updateStyle();
  
      this.innerHTML = `
      ${this._style.outerHTML}

      <footer>
      <p tabindex="0">Copyright © 2024 - Maldis Resto</p>
    </footer>
  
      `;
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 5000); // Pindah slide setiap 5 detik
  });
  
  
  customElements.define('footer-section', Footer);
  