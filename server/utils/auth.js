const jwt = require('jsonwebtoken');

const secret = 'sussysecret';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    console.log(req.body.token, req.query.token)
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
      console.log("authorization token:", token)
    }

    if (!token) {
      console.log("say this twice if grapes taste weird")
      return req;
    }

    try {
      console.log("oh my it really do be givin' it the old try, indeed")
      console.log(token)
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    console.log("holup, imma try sign token, mmmmhmmmmmm")
    const payload = { firstName, email, _id };
    console.log(payload)
    console.log(secret)
    console.log(expiration)
    console.log(jwt.sign({ data: payload }, secret, { expiresIn: expiration }))
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
