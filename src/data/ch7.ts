import type { Page } from "./story-types";
import p1 from "@/assets/ch7/p1.jpg";
import p2 from "@/assets/ch7/p2.jpg";
import p3 from "@/assets/ch7/p3.jpg";
import p4 from "@/assets/ch7/p4.jpg";
import p5 from "@/assets/ch7/p5.jpg";
import p6 from "@/assets/ch7/p6.jpg";
import p7 from "@/assets/ch7/p7.jpg";
import p8 from "@/assets/ch7/p8.jpg";
import p9 from "@/assets/ch7/p9.jpg";
import p10 from "@/assets/ch7/p10.jpg";

export const ch7Pages: Page[] = [
  {
    no: 1,
    title: "Arşiv Odası",
    panels: [
      {
        size: "full",
        scene:
          "Tavana kadar defterlerle dolu, tozlu bir arşiv odası. Tek bir pencereden düşen ışık huzmesinde toz zerreleri. Yaşlı arşivci Genzō merdivenin üstünde bir defter arıyor.",
        narration:
          "Dağdan indim ve bir odaya girdim. İçeride tek bir ekran yoktu. Sadece defterler vardı — ve defterler bağırmıyordu.",
        image: p1,
      },
      {
        size: "half",
        scene: "Ryō kapının eşiğinde duruyor; elinde Kirishima'nın verdiği portföy tablosu.",
        lines: [
          { who: "Ryō", text: "Burada fiyat yok mu?" },
          { who: "Genzō", text: "Fiyat dışarıda bağırır. Değer burada fısıldar." },
        ],
      },
      {
        size: "half",
        scene: "Genzō merdivenden iniyor, tozlu bir defteri masaya bırakıyor.",
        sfx: "tump.",
        lines: [{ who: "Genzō", text: "Otur. Bir şirketi tanımak, bir insanı tanımaya benzer." }],
      },
    ],
  },
  {
    no: 2,
    title: "Üç Defter",
    panels: [
      {
        size: "full",
        scene:
          "Masada yan yana üç kalın defter: 'BİLANÇO', 'GELİR TABLOSU', 'NAKİT AKIŞI'. Genzō her birine sırayla dokunuyor.",
        lines: [
          { who: "Genzō", text: "Birincisi ne sahip olduğunu ve ne borçlu olduğunu söyler." },
          { who: "Genzō", text: "İkincisi bir yılda ne kazandığını." },
          { who: "Genzō", text: "Üçüncüsü ise kasaya gerçekten ne girdiğini." },
        ],
        image: p2,
      },
      {
        size: "half",
        scene: "Ryō defterine üç başlık yazıyor.",
        lines: [{ who: "Ryō", text: "İkisi kazancı anlatıyorsa, neden üçüncüsü de var?", type: "thought" }],
      },
      {
        size: "half",
        scene: "Genzō gözlüğünü düzeltip Ryō'ya bakıyor.",
        lines: [
          { who: "Genzō", text: "Çünkü kâr bir görüştür. Nakit bir gerçektir." },
          { who: "Genzō", text: "Görüş yazılır. Gerçek sayılır." },
        ],
      },
    ],
  },
  {
    no: 3,
    title: "Kasa Konuşur",
    panels: [
      {
        size: "full",
        scene:
          "Genzō bir kasanın kapağını açıyor; içeride madeni paralar ve makbuzlar. Arkadaki duvarda kâğıt üstünde büyük rakamlar asılı.",
        narration:
          "Bir tüccar bana yıl boyunca kazandığı parayı gösterdi. Sonra Genzō kasayı açtı. İkisi aynı sayı değildi.",
        image: p3,
      },
      {
        size: "half",
        scene: "Genzō bir makbuz destesini havaya kaldırıyor.",
        lines: [
          { who: "Genzō", text: "Malı verdin, parayı almadın. Defterde kâr yazar, kasada boşluk durur." },
          { who: "Genzō", text: "Buna alacak denir. Büyüyen alacak, iyi haber değildir." },
        ],
      },
      {
        size: "half",
        scene: "Ryō defterine yazıyor: 'serbest nakit akışı = işletmeden gelen nakit − yatırım harcaması'.",
        lines: [{ who: "Ryō", text: "Yani şirketin cebinde gerçekten kalan para.", type: "thought" }],
      },
    ],
  },
  {
    no: 4,
    title: "Borcun İki Yüzü",
    panels: [
      {
        size: "full",
        scene:
          "Genzō terazinin bir kefesine ağır bir taş, diğerine defterler koyuyor. Arka planda bir tüccarın imzaladığı borç senedi.",
        lines: [
          { who: "Genzō", text: "Borç iyi günlerde kürektir; daha hızlı gidersin." },
          { who: "Genzō", text: "Kötü günlerde çapadır; olduğun yerde tutar." },
        ],
        image: p4,
      },
      {
        size: "half",
        scene: "Ryō iki oranı yazıyor: 'Net Borç / FAVÖK' ve 'Faiz Karşılama'.",
        lines: [{ who: "Ryō", text: "Borcun büyüklüğü değil, taşınabilirliği önemli demek.", type: "thought" }],
      },
      {
        size: "half",
        scene: "Aiko kapıdan giriyor, elinde iki bardak çay.",
        lines: [
          { who: "Aiko", text: "Bir şirket kârsız yıllarca yaşar. Nakitsiz bir çeyrek bile yaşayamaz." },
        ],
      },
    ],
  },
  {
    no: 5,
    title: "Marj",
    panels: [
      {
        size: "full",
        scene:
          "Genzō iki dükkânın defterini yan yana koyuyor: biri çok satıyor az kazanıyor, diğeri az satıyor çok kazanıyor.",
        narration: "İki dükkân aynı caddede. Biri gün boyu kalabalık, diğeri sessiz. Yıl sonunda sessiz olan kazandı.",
        image: p5,
      },
      {
        size: "half",
        scene: "Genzō tebeşirle yazıyor: 'brüt marj', 'faaliyet marjı', 'net marj'.",
        lines: [
          { who: "Genzō", text: "Ciro gururdur, marj sağlıktır." },
          { who: "Genzō", text: "Marjı yıllar içinde izle. Tek yılın marjı hikâye anlatmaz." },
        ],
      },
      {
        size: "half",
        scene: "Ryō iki eğri çiziyor: biri düz yükselen, diğeri inişli çıkışlı.",
        lines: [{ who: "Ryō", text: "İstikrar da bir bilgi.", type: "thought" }],
      },
    ],
  },
  {
    no: 6,
    title: "F/K'nın Tuzağı",
    panels: [
      {
        size: "full",
        scene:
          "Genzō iki şirket kartını masaya koyuyor: birinde büyük bir '8', diğerinde '35' yazıyor. Arkalarında iki farklı büyüme eğrisi.",
        lines: [
          { who: "Genzō", text: "Sekiz mi ucuz, otuz beş mi pahalı? Cevap: bilmiyoruz." },
          { who: "Genzō", text: "Biri küçülüyorsa sekiz pahalıdır. Diğeri hızla büyüyorsa otuz beş ucuz olabilir." },
        ],
        image: p6,
      },
      {
        size: "half",
        scene: "Ryō defterine yazıyor: 'F/K = fiyat / hisse başına kâr'.",
        lines: [{ who: "Ryō", text: "Yani F/K bir cevap değil, bir soru.", type: "thought" }],
      },
      {
        size: "half",
        scene: "Genzō başparmağıyla defterin kenarına vuruyor.",
        lines: [
          { who: "Genzō", text: "Bir oranı tek başına okuma. Sektörle, geçmişiyle ve borcuyla birlikte oku." },
        ],
      },
    ],
  },
  {
    no: 7,
    title: "Fiyat ve Değer",
    panels: [
      {
        size: "full",
        scene:
          "Büyük bir terazi: bir kefede 'FİYAT' yazılı etiketli bir para kesesi, diğerinde 'DEĞER' yazılı bir defter. Terazi sallanıyor.",
        narration:
          "Fiyat her gün değişir. Değer nadiren. Aradaki mesafe, sabırlı olanın tek fırsatıdır.",
        image: p7,
      },
      {
        size: "half",
        scene: "Genzō terazinin ibresini parmağıyla durduruyor.",
        lines: [
          { who: "Genzō", text: "Piyasa kısa vadede oy sandığıdır, uzun vadede tartıdır." },
          { who: "Genzō", text: "Oy heyecanlanır. Tartı heyecanlanmaz." },
        ],
      },
      {
        size: "half",
        scene: "Ryō 'güvenlik payı' yazıp altını çiziyor.",
        lines: [{ who: "Ryō", text: "Hesabım yanlışsa bile beni koruyacak aralık.", type: "thought" }],
      },
    ],
  },
  {
    no: 8,
    title: "Dipnotlar",
    panels: [
      {
        size: "full",
        scene:
          "Genzō kalın bir raporun son sayfalarını açıyor; minik puntolu dipnotlar. Büyüteçle bir satırı gösteriyor.",
        lines: [
          { who: "Genzō", text: "Şirketin söylemek istediği şeyler öndedir. Söylemek zorunda olduğu şeyler arkadadır." },
          { who: "Genzō", text: "Raporu sondan başlayarak oku." },
        ],
        image: p8,
      },
      {
        size: "half",
        scene: "Aiko bir satırı işaret ediyor: 'tek seferlik gelir'.",
        lines: [
          { who: "Aiko", text: "Bu yılın kârının yarısı bir arsa satışından. Gelecek yıl o arsa yok." },
        ],
      },
      {
        size: "half",
        scene: "Ryō not alıyor: 'sürdürülebilir kâr mı, tek seferlik mi?'",
        lines: [{ who: "Ryō", text: "Tekrarlanmayan şey, plan yapılacak şey değil.", type: "thought" }],
      },
    ],
  },
  {
    no: 9,
    title: "Kendi Defteri",
    panels: [
      {
        size: "full",
        scene:
          "Ryō boş bir deftere kendi kontrol listesini yazıyor; Genzō arkasında sessizce izliyor. Masada lamba ışığı.",
        narration:
          "Genzō bana hisse önermedi. Bana bir liste yazdırdı. Liste, heyecanın giremediği tek kapıdır.",
        lines: [
          { who: "Ryō", text: "Bir: nakit akışı pozitif mi?" },
          { who: "Ryō", text: "İki: borç taşınabilir mi?" },
          { who: "Ryō", text: "Üç: marj istikrarlı mı? Dört: fiyat, değerin altında mı?" },
        ],
        image: p9,
      },
      {
        size: "half",
        scene: "Genzō listeye tek bir satır ekliyor.",
        lines: [{ who: "Genzō", text: "Beş: yanılırsam ne kaybederim?" },
          { who: "Ryō", text: "Bu soru her bölümde karşıma çıkıyor." }],
      },
      {
        size: "half",
        scene: "Genzō gülümsüyor; ilk kez.",
        lines: [{ who: "Genzō", text: "Çünkü tek gerçek soru o." }],
      },
    ],
  },
  {
    no: 10,
    title: "Defterin Teslimi",
    panels: [
      {
        size: "full",
        scene:
          "Genzō eski bir defteri iki eliyle Ryō'ya uzatıyor. Arşivin kapısından akşam ışığı giriyor.",
        narration:
          "Arşivden bir tüyo ile çıkmadım. Bir okuma biçimiyle çıktım. Aradaki fark, bir akşamın ile bir ömrün farkı.",
        lines: [{ who: "Genzō", text: "Bu defterde hisse yok. Sadece sorular var." }],
        image: p10,
      },
      {
        size: "half",
        scene: "Ryō defteri çantasına koyuyor; dışarıda Osaka'ya giden tren.",
        lines: [
          { who: "Aiko", text: "Sırada Osaka var. Orada insanlar kendi paralarıyla değil, ödünç aldıkları güçle iş yapıyor." },
        ],
      },
      {
        size: "half",
        scene: "Trenin camından geçen manzara; Ryō defterin ilk sayfasındaki yazıyı okuyor: 'Kâr bir görüş, nakit bir gerçektir.'",
        narration: "Ödünç alınan güç, insanın en hızlı öğrendiği ve en pahalıya ödediği derstir.",
        sfx: "…",
      },
    ],
  },
];
