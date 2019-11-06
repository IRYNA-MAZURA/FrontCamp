const button = document.querySelector('#lazy-load-js-css');

function lazyLoading() {
  import('../../dist/bundle.js').then(() => {
    button.classList.add('button-hide');
  });
}

button.addEventListener('click', lazyLoading);
