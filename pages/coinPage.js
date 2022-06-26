const { I } = inject();
const claimCoinBtn = {xpath:'//button[contains(text(),"Nhấn để nhận ngay")]'}
const claimCoinBtn2 = {xpath:'//button[contains(@class,"pcmall-dailycheckin")]'}


class coinPage{
    claimCoin(){
        I.forceClick(claimCoinBtn2)
        return this
    }

    verifyClaimSuccess(){
        I.seeTextEquals("Quay lại vào ngày mai để nhận 100 xu",claimCoinBtn2)
        return this
    }
}

module.exports = new coinPage();