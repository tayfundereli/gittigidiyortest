const { I } = inject();

module.exports = {
  fields:{},
  select:{},
  buttons:{
    CloseCookiesButton:"//a[@class='tyj39b-5 lfsBU']" //dinamik hale getiriyoruz.
  },

  // Anasayfaya gitme 

  homePage:function(){
    //siteye gidiş
I.amOnPage("https://www.gittigidiyor.com/");

  },
  CloseCookies:async function(){ //bu fonksiyonu async calıstırmamız gerekiyor yoksa beklediği için hata alıyoruz.
    //cookies popup sayısı alma
let isCookiesEnabled = await I.grabNumberOfVisibleElements(this.buttons.CloseCookiesButton);
if (isCookiesEnabled != 0) {
  //çerezler popup kapatma
  I.click(this.buttons.CloseCookiesButton);
}
  }
}
