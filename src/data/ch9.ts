import type { Page } from "./story-types";
import p1 from "@/assets/ch9/p1.jpg";
import p3 from "@/assets/ch9/p3.jpg";
import p5 from "@/assets/ch9/p5.jpg";
import p7 from "@/assets/ch9/p7.jpg";
import p9 from "@/assets/ch9/p9.jpg";

export const ch9Pages: Page[] = [
  {
    no: 1,
    title: "Aynalı Salon",
    panels: [
      {
        size: "full",
        scene:
          "Sade bir ahşap dojo. Duvarlarda kılıç yerine aynalar var. Ortada minderde oturan yaşlı Sensei Honma, karşısında Ryō.",
        narration:
          "Dojoya silah bırakılmaz diye girdim. İçeride zaten silah yoktu. Sadece aynalar vardı — ve hepsi bana bakıyordu.",
        image: p1,
      },
      {
        size: "half",
        scene: "Honma gözlerini açmadan konuşuyor.",
        lines: [
          { who: "Honma", text: "Kaç kez haklı çıktın da para kaybettin?" },
          { who: "Ryō", text: "…Sayamayacak kadar." },
        ],
      },
      {
        size: "half",
        scene: "Ryō aynadaki yansımasına bakıyor.",
        lines: [{ who: "Ryō", text: "Demek düşman burada.", type: "thought" }],
      },
    ],
  },
  {
    no: 2,
    title: "İki Kat Ağır",
    panels: [
      {
        size: "full",
        scene:
          "Honma masaya iki taş koyuyor: biri beyaz, biri siyah. Siyah taş belirgin şekilde daha büyük.",
        lines: [
          { who: "Honma", text: "Bu beyaz taş 100.000 yenlik kazancın." },
          { who: "Honma", text: "Bu siyah taş da 100.000 yenlik zararın." },
          { who: "Ryō", text: "Ama siyah olan daha büyük." },
          { who: "Honma", text: "Hayır. Sadece öyle hissediliyor. Hep öyle hissedilir." },
        ],
      },
      {
        size: "half",
        scene: "Ryō defterine yazıyor.",
        narration:
          "Kayıptan kaçınma: aynı büyüklükteki kayıp, kazançtan yaklaşık iki kat ağır hissedilir. Bu yüzden zararı kesmek, kârı almaktan zordur.",
      },
    ],
  },
  {
    no: 3,
    title: "Duymak İstediğin Ses",
    panels: [
      {
        size: "full",
        scene:
          "Ryō bir masada oturuyor; önünde aynı şirket hakkında iki gazete. Biri övgü dolu, diğeri uyarı dolu. Ryō elini istemeden övgü dolu olana uzatıyor.",
        narration: "Elim hangisine gidiyorsa, zaten kararımı vermişim demekti.",
        image: p3,
      },
      {
        size: "half",
        scene: "Honma diğer gazeteyi öne itiyor.",
        lines: [
          { who: "Honma", text: "Doğrulama yanlılığı. Seni destekleyeni büyütür, çelişeni siler." },
          { who: "Honma", text: "Önce karşı tarafın en güçlü argümanını yaz. Sonra al." },
        ],
      },
    ],
  },
  {
    no: 4,
    title: "Sürü",
    panels: [
      {
        size: "full",
        scene:
          "Kalabalık bir sokakta herkes aynı yöne koşuyor; Ryō akıntının ortasında duruyor ve nereye gittiklerini soruyor.",
        lines: [
          { who: "Yoldan geçen", text: "Herkes alıyor! Geç kalma!" },
          { who: "Ryō", text: "Neyi alıyorsunuz?" },
          { who: "Yoldan geçen", text: "…Bilmiyorum ama yükseliyor!" },
        ],
      },
      {
        size: "half",
        scene: "Ryō cebindeki defteri sıkıca tutuyor.",
        narration:
          "Sürünün içinde olmak güven verir. Ama sürünün yönünü kimse bilmiyorsa, güven en pahalı duygudur.",
      },
    ],
  },
  {
    no: 5,
    title: "Çapa",
    panels: [
      {
        size: "full",
        scene:
          "Honma tahtaya büyük bir sayı yazıyor: 8.000. Sonra siliyor ve soruyor: 'Bu hisse kaç eder?' Ryō'nun aklında hâlâ 8.000 dolaşıyor; başının üstünde soluk bir hayalet rakam.",
        narration:
          "Bir sayıyı görmek yetiyordu. Zihnim ona demir atıyor, sonra bütün tahminlerimi o demirin etrafında yapıyordum.",
        image: p5,
      },
      {
        size: "half",
        scene: "Ryō defterine not alıyor.",
        lines: [
          {
            who: "Ryō",
            text: "Alış fiyatım şirketin değeri değil. Sadece benim hatıram.",
            type: "thought",
          },
        ],
      },
    ],
  },
  {
    no: 6,
    title: "Batık Maliyet",
    panels: [
      {
        size: "full",
        scene:
          "Ryō elinde ıslanmış bir tiyatro bileti, boş bir salonun kapısında duruyor. Honma yanında.",
        lines: [
          { who: "Honma", text: "Oyun kötü. Bileti ödedin diye sonuna kadar oturur musun?" },
          { who: "Ryō", text: "…Para gitti zaten." },
          { who: "Honma", text: "Evet. Şimdi kalan tek şey zamanın. Onu da verecek misin?" },
        ],
      },
      {
        size: "half",
        scene: "Ryō salondan çıkıyor, yağmur dinmiş.",
        narration: "Ödenmiş bedel, geleceğe ait bir karar için oy kullanamaz.",
      },
    ],
  },
  {
    no: 7,
    title: "Günlük",
    panels: [
      {
        size: "full",
        scene:
          "Gece; küçük bir lambanın altında Ryō işlem günlüğünü yazıyor. Sayfada üç sütun: 'Neden girdim', 'Neden çıktım', 'Ne hissettim'.",
        narration:
          "Honma bana grafik vermedi. Bir defter verdi. 'Hafızanı piyasaya emanet etme,' dedi.",
        image: p7,
      },
      {
        size: "half",
        scene: "Honma kapıda duruyor.",
        lines: [
          { who: "Honma", text: "Kayıt tutmayan, aynı hatayı ilk kez yapıyormuş gibi yapar." },
        ],
      },
    ],
  },
  {
    no: 8,
    title: "Nefes",
    panels: [
      {
        size: "full",
        scene:
          "Ryō ekranın karşısında elleri titriyor. Honma ekranı kapatıyor ve pencereyi açıyor; dışarıdan sabah sesi geliyor.",
        lines: [
          { who: "Honma", text: "Karar veremeyecek kadar heyecanlıysan, karar zaten verilmiştir." },
          { who: "Honma", text: "On nefes al. Piyasa on nefeste kaçmaz." },
        ],
      },
      {
        size: "half",
        scene: "Ryō gözlerini kapatıyor, omuzları düşüyor.",
        sfx: "…fuu.",
      },
    ],
  },
  {
    no: 9,
    title: "Kurallar Levhası",
    panels: [
      {
        size: "full",
        scene:
          "Dojonun duvarına asılmış sade bir ahşap levha. Üzerinde el yazısıyla üç satır ve altında Ryō'nun imzası için boş bir yer.",
        narration:
          "Kurallarımı yazdım: Zararı önce belirle. Tek işleme sermayenin küçük bir kısmını koy. Kendi kuralını bozarsan o gün işlem yapma.",
        image: p9,
      },
      {
        size: "half",
        scene: "Honma levhaya bakıyor.",
        lines: [{ who: "Honma", text: "Kural, kalabalığın sesini bastıran tek fısıltıdır." }],
      },
    ],
  },
  {
    no: 10,
    title: "Ayna Boşalıyor",
    panels: [
      {
        size: "full",
        scene:
          "Ryō dojodan çıkarken aynaya son kez bakıyor; yansımasında artık gergin değil, sakin bir yüz var.",
        narration:
          "Zihin dojosundan bir tahmin öğrenerek çıkmadım. Tahminlerime güvenmemeyi öğrenerek çıktım.",
      },
      {
        size: "half",
        scene: "Aiko kapıda bekliyor, elinde bir gazete: 'MERKEZ BANKASI YARIN KONUŞUYOR'.",
        lines: [{ who: "Aiko", text: "Zihnini topladıysan, sırada hava durumu var." }],
      },
    ],
  },
];
