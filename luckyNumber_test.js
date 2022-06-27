const homePage = require("./pages/homePage");

Feature('luckyNumber');

// Scenario('Go to choose random number',({ I,loginPage,homePage }) => {
//     I.amOnPage('/buyer/login?next=https%3A%2F%2Fshopee.vn%2F')
//     loginPage.enterCred(process.env.USER,process.env.PASS).clickLogin();
//     homePage.verifyUserLoginSuccess().openLuckyNumberPage().randomLuckyNumber()
//     homePage.logout()
// });

Scenario('Go to claim coin',({ I,loginPage,coinPage }) => {
    I.amOnPage('/buyer/login?next=https%3A%2F%2Fshopee.vn%2F')
    loginPage.enterCred(process.env.USER,process.env.PASS).clickLogin();
    homePage.verifyUserLoginSuccess().openCoinPage().verifyClaimSuccess();
    homePage.logout()
});

