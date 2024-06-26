const DrawerInitiator = {
  init({
    button, drawer, hero, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    window.addEventListener('scroll', (event) => {
      this._addShadow(event, drawer);
      this._addBackgroundColor(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
  
  _addShadow(event, drawer) {
    event.stopPropagation();
    const { scrollY } = window;
    if (scrollY < 20) {
      drawer.classList.remove('shadow-bottom');
    } else {
      drawer.classList.add('shadow-bottom');
    }
  },

  _addBackgroundColor(event, drawer) {
    event.stopPropagation();
    const { scrollY } = window;
    if (scrollY < 20) {
      drawer.style.backgroundColor = 'transparent';
    } else {
      drawer.style.backgroundColor = '#114232';
    }
  },
};

export default DrawerInitiator;
