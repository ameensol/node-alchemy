var AlchemyAPI = require('./index');
var alchemy = new AlchemyAPI('cea53489e30d8a8d7bc2199b4924f29240e6568e');
alchemy.entities('http://www.washingtonpost.com/blogs/post-politics/wp/2013/04/17/senate-to-vote-on-amendments-to-gun-bill-with-background-check-plan-in-doubt/', {}, function(err, response) {
  if (err) throw err;

  // See http://www.alchemyapi.com/api/entity/htmlc.html for format of returned object
  var entities = response.entities;

  console.log(entities);
  // Do something with data
});