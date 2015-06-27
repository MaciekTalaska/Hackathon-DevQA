module.exports = {
  'Password recovery page should allow user to ': function(test) {
    test
      .open('http://demo.testarena.pl/odzyskaj_haslo')
      .assert.attr('.remember_check > a', 'href', 'http://demo.testarena.pl/zaloguj')
      .done();
  }
};
