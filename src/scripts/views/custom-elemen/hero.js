class Hero extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .jumbotron {
      position: relative;
      width: 100%;
      height: 400px; /* Sesuaikan dengan tinggi jumbotron yang diinginkan */
      overflow: hidden;
      background-color:black;
    }
    
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center; /* Menengahkan vertikal */
      align-items: center; /* Menengahkan horizontal */
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    
    .slide.active {
      opacity: 1;
    }
    
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      background-image: url('arrow.png'); /* Ganti 'arrow.png' dengan nama file panah Anda */
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
    }
    
    .arrow.left {
      left: 10px;
    }
    
    .arrow.right {
      right: 10px;
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

    <div class="jumbotron">
  <div class="slide active">
    <h1>Your Restaurant, Your Choice</h1>
    <p>Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
  </div>
  <div class="slide">
    <h1>Slide 2</h1>
    <p>Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
  </div>
  <div class="slide">
    <h1>Slide 3</h1>
     <p>Find Your Next Favorite Restaurant - Discover the best restaurants in your city!</p>
  </div>
</div>

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


customElements.define('hero-section', Hero);
