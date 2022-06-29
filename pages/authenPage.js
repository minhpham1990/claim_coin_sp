const { I } = inject();
const authenSmsBtn = {xpath:'//button[.="Xác minh bằng liên kết SMS"]'}

class authenPage{
    clickAuthenSMS(){
        I.waitForVisible(authenSmsBtn,10)
        I.click(authenSmsBtn);
        return this
    }
}

module.exports = new authenPage();