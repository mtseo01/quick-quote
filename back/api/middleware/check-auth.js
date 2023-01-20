const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: '권한 없음. (토큰 없음)',
    });
  } else {
    try {
      jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
        if (error) {
          return res.status(403).json({
            success: false,
            message: '유효한 토큰이 아닙니다.',
            error,
          });
        } else {
          req.userData = decoded;
          next();
        }
      });
    } catch (error) {
      return res
        .stauts(500)
        .json({ success: false, message: '권한이 없습니다.' });
    }
  }
};
