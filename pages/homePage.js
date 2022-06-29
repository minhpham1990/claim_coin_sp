const { I,coinPage,luckyNumberPage } = inject();
const shopnameLbl = {xpath:'//div[@class="navbar__username"]'}
const logoutBtn = {xpath:'//span[text()="Đăng xuất"]'}

class homePage {
  verifyUserLoginSuccess() {
    I.waitForElement(shopnameLbl,20)
    I.seeTextEquals('minhshop09',shopnameLbl)
    return this
  }

  openLuckyNumberPage(){
    I.amOnPage('/m/shopeesogiday');
    return luckyNumberPage;
  }

  openCoinPage(){
    I.amOnPage('/shopee-coins');
    return coinPage;
  }

  logout(){
    I.moveCursorTo(shopnameLbl)
    I.click(logoutBtn) 
    return this
  }
}

module.exports = new homePage();
