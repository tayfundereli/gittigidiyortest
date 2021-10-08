const { I } = inject();

module.exports = {
  fields:{
    sepetBosMu:"Sepetinizde ürün bulunmamaktadır."
  },
  select:{
    adetartırma:"//select[@class='amount']",
    adetkontrol:"//select[@class='amount'][@value='2']"
  },
  buttons:{ 
    sepeteekleme:"//button[@id='add-to-basket']",
    sepetegit:"//div[@class='gg-d-10 pl0']",
    urunsilme:"//div[@class='gg-d-24 hidden-m update-buttons-container']//a[@class='btn-delete btn-update-item']"

    

    
  },
  addsepet:function(){
    //sepete ekleme
I.waitForClickable(this.buttons.sepeteekleme);
I.click(this.buttons.sepeteekleme);
  
},
sepetegit:function(){
  //sepeti görüntüleme
I.click(this.buttons.sepetegit);
},

urunartirma:function(){
  //ürün adedi artırma
I.selectOption(this.select.adetartırma,"2"); //ürün adedini artırabiliriz.
I.seeElement(this.select.adetkontrol);
},
urunsilmevekontrol:function(){
  //ürün silme
I.click(this.buttons.urunsilme);
I.wait(3);
//sepette ürün olmadıgının kontrolü
I.see(this.fields.sepetBosMu);

}
}