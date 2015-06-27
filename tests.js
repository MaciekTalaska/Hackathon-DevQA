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

function tryToLogWithoutFillFields(test){
  return test
    .open(param.url)
    .click('#login')
}

module.exports = {
  '0000290 - Password recovery page should allow user to ': function(test) {
    test
      .open(param.url + 'odzyskaj_haslo')
      .assert.attr('.remember_check > a', 'href', param.url + 'zaloguj')
      .done();
  },

  '0000272 - 404 page should exist ': function(test) {
    test
      .open(param.url + 'zalogujABCD')
      .assert.exists('h1.pagenotfound_title', '404 page should exist')
      .done();
  },

  //'0000278 - Cookie should have HttpOnly set': function(test) {
  //  logToApplication(test)
  //    .waitForElement('#head-top')
  //    .assert
  //        .cookie("FrameProfile", "httpOnly")  
  //        //.exists('.header_admin')
  //    .done();
  //},

  '0000260 -  correct message when no login data was provided': function(test) {
    tryToLogWithoutFillFields(test)
      .waitForElement('.login_form_error')
      .assert.numberOfElements('.login_form_error', 2) 
      .done();
  },

  '0000280 - correct captcha message when no login data was provided': function(test) {
    test
      .open(param.url + 'odzyskiwanie_hasla')
      .click('#recover')
      .assert.text('div.login_table div.login_form_error').is('Proszę poprawnie uzupełnić pole captcha.')
      .done();
  }
};
