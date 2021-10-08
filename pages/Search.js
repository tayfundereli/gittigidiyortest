const { I } = inject();

module.exports = {
  fields:{
    Search:"//input[@class='sc-4995aq-0 sc-14oyvky-0 gHqOYK']"
  },
  select:{
    sayfa3mu:"//a[@title='3. sayfa'][@aria-current='true']"
  },
  buttons:{
    aramabutonu:"//button[@class='qjixn8-0 sc-1bydi5r-0 gaMakD']",
    sayfa3buton:"//a[@class='sc-12aj18f-0 ZxdVY'][@title='3. sayfa']",
    urunsecimi:"//a[@title='LENOVO V15 82C500NTTX intel i5-1035G1 12GB 1TB + 128GB ssd Nvidia MX330 freedos 15.6 FULL HD laptop']"
  },
  Searching:function(){
    //laptop arama
I.fillField(this.fields.Search,"laptop");
I.click(this.buttons.aramabutonu);
  
},
SelectPage:function(){
//3.sayfaya inme ve gitme
I.scrollPageToBottom();
I.waitForElement(this.buttons.sayfa3buton);
I.click(this.buttons.sayfa3buton);
I.seeElement(this.select.sayfa3mu);

},
SelectProducts:function(){
//ürün seçimi
I.click(this.buttons.urunsecimi);
  
  },
}
