import { methods } from './constants';

export default function requestFactory(type, body) {
  const requestObject = { method: type };

  if (type === methods.post) {
    requestObject.header = new Headers();
    requestObject.body = body;
  }

  return requestObject;
}
