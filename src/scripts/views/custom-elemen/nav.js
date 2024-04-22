class Nav extends HTMLElement {
    constructor() {
      super();
  
      this._style = document.createElement('style');
    }
  
    _updateStyle() {
      this._style.textContent = `
      .nav-list ul {
        padding-left: 0;
        display: flex;
        justify-content: center;
        gap: 2rem 1rem;
      }
      
      .nav-list ul li {
        list-style-type: none;
      }
      
      .nav-list ul li a {
        text-decoration: none;
        font-size: 18px;
        color: ;
        padding: 15px;
      }
      
      .nav-list ul li a:hover {
        text-decoration: underline;
        color: rgb(63, 29, 56);
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
  
      <nav id="drawer" class="nav-list">
        <ul>
          <li class="nav_item"><a href="#/list-restaurant">Home</a></li>
          <li class="nav_item"><a href="/favorite">Favorite</a></li>
          <li class="nav_item"><a href="https://github.com/alvinsidiq/" target="_blank" rel="noopener noreferrer">About Us</a></li>
        </ul>
      </nav>
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
  
  
  customElements.define('nav-section', Nav);
  