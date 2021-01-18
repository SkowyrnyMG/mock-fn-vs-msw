import {rest} from 'msw';

const handlers = [
  rest.get('https://api.thecatapi.com/v1/images/search', (req, res, ctx) => {
    return res(ctx.status(200),
    ctx.json(
      [{
        url: 'https://cdn2.thecatapi.com/images/4iu.gif',
      }]
    ))
  }),
]

export {handlers};