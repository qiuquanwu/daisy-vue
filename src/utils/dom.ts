export const on = (
  element: HTMLElement | Document | Window,
  eventName: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void => {
  if (element && eventName && handler) {
    element?.addEventListener(eventName, handler, useCapture);
  }
};
