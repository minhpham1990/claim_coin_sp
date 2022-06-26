/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/loginPage.js');
type homePage = typeof import('./pages/homePage.js');
type luckyNumberPage = typeof import('./pages/luckyNumberPage.js');
type coinPage = typeof import('./pages/coinPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, homePage: homePage, luckyNumberPage: luckyNumberPage, coinPage: coinPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
