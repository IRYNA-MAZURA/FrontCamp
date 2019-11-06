/* eslint-disable class-methods-use-this */
class ErrorsHandler {
  generateErrorMessage(articlesPlaceholder, error) {
    const errorContainer = document.createElement('div');
    const defaultErrorMessage = document.createElement('h3');
    const trueErrorMessage = document.createElement('h3');

    defaultErrorMessage.innerText = 'Ooops, invalid request...';
    trueErrorMessage.innerText = error;

    defaultErrorMessage.classList.add('error-message-default');
    trueErrorMessage.classList.add('error-message-default', 'error-message-true');

    articlesPlaceholder.appendChild(errorContainer);
    errorContainer.appendChild(defaultErrorMessage);
    errorContainer.appendChild(trueErrorMessage);
    errorContainer.style.flexDirection = 'column';

    console.error(error);
  }
}

const errorsHandler = new ErrorsHandler();

export default errorsHandler;
