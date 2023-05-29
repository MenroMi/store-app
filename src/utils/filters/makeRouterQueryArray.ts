import { ParsedUrlQuery } from 'querystring';

const makeArray = (router: ParsedUrlQuery) => {
  let res: { [x: string]: string[] | string } = {};

  if (typeof router === 'undefined' || Object.entries(router).length <= 0) {
    res = { ...res, page: ['1'] };
    return res;
  }

  for (let q in router) {
    if (typeof router[q] === 'undefined') {
      continue;
    }

    if (Array.isArray(router[q])) {
      res = { ...res, [q]: router[q]! };
      continue;
    }

    if (typeof router[q] === 'string') {
      res = { ...res, [q]: (router[q] as string).split(',') };
      continue;
    }
  }

  return res;
};

export default makeArray;
