const { I } = inject();
const shopnameLbl = {xpath:'//div[@class="navbar__username"]'}
const logoutBtn = {xpath:'//span[text()="Đăng xuất"]'}

class luckyNumberPage{
    randomLuckyNumber(){       
        I.click({xpath:'//html[@lang="vi"]'})
        I.openNewTab()
        I.amOnPage('https://giaitri.shopee.vn/lottery/home/e2beb3258915d83a94d50fc8b9b5393b?loginNext=https%3A%2F%2Fshopee.vn%2Fm%2Fshopeesogiday&source=microsite&component_name=pick%20number%20all&md_component_id=1626854005651&microsite_labelid=&microsite_pageid=12831&section_location=2')
        I.forceClick({xpath:'//button[text()="Số ngẫu nhiên"]'})
        I.closeCurrentTab()  
        return this
      }
}

module.exports = new luckyNumberPage();