
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('Register', { title: 'Express Login' });
};