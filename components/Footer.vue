<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- Hakkımızda Bölümü -->
          <div class="col-md-3">
            <h4 @click="toggleCollapse('hakkimizda')">HAKKIMIZDA</h4>
            <div :id="'hakkimizda'" class="collapse" :class="{ show: isOpen('hakkimizda') }">
              <ul class="footer-menu">
                <li><a href="#">Biz Kimiz?</a></li>
                <li><a href="#">Bize Ulaşın</a></li>
                <li><a href="#">İnsan Kaynakları</a></li>
                <li><a href="#">Üyelik Sözleşmesi</a></li>
                <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
                <li><a href="#">Kişisel Verilerin Korunması</a></li>
                <li><a href="#">Kullanım Koşulları</a></li>
                <li><a href="#">Gizlilik ve Güvenlik</a></li>
                <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
                <li><a href="#">On Bilgilendirme Formu</a></li>
                <li><a href="#">Çerez Tercihlerini Yönetin</a></li>
              </ul>
            </div>
          </div>
          
          <!-- Hizmetlerimiz Bölümü -->
          <div class="col-md-3">
            <h4 @click="toggleCollapse('hizmetlerimiz')">HİZMETLERİMİZ</h4>
            <div :id="'hizmetlerimiz'" class="collapse" :class="{ show: isOpen('hizmetlerimiz') }">
              <ul class="footer-menu">
                <li><a href="#">Hesabım</a></li>
                <li><a href="#">Sizden Gelenler</a></li>
                <li><a href="#">Hediye Kartı</a></li>
                <li><a href="#">Sıkça Sorulan Sorular</a></li>
                <li><a href="#">Site Haritası</a></li>
              </ul>
            </div>
          </div>
  
          <!-- Sipariş Bölümü -->
          <div class="col-md-3">
            <h4 @click="toggleCollapse('siparis')">SİPARİŞ</h4>
            <div :id="'siparis'" class="collapse" :class="{ show: isOpen('siparis') }">
              <ul class="footer-menu">
                <li><a href="#">Siparişlerim</a></li>
                <li><a href="#">Sipariş Takip</a></li>
                <li><a href="#">İade Koşulları</a></li>
                <li><a href="#">Teslimat Bilgileri</a></li>
                <li><a href="#">Ödeme Seçenekleri</a></li>
                <li><a href="#">Kurumsal ve Toplu Satış</a></li>
              </ul>
            </div>
          </div>
  
          <!-- Popüler Kategoriler Bölümü -->
          <div class="col-md-3">
            <h4 @click="toggleCollapse('populerKategoriler')">POPÜLER KATEGORİLER</h4>
            <div :id="'populerKategoriler'" class="collapse" :class="{ show: isOpen('populerKategoriler') }">
              <ul class="footer-menu">
                <li><a href="#">Erkek</a></li>
                <li><a href="#">Kadın</a></li>
                <li><a href="#">Çocuk</a></li>
                <li><a href="#">Bebek</a></li>
                <li><a href="#">Mobil Uygulamalar</a></li>
                <li><a href="#">Deneyimini Mobil Uygulamada Sürdür</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; {{ currentYear }} Tüm Hakları Saklıdır.</p>
            </div>
            <div class="col-md-6 text-right">
              <a href="#">Google Play</a>
              <a href="#">App Store</a>
              <a href="#">App Gallery</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        opened: 'hakkimizda' // Başlangıçta "HAKKIMIZDA" açılır
      };
    },
    methods: {
      toggleCollapse(section) {
        // Eğer tıklanan bölge zaten açıksa, kapat; açık değilse aç
        this.opened = this.opened === section ? '' : section;
      },
      isOpen(section) {
        return this.opened === section;
      }
    },
    computed: {
      currentYear() {
        return new Date().getFullYear();
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 40px 0;
  }
  
  .footer-menu {
    list-style: none;
    padding: 0;
  }
  
  .footer-menu li a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-menu li a:hover {
    color: #ccc;
  }
  
  .footer-bottom {
    background-color: #222;
    padding: 10px 0;
    color: #ccc;
    font-size: 14px;
  }
  
  .footer-bottom a {
    color: #ccc;
    text-decoration: none;
    margin-left: 10px;
  }
  
  .footer-bottom a:hover {
    color: #fff;
  }
  </style>
  