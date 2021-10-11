# Gittigidiyor Test
> Codeceptjs kullanılmıştır.
> 
> Page object pattern prensiplerine bağlı, kolay güncellenebilir kod denemesi.
> 


## Nasıl Çalıştırılır ?

-Terminale npx selenium start yazılır.

-Ardından yeni bir terminal açılır.

-Terminale npx codeceptjs run yazılarak otomasyon başlatılır.

## Test Senaryosu

-Gittigidiyor anasayfasına giriş yap.

-Laptop araması yap.

-Üçüncü sayfaya git.

-Üçüncü sayfada olduğunu kontrol et.

-Rastgele bir ürünü sepete ekle.

-Sepete git.

-Ürün adetini iki yap.

-Ürün adetinin iki olduğunu kontrol et.

-Ürünü sepetten sil.

-Ürünün sepetten silindiğini kontrol ettir.


## Sayfalar

**Home Page**

-*homePage* : Anasayfaya giriş

-*CloseCookies* : Çerezler uyarısı kapatma


**Search Page**

-*Searching* : Laptop araması yapma

-*SelectPage* : Üçüncü sayfayı seçme

-*SelectProducts* :Ürün seçme


**sepet Page**

-*addsepet* : Ürünü sepete ekleme

-*sepetegit* : Sepete gitme

-*urunartirma* : Sepetteki ürün adeti artırma

-*urunsilmevekontrol* : Sepetteki ürünleri silme ve sepetin boş olduğunu kontrol ettirme
