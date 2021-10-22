const { I } = inject();
let parametreler = require('../Parameters/aranacakdegiskenler.json');



  

module.exports = {
  getEnvironmetParameters : function(key) {
    return parametreler[key];
 },
  

  fields: {
    Search: "//input[@class='sc-4995aq-0 sc-14oyvky-0 gHqOYK']",
    
  },
  select: {
    sayfa3mu: "//a[@title='3. sayfa'][@aria-current='true']"
  },
  buttons: {
    aramabutonu: "//button[@class='qjixn8-0 sc-1bydi5r-0 gaMakD']",
    sayfa3buton: "//a[@class='sc-12aj18f-0 ZxdVY'][@title='3. sayfa']",
    
  },
  Searching: function () {
    //laptop arama
    I.fillField(this.fields.Search, this.getEnvironmetParameters("aranacakUrun"));
    I.click(this.buttons.aramabutonu);

  },
  SelectPage: function () {
    //3.sayfaya inme ve gitme
    I.scrollPageToBottom();
    I.waitForElement(this.buttons.sayfa3buton);
    I.click(this.buttons.sayfa3buton);
    I.seeElement(this.select.sayfa3mu);

  },
  SelectProducts: function () {
    //ürün seçimi
    I.click(this.getEnvironmetParameters("urunSecimi"));

  },
}
