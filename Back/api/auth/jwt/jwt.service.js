'use strict';

const jwt = require('jwt-simple');
const secretKey = 'BZEEOGKFYK';

function createToken(user) {

  const expDays = 30;
  const today = new Date();
  const _iat = (today.getTime() / 1000).toFixed(0);
  const _exp = today.setDate(today.getDate() + expDays);

  let payload = {
      sub: {
          user: {
              _id: user._id,
              profile: user.profile,
              role: user.role,
          }
      },
      iat: _iat,
      exp: _exp,
  };

  return jwt.encode(payload, secretKey, null, null);

}

function getRole(token) {
    const payload = jwt.decode(token, secretKey, null, null);
    return payload.sub.user;
}

module.exports = { createToken, getRole };
