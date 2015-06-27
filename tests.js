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
  }
};
