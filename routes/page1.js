var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page1', { title: '이 문구가 나온다면 정상적으로 page1이 서버와 통신을 하고 있다는 것입니다.' });
});

module.exports = router;
