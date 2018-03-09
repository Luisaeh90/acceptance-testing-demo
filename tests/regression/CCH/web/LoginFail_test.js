
Feature('LoginFail');

Scenario('Login Fail', (I,loginPage) => {
  I.amOnPage('/');
  loginPage.loginForm('WrongUsername','WrongPass');
  I.wait(5);
  I.see("We didn't recognize the username or password you entered. Please try again.");
  I.saveScreenshot('Login fail validation');
});
