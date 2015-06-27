var testarena = {
   url: "http://demo.testarena.pl/",
   login: "administrator@testarena.pl",
   pass: "sumXQQ72$L"
};

var mrbuggy = {
  url: "http://demo.mrbuggy2.testarena.pl/",
  login: "admin@tc2014.pl",
  pass: "12qwAS"
};

var param = testarena;

function logToApplication(test) {
  return test
          .open(param.url)
          .type('#email', param.login)
          .type('#password', param.pass)
          .click('#login')

}

module.exports = {
  '	0000290 - Password recovery page should allow user to ': function(test) {
    test
      .open(param.url + 'odzyskaj_haslo')
      .assert.attr('.remember_check > a', 'href', param.url + 'zaloguj')
      .done();
  },

  '	0000272 - 404 page should exist ': function(test) {
    test
      .open(param.url + 'zalogujABCD')
      .assert.exists('h1.pagenotfound_title', '404 page should exist')
      .done();
  },

  '	0000278 - cookie should have HttpOnly set': function(test) {
    logToApplication(test)
      .assert.cookie("FrameProfil", "httpOnl")  
      .done();
  },
  '	0000260 - when no login data was provided no incorrect data message should be visible': function(test) {
    test
        .open(param.url + 'zaloguj')
        .click('#login')
        .assert.numberOfElements('div.login_form_error', 2)
        .done();
  }
};
