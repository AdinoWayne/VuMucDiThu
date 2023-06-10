watched: {
    SIDE_BAR: {
      handler(value) {
        if (value) {
          const val = window.scrollY;
          document.body.style.position = 'fixed';
          document.body.style.top = `-${val}px`;
        } else {
          const scrollY = document.body.style.top;
          document.body.style.position = '';
          document.body.style.top = '';
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    }
}
