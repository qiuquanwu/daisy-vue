type TPromise = Promise<SVGSVGElement> & { isPending: () => boolean };

export function copySvgAttrs(svgEle: SVGSVGElement): Record<string, string> {
  const svgAttrs: Record<string, string> = {};

  if (svgEle && svgEle.attributes) {
    const attrs = svgEle.attributes;
    for (let i = attrs.length - 1; i >= 0; i--) {
      svgAttrs[attrs[i].name] = attrs[i].value;
    }
  }

  return svgAttrs;
}

export function filterAttrs(attrs: Record<string, unknown>): Record<string, string> {
  return Object.keys(attrs).reduce((result, key) => {
    if (attrs[key] !== false && attrs[key] !== null && attrs[key] !== undefined) {
      result[key] = attrs[key];
    }
    return result;
  }, {});
}

export function download(url: string): TPromise {
  return makePromiseState(
    new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          try {
            const parser = new DOMParser();
            const result = parser.parseFromString(request.responseText, 'text/xml');
            const svgEle = result.getElementsByTagName('svg')[0];
            if (svgEle) {
              resolve(svgEle);
            } else {
              reject(new Error('Loaded file is not valid SVG'));
            }
          } catch (error) {
            reject(error);
          }
        }
      };

      request.onerror = reject;
      request.send();
    }) as TPromise
  );
}

function makePromiseState(promise: TPromise): TPromise {
  // 如果一个Promise已经就绪，不允许更改它的状态
  if (promise.isPending) {
    return promise;
  }

  let isPending: boolean = true;
  const result = promise.then(
    (v) => {
      isPending = false;
      return v;
    },
    (e) => {
      isPending = false;
      return e;
    }
  ) as TPromise;

  result.isPending = function getIsPending() {
    return isPending;
  };

  return result;
}
