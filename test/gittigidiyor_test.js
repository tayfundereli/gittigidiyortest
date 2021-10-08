

Feature('gittigidiyor');

    
Scenario('test something', async ({ I,homePage,searchPage,sepetPage }) => {


homePage.homePage();
await homePage.CloseCookies(); // await kodunu async calıstıgı için yazdık
searchPage.Searching();
searchPage.SelectPage();
searchPage.SelectProducts();
sepetPage.addsepet();
sepetPage.sepetegit();
sepetPage.urunartirma();
sepetPage.urunsilmevekontrol();






});
