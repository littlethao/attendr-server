process.env.NODE_ENV ='test';
var models = require('../../models/index');
var request = require('request');
var server = require('../../index.js')

describe('Event', function() {
  beforeEach(function() {
    server.listen(3000);
  });

  afterEach(function(done) {
    server.close();
    models.User.destroy({where: {}}).then(function(){
      done()
    })
  });

  it('tests',function(done){
    var options = {url: 'http://localhost:3000/users/new',
                   method: "POST",
                   body: "first=Elizabeth&last=Coffee&email=test@example.com&pic=123&gender=F&age=14"}

    request(options, function(error, response, body) {
      expect(body).toContain('user_id');
      done();
    });
  });
});
