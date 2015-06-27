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
  }

};
