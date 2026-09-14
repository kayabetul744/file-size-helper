import type { Page } from "./story-types";
import p1 from "@/assets/ch8/p1.jpg";
import p2 from "@/assets/ch8/p2.jpg";
import p3 from "@/assets/ch8/p3.jpg";
import p4 from "@/assets/ch8/p4.jpg";
import p5 from "@/assets/ch8/p5.jpg";
import p6 from "@/assets/ch8/p6.jpg";
import p7 from "@/assets/ch8/p7.jpg";
import p8 from "@/assets/ch8/p8.jpg";
import p9 from "@/assets/ch8/p9.jpg";
import p10 from "@/assets/ch8/p10.jpg";

export const ch8Pages: Page[] = [
  {
    no: 1,
    title: "Osaka'nın Salonu",
    panels: [
      {
        size: "full",
        scene:
          "Ahşap kirişli eski Osaka tahıl borsası. Kalabalık tüccarlar el işaretleriyle fiyat veriyor, havada kâğıt fişler uçuşuyor. Ryō takım elbisesiyle kapıdan giriyor.",
        narration:
          "Osaka'da dünyanın ilk vadeli işlem borsası kurulmuş. Üç yüz yıl önce. Aynı salonda hâlâ aynı ders veriliyordu.",
        image: p1,
      },
      {
        size: "half",
        scene: "Kenji kalabalığın içinden Ryō'ya el sallıyor; gergin bir gülümseme.",
        lines: [
          { who: "Kenji", text: "Buraya sermayenle gelmiyorsun. Teminatınla geliyorsun." },
          { who: "Ryō", text: "Fark ne?" },
          { who: "Kenji", text: "Fark, kaybedebileceğin paranın senin olmaması." },
        ],
      },
      {
        size: "half",
        scene: "Platformun üstünde, koyu haori giymiş sert bakışlı Dōgen kalabalığı izliyor.",
        lines: [{ who: "Dōgen", text: "Yeni gelen. Yanıma." }],
      },
    ],
  },
  {
    no: 2,
    title: "Sözleşme",
    panels: [
      {
        size: "full",
        scene:
          "Depo. Arkada çuval çuval pirinç. Dōgen elinde bir vadeli sözleşme fişi tutuyor, Ryō'ya gösteriyor.",
        lines: [
          { who: "Dōgen", text: "Bu kâğıt pirinç değildir. Pirinci gelecekte belirli bir fiyattan alma sözüdür." },
          { who: "Dōgen", text: "Türev, bir şeyin kendisi değil; o şeyin fiyatına bağlı bir sözdür." },
        ],
        image: p2,
      },
      {
        size: "half",
        scene: "Ryō defterine iki kelime yazıyor: 'dayanak varlık'.",
        lines: [{ who: "Ryō", text: "Yani fiyatı başka bir şeyden türüyor. Adı buradan geliyor.", type: "thought" }],
      },
      {
        size: "half",
        scene: "Dōgen fişi masaya bırakıyor.",
        lines: [
          { who: "Dōgen", text: "Bu kâğıt icat edildiğinde amacı kazanç değildi. Amacı korunmaydı." },
        ],
      },
    ],
  },
  {
    no: 3,
    title: "Çiftçinin Sözü",
    panels: [
      {
        size: "full",
        scene:
          "Pirinç tarlası. Yaşlı bir çiftçi ile bir tüccar el sıkışıyor. Arkada büyük bir depo.",
        narration:
          "Çiftçi hasadı görmeden fiyatını sabitledi. Tüccar da malını görmeden fiyatını sabitledi. İkisi de o gece rahat uyudu.",
        image: p3,
      },
      {
        size: "half",
        scene: "Dōgen tarlanın kenarında duruyor, Ryō'ya bakıyor.",
        lines: [
          { who: "Dōgen", text: "Buna korunma denir. Kazanmak için değil, sürprizi kesmek için yapılır." },
          { who: "Dōgen", text: "Havacı yakıtını, fırıncı ununu, ihracatçı kurunu böyle sabitler." },
        ],
      },
      {
        size: "half",
        scene: "Ryō not alıyor: 'korunma = belirsizliği sabit maliyete çevirmek'.",
        lines: [{ who: "Ryō", text: "Yani türev başlangıçta bir sigorta.", type: "thought" }],
      },
    ],
  },
  {
    no: 4,
    title: "Kaldıraç",
    panels: [
      {
        size: "full",
        scene:
          "Sembolik sahne: bir genç, uzun bir tahta kaldıraçla kendinden kat kat büyük bir kayayı yerinden oynatıyor.",
        lines: [
          { who: "Dōgen", text: "Teminat küçüktür, pozisyon büyüktür. Aradaki orana kaldıraç denir." },
          { who: "Dōgen", text: "Kaldıraç kazancı büyütmez. Hızı büyütür. Her iki yöne." },
        ],
        image: p4,
      },
      {
        size: "half",
        scene: "Kenji heyecanla telefonunda hesap yapıyor.",
        lines: [
          { who: "Kenji", text: "On kat kaldıraçla yüzde bir hareket, yüzde on kazanç demek!" },
          { who: "Ryō", text: "Ya da yüzde on kayıp." },
        ],
      },
      {
        size: "half",
        scene: "Dōgen tahtanın çatlamaya başlayan noktasını gösteriyor.",
        lines: [{ who: "Dōgen", text: "Kaldıracın kırıldığı yere bak. Herkes taşa bakarken." }],
      },
    ],
  },
  {
    no: 5,
    title: "Kırılan Kol",
    panels: [
      {
        size: "full",
        scene:
          "Aynı kaldıraç ikiye ayrılıyor, kaya yerine geri düşüyor; genç sağlam bir şekilde geri adım atıp kolunu yüzüne siper ediyor.",
        narration:
          "Teminat erirse pozisyon kapatılır. Buna teminat tamamlama çağrısı derler. Kimse aramaz; sistem kapatır.",
        sfx: "KRAK",
        image: p5,
      },
      {
        size: "half",
        scene: "Kenji'nin ekranında pozisyon otomatik kapanıyor; yüzü donuk.",
        lines: [
          { who: "Kenji", text: "Ama fiyat sonra geri geldi!" },
          { who: "Dōgen", text: "Geldi. Sen yoktun. Kaldıraçta haklı olmak yetmez; o ana kadar ayakta kalman gerekir." },
        ],
      },
      {
        size: "half",
        scene: "Ryō defterine yazıyor: 'kaldıraç = zamanı kısaltır'.",
        lines: [{ who: "Ryō", text: "Doğru fikir, yanlış süre. En pahalı kombinasyon.", type: "thought" }],
      },
    ],
  },
  {
    no: 6,
    title: "Şemsiyeci",
    panels: [
      {
        size: "full",
        scene:
          "Açık gökyüzü altında meydanda şemsiye satan bir adam; kalabalık ilgisizce yanından geçiyor.",
        narration:
          "Güneşli günde şemsiye ucuzdur. Yağmurda satılık şemsiye kalmaz. Opsiyon dedikleri şey budur.",
        image: p6,
      },
      {
        size: "half",
        scene: "Dōgen iki kâğıt uzatıyor: birinde 'ALMA HAKKI', diğerinde 'SATMA HAKKI'.",
        lines: [
          { who: "Dōgen", text: "Opsiyon bir zorunluluk değil, bir haktır. Küçük bir bedel ödersin." },
          { who: "Dōgen", text: "Alıcının kaybı ödediği bedelle sınırlıdır. Tek sınırlı şey odur." },
        ],
      },
      {
        size: "half",
        scene: "Ryō 'prim' kelimesini yazıp yuvarlak içine alıyor.",
        lines: [{ who: "Ryō", text: "Sigorta poliçesinin fiyatı gibi.", type: "thought" }],
      },
    ],
  },
  {
    no: 7,
    title: "Kum Saati",
    panels: [
      {
        size: "full",
        scene:
          "Masanın üstünde büyük bir kum saati; kumun çoğu alt hazneye inmiş. Genç bir alıcı endişeyle izliyor.",
        narration:
          "Opsiyon alıcısı iki şeyle uğraşır: yönle ve zamanla. Yönü tutturursun, zaman seni yener.",
        image: p7,
      },
      {
        size: "half",
        scene: "Dōgen kum saatini çeviriyor.",
        lines: [
          { who: "Dōgen", text: "Her geçen gün primin bir parçasını alır. Buna zaman erimesi denir." },
          { who: "Dōgen", text: "Bu yüzden opsiyon alan kişi haklı olmakla yetinemez; zamanında haklı olmak zorundadır." },
        ],
      },
      {
        size: "half",
        scene: "Ryō iki eğri çiziyor: biri yavaş, biri son günlerde dikleşerek düşen.",
        lines: [{ who: "Ryō", text: "Vade yaklaştıkça erime hızlanıyor.", type: "thought" }],
      },
    ],
  },
  {
    no: 8,
    title: "Sigortacı",
    panels: [
      {
        size: "full",
        scene:
          "Pazar yeri. Sakin bir tüccar, birçok kişiden küçük madeni paralar topluyor. Ufukta koyu bir fırtına bulutu toplanıyor.",
        narration:
          "Opsiyon satan kişi her gün küçük bir para toplar. Doksan dokuz gün kazanır. Yüzüncü gün fırtına gelir.",
        image: p8,
      },
      {
        size: "half",
        scene: "Dōgen fırtına bulutunu işaret ediyor.",
        lines: [
          { who: "Dōgen", text: "Satıcının kazancı sınırlı, riski geniştir. Alıcının tam tersi." },
          { who: "Dōgen", text: "Hangisi doğru? İkisi de. Yanlış olan, hangisini yaptığını bilmemektir." },
        ],
      },
      {
        size: "half",
        scene: "Ryō defterine iki sütun çiziyor: 'alıcı: sınırlı kayıp, geniş kazanç' / 'satıcı: sınırlı kazanç, geniş kayıp'.",
        lines: [{ who: "Ryō", text: "Aynı sözleşmenin iki yüzü.", type: "thought" }],
      },
    ],
  },
  {
    no: 9,
    title: "Küçülen Pozisyon",
    panels: [
      {
        size: "full",
        scene:
          "Gece. Modern bir işlem odası. Ryō ekranındaki pozisyon büyüklüğünü azaltıyor; dışarıda şehir ışıkları.",
        narration:
          "O gece hiçbir tahmin değiştirmedim. Sadece bir sayıyı küçülttüm: pozisyon büyüklüğünü. Uykum geri geldi.",
        lines: [{ who: "Ryō", text: "Kaldıraç bir yetenek değil, bir tercih. Ben küçüğünü seçiyorum.", type: "thought" }],
        image: p9,
      },
      {
        size: "half",
        scene: "Kenji yan masada; yorgun ama sakin.",
        lines: [
          { who: "Kenji", text: "Ben teminatın yarısını nakitte tutmaya başladım." },
          { who: "Aiko", text: "İşte bu, kaldıracı kullanmanın tek yetişkin biçimi." },
        ],
      },
      {
        size: "half",
        scene: "Ekranda küçük ama düzenli bir çizgi yukarı kıvrılıyor.",
        lines: [{ who: "Ryō", text: "Yavaş olan, hayatta kalan.", type: "thought" }],
      },
    ],
  },
  {
    no: 10,
    title: "Köprüden Çıkış",
    panels: [
      {
        size: "full",
        scene:
          "Sabah ışığında Dōgen ile Ryō kanal kenarında yürüyor; arkalarında Osaka'nın köprüsü.",
        narration:
          "Osaka'dan bir strateji ile çıkmadım. Bir ölçü ile çıktım: gücün büyüklüğü değil, taşıyabildiğin kadarı.",
        lines: [{ who: "Dōgen", text: "Türev kötü değildir. Ölçüsüz kullanan kötüdür." }],
        image: p10,
      },
      {
        size: "half",
        scene: "Dōgen durup Ryō'ya bakıyor.",
        lines: [
          { who: "Dōgen", text: "Şimdi en zor kapıya gidiyorsun." },
          { who: "Ryō", text: "Neresi?" },
          { who: "Dōgen", text: "Kendi zihnin. Oradaki rakip her gün seninle uyanır." },
        ],
      },
      {
        size: "half",
        scene: "Uzakta bir dojo kapısı; eşikte Sensei Honma'nın silueti.",
        narration: "Bir sonraki bölümde grafik yoktu. Sadece bir minder, bir nefes ve bir defter vardı.",
        sfx: "…",
      },
    ],
  },
];
