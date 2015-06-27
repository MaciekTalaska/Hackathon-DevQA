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

  '0000260 -  correct message when no login data was provided': function(test) {
    tryToLogWithoutFillFields(test)
      .waitForElement('.login_form_error')
      .assert.doesntExist('div.login_table div.login_form_error')
      //.assert.exists('div.login_table div.login_form_error')
      //.assert.numberOfElements('.login_form_error', 2)
      .done();
  }
};
