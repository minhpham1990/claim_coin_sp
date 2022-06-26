const { I } = inject();
const userTxb = {xpath:'//input[@name="loginKey"]'}
const passTxb = {xpath:'//input[@name="password"]'}
const loginBtn = {xpath:'//button[text()="Đăng nhập"]'}
class loginPage {
  enterCred(username, password) {
    I.waitForVisible(userTxb,5)
    I.fillField(userTxb,username)
    I.fillField(passTxb,password)
    return this
  }
  
  clickLogin() {
    I.waitForEnabled(loginBtn,5)
    I.forceClick(loginBtn)
    return this
  }
  // insert your locators and methods here
}

module.exports = new loginPage();
