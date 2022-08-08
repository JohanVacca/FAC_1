'use strict';

const jwt = require('jwt-simple');
const secretKey = 'BZEEOGKFYK';


function ensureAuth(req, res, next) {

    if(!req.headers.authorization){
        return res.status(403).json({"message": "Authorization header required."})
    }
    let payload;

    const token = removeBearerFromToken(req);

    try {
        payload = jwt.decode(token, secretKey, null, null);

        const currentDayTmp = (new Date().getTime() / 1000).toFixed(0);

        if(payload.exp <= currentDayTmp){
            return res.status(401).json({message: 'Token expired.'});
        }
    }catch (ex){
        return res.status(404).json({message: 'Token invalid.'});
    }

    req.user  = payload;

    next();
}

function removeBearerFromToken(req) {
    let token = req.headers.authorization;

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    return token;
}

module.exports = { ensureAuth, removeBearerFromToken };
