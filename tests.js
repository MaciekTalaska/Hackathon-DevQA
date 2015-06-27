function logToApplication() {
  return test
          .open('http://demo.testarena.pl/')
          .type('#email', 'administrator@testarena.pl')
          .type('#password', 'sumXQQ72$L')
          .click('#login')

}

module.exports = {
  '	0000290 - Password recovery page should allow user to ': function(test) {
    test
      .open('http://demo.testarena.pl/odzyskaj_haslo')
      .assert.attr('.remember_check > a', 'href', 'http://demo.testarena.pl/zaloguj')
      .done();
  },

  '	0000272 - 404 page should exist ': function(test) {
    test
      .open('http://demo.testarena.pl/zalogujABCD')
      .assert.exists('h1.pagenotfound_title', '404 page should exist')
      .done();
  },

  '	0000278 - cookie should have HttpOnly set': function(test) {
      logToApplication()
        .done();
  },

  '	0000260 -  correct message when no login data was provided': function(test) {
      test
        .open('http://demo.testarena.pl/zaloguj')
        .click('#login')
        .assert.numberOfElements('div.login_form_error', 2)
        .done();
  },

  '	0000280 - correct captcha message when no login data was provided': function(test) {
      test
        .open('http://demo.testarena.pl/odzyskiwanie_hasla')
        .click('#recover')
        .assert.text('div.login_table div.login_form_error').is('Proszę poprawnie uzupełnić pole captcha.')
        .done();
  }
};
