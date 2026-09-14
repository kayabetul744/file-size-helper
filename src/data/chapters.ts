import ch1 from "@/assets/ch1.jpg";
import ch2 from "@/assets/ch2.jpg";
import ch3 from "@/assets/ch3.jpg";
import p1a from "@/assets/ch1/p1a.jpg";
import p1b from "@/assets/ch1/p1b.jpg";
import p1c from "@/assets/ch1/p1c.jpg";
import p2a from "@/assets/ch1/p2a.jpg";
import p2b from "@/assets/ch1/p2b.jpg";
import p2c from "@/assets/ch1/p2c.jpg";
import p3a from "@/assets/ch1/p3a.jpg";
import p3b from "@/assets/ch1/p3b.jpg";
import p3c from "@/assets/ch1/p3c.jpg";
import p4a from "@/assets/ch1/p4a.jpg";
import p4b from "@/assets/ch1/p4b.jpg";
import p4c from "@/assets/ch1/p4c.jpg";
import p5a from "@/assets/ch1/p5a.jpg";
import p5b from "@/assets/ch1/p5b.jpg";
import p5c from "@/assets/ch1/p5c.jpg";
import p6a from "@/assets/ch1/p6a.jpg";
import p6b from "@/assets/ch1/p6b.jpg";
import p6c from "@/assets/ch1/p6c.jpg";
import p7a from "@/assets/ch1/p7a.jpg";
import p7b from "@/assets/ch1/p7b.jpg";
import p7c from "@/assets/ch1/p7c.jpg";
import p8a from "@/assets/ch1/p8a.jpg";
import p8b from "@/assets/ch1/p8b.jpg";
import p8c from "@/assets/ch1/p8c.jpg";
import p9a from "@/assets/ch1/p9a.jpg";
import p9b from "@/assets/ch1/p9b.jpg";
import p9c from "@/assets/ch1/p9c.jpg";
import p10a from "@/assets/ch1/p10a.jpg";
import p10b from "@/assets/ch1/p10b.jpg";
import p10c from "@/assets/ch1/p10c.jpg";
import c2p1a from "@/assets/ch2/p1a.jpg";
import c2p1b from "@/assets/ch2/p1b.jpg";
import c2p2a from "@/assets/ch2/p2a.jpg";
import c2p2b from "@/assets/ch2/p2b.jpg";
import c2p3a from "@/assets/ch2/p3a.jpg";
import c2p3b from "@/assets/ch2/p3b.jpg";
import c2p4a from "@/assets/ch2/p4a.jpg";
import c2p4b from "@/assets/ch2/p4b.jpg";
import c2p5a from "@/assets/ch2/p5a.jpg";
import c2p5b from "@/assets/ch2/p5b.jpg";
import c3p1a from "@/assets/ch3/p1a.jpg";
import c3p1b from "@/assets/ch3/p1b.jpg";
import c3p2a from "@/assets/ch3/p2a.jpg";
import c3p3a from "@/assets/ch3/p3a.jpg";
import c3p3b from "@/assets/ch3/p3b.jpg";
import c3p4a from "@/assets/ch3/p4a.jpg";
import c3p5a from "@/assets/ch3/p5a.jpg";
import c3p6a from "@/assets/ch3/p6a.jpg";
import c3p7a from "@/assets/ch3/p7a.jpg";
import c3p8a from "@/assets/ch3/p8a.jpg";
import ch4 from "@/assets/ch4.jpg";
import ch5 from "@/assets/ch5.jpg";
import ch6 from "@/assets/ch6.jpg";
import c4p1 from "@/assets/ch4/p1.jpg";
import c4p2 from "@/assets/ch4/p2.jpg";
import c4p3 from "@/assets/ch4/p3.jpg";
import c4p4 from "@/assets/ch4/p4.jpg";
import c4p5 from "@/assets/ch4/p5.jpg";
import c4p6 from "@/assets/ch4/p6.jpg";
import c4p7 from "@/assets/ch4/p7.jpg";
import c4p8 from "@/assets/ch4/p8.jpg";
import c4p9 from "@/assets/ch4/p9.jpg";
import c4p10 from "@/assets/ch4/p10.jpg";
import c5p1 from "@/assets/ch5/p1.jpg";
import c5p2 from "@/assets/ch5/p2.jpg";
import c5p3 from "@/assets/ch5/p3.jpg";
import c5p4 from "@/assets/ch5/p4.jpg";
import c5p5 from "@/assets/ch5/p5.jpg";
import c5p6 from "@/assets/ch5/p6.jpg";
import c5p7 from "@/assets/ch5/p7.jpg";
import c5p8 from "@/assets/ch5/p8.jpg";
import c5p9 from "@/assets/ch5/p9.jpg";
import c5p10 from "@/assets/ch5/p10.jpg";
import c6p1 from "@/assets/ch6/p1.jpg";
import c6p2 from "@/assets/ch6/p2.jpg";
import c6p3 from "@/assets/ch6/p3.jpg";
import c6p4 from "@/assets/ch6/p4.jpg";
import c6p5 from "@/assets/ch6/p5.jpg";
import c6p6 from "@/assets/ch6/p6.jpg";
import c6p7 from "@/assets/ch6/p7.jpg";
import c6p8 from "@/assets/ch6/p8.jpg";
import c6p9 from "@/assets/ch6/p9.jpg";
import c6p10 from "@/assets/ch6/p10.jpg";

import type { Panel, Page } from "./story-types";
import { ch7Pages } from "./ch7";
import { ch8Pages } from "./ch8";
import { ch9Pages } from "./ch9";
import { ch10Pages } from "./ch10";
import { ch11Pages } from "./ch11";
import { ch12Pages } from "./ch12";
import ch7cover from "@/assets/ch7.jpg";
import ch8cover from "@/assets/ch8.jpg";
import ch9cover from "@/assets/ch9.jpg";
import ch10cover from "@/assets/ch10.jpg";
import ch11cover from "@/assets/ch11.jpg";
import ch12cover from "@/assets/ch12.jpg";

export type { Panel, Page };


export type Chapter = {
  no: number;
  slug: string;
  title: string;
  kanji: string;
  subject: string;
  logline: string;
  cast: string[];
  lesson: string[];
  cover?: string;
  pages?: Page[];
};

export const chapters: Chapter[] = [
  {
    no: 1,
    slug: "borsanin-ilk-dersi",
    title: "Borsanın İlk Dersi",
    kanji: "初陣",
    subject: "Piyasa nedir, fiyat nasıl oluşur",
    logline:
      "Ryō, babasının borcunu kapatmak için Tokyo Borsası'nın alt katına iner. İlk emri, ilk zararı ve ilk dersi aynı gün gelir.",
    cast: ["Ryō Sakamoto", "Ustabaşı Tōdō", "Aiko Mizuhara"],
    lesson: [
      "Fiyat bir gerçek değil, bir uzlaşmadır: son alıcı ile son satıcının anlaştığı sayıdır.",
      "Emir defteri (order book) piyasanın kalp atışıdır; likidite yoksa fiyat yalan söyler.",
      "Piyasa emri hız satın alır, limit emri fiyat satın alır. İkisini aynı anda alamazsın.",
      "İlk hedefin kâr değil, hayatta kalmaktır.",
    ],
    cover: ch1,
    pages: [
      {
        no: 1,
        title: "Açılışa Sekiz Dakika",
        panels: [
          { size: "full", scene: "Yağmurlu Kabutochō sokağı. Ryō, babasının bol gelen takım elbisesiyle borsa binasının önünde duruyor; camlarda kırmızı sayılar akıyor.", narration: "Tokyo, sabah 08:52. Babamın bana bıraktığı iki şey vardı: üzerime büyük gelen bu takım elbise ve kırk milyon yenlik bir borç. Üçüncü bir şey daha bıraktığını o sabah bilmiyordum.", image: p1a },
          { size: "half", scene: "Yakın plan: telefon ekranındaki 'AL' butonunun üzerinde titreyen bir parmak.", narration: "Hesabımda kalan her şey: 180.000 yen.", lines: [{ who: "Ryō", text: "Bir emir. Sadece bir emir her şeyi değiştirebilir.", type: "thought" }], image: p1b },
          { size: "half", scene: "Arkadan gelen ağır bir gölge: Ustabaşı Tōdō, ağzında sönmüş sigara, elinde yıpranmış bir defter.", lines: [{ who: "Tōdō", text: "Değiştirir. Genelde aşağı yönde." }, { who: "Tōdō", text: "Bana bak evlat. Şu ekrandaki sayı nedir?" }, { who: "Ryō", text: "Hissenin... değeri." }, { who: "Tōdō", text: "Yanlış. O sayı bir değer değil. Bir uzlaşma.", type: "shout" }], image: p1c },
        ],
      },
      {
        no: 2,
        title: "Merdiven",
        panels: [
          { size: "full", scene: "Tōdō, beton duvara tebeşirle iki sütun çiziyor: solda alıcılar, sağda satıcılar. Basamak basamak bir merdiven.", narration: "Tōdō otuz yıldır bu binada çalışıyordu. Kimse ona 'yatırımcı' demezdi; o kendine sadece 'defter tutan' derdi.", lines: [{ who: "Tōdō", text: "Fiyat gökten inmez. Şurada duran son alıcıyla şurada duran son satıcı el sıkıştığında doğar." }, { who: "Tōdō", text: "Bu merdivenin adı emir defteri. Piyasanın kalp atışı burada." }], image: p2a },
          { size: "half", scene: "Salonun kalabalığı: yüzlerce insan, telefonlar, bağıran brokerlar, havada uçuşan kâğıtlar.", lines: [{ who: "Tōdō", text: "Basamakların üstü kalın mı? Öyleyse ucuz satarsın, ucuz alırsın. Buna likidite denir." }, { who: "Tōdō", text: "Basamaklar inceyse fiyat yalan söyler. Bir tek emir onu on kat oynatır." }], sfx: "ZAAA", image: p2b },
          { size: "half", scene: "Ryō'nun gözlerine yansıyan sayılar; gözbebeklerinde akan rakamlar.", lines: [{ who: "Ryō", text: "Yani ben fiyatı almıyorum... birinin fiyatını kabul ediyorum.", type: "thought" }, { who: "Tōdō", text: "İşte. Şimdi bir şey öğrendin. Kaybetmeye hazırsın." }], image: p2c },
        ],
      },
      {
        no: 3,
        title: "Zil",
        panels: [
          { size: "full", scene: "Açılış zili. Salonun tavanındaki eski pirinç zil titriyor; ışık patlıyor.", sfx: "DAAANG!", narration: "09:00. Ve dünya yön değiştirdi.", image: p3a },
          { size: "wide", scene: "Ekran duvarı: onlarca monitör aynı anda yeşilden kırmızıya dönüyor, sayılar patlıyor.", lines: [{ who: "Broker", text: "Kokuyō Ağır Sanayi! Alış tarafı boşalıyor!", type: "shout" }, { who: "Broker", text: "Kim tutuyor bu tarafı?! Kimse yok!", type: "shout" }], sfx: "GOOO", image: p3b },
          { size: "wide", scene: "Ryō klavyeye vuruyor; ekranda 'piyasa emri' seçeneği yanıp sönüyor.", lines: [{ who: "Ryō", text: "Şimdi. Herkes alıyorsa ben de alacağım!", type: "shout" }, { who: "Tōdō", text: "Evlat — hangi emri veriyorsun?", type: "shout" }, { who: "Ryō", text: "Piyasa! En hızlısı bu!" }, { who: "Tōdō", text: "Hız satın aldın. Fiyatı sattın." }], sfx: "TAK TAK TAK", image: p3c },
        ],
      },
      {
        no: 4,
        title: "Basamaklar Kırılıyor",
        panels: [
          { size: "full", scene: "Sürreal görüntü: Ryō'nun emri dev bir merdivenden aşağı yuvarlanıyor, basamaklar tek tek kırılıyor.", narration: "Piyasa emri şunu der: 'Fiyatı umursamıyorum, doldur.' Piyasa bu cümleyi duyduğunda kibarlık yapmaz.", sfx: "KRAK", image: p4a },
          { size: "half", scene: "Ryō'nun dehşet dolu yüzü; ekranda gerçekleşen fiyat, gördüğü fiyatın çok üstünde.", lines: [{ who: "Ryō", text: "1.240'tan almalıydım... 1.310'dan doldu?!", type: "shout" }, { who: "Tōdō", text: "Aradaki farkın adı kayma. Aceleciliğin faturası." }], sfx: "DOKUN", image: p4b },
          { size: "half", scene: "Salonun diğer ucunda, kalabalığın içinde sakin duran genç bir kadın: Aiko Mizuhara. Elinde küçük bir defter, dudağında yarım bir gülümseme.", lines: [{ who: "Aiko", text: "Yeni biri. Her sabah bir tane çıkıyor.", type: "thought" }, { who: "Aiko", text: "Ama bu, kaybettiği anda ekrana değil deftere baktı." }], image: p4c },
        ],
      },
      {
        no: 5,
        title: "İlk Kayıp",
        panels: [
          { size: "full", scene: "Düşen bir grafiğin camına yansıyan Ryō'nun yüzü; sayılar yüzünün üzerinden aşağı akıyor.", narration: "Otuz dakika. Bir emrin bana babamın borcunun bir gecelik faizinden fazlasına mal olması için gereken süre.", sfx: "SU—", image: p5a },
          { size: "half", scene: "Ryō dizlerinin üzerine çöküyor; etrafında ayakta duran insanların bacakları.", lines: [{ who: "Ryō", text: "Ne yaptım ben...", type: "thought" }, { who: "Ryō", text: "Doğru şirketi seçtim! Doğru yönü seçtim! Nasıl kaybederim?!", type: "shout" }], image: p5b },
          { size: "half", scene: "Kapanışta boşalan salon; devrilmiş sandalyeler, yerde kâğıtlar, tek bir figür.", narration: "15:00. Salon boşaldığında öğrendim: piyasa yönü bildiğin için para vermez. Girdiğin fiyat, çıktığın fiyat ve dayanma süren için verir.", image: p5c },
        ],
      },
      {
        no: 6,
        title: "Defterdeki Kız",
        panels: [
          { size: "full", scene: "Aiko boş salonun ortasında Ryō'nun yanına oturmuş, defterindeki merdiveni gösteriyor.", lines: [{ who: "Aiko", text: "Adım Aiko. Ve sen bugün 68.000 yen ödedin." }, { who: "Ryō", text: "Nereden biliyorsun?" }, { who: "Aiko", text: "Çünkü defterin ince tarafından girdin. Alış basamaklarında toplam 400 lot vardı, sen 900 lot istedin. Kalanı yukarıdan topladın." }], image: p6a },
          { size: "half", scene: "Defterin yakın planı: fiyat seviyeleri ve her seviyedeki miktarlar el yazısıyla yazılmış.", lines: [{ who: "Aiko", text: "Limit emri fiyat satın alır: 'şu fiyattan ya da daha iyisinden.'" }, { who: "Aiko", text: "Piyasa emri hız satın alır. İkisini aynı anda alamazsın." }, { who: "Ryō", text: "Ya emrim hiç dolmazsa?" }, { who: "Aiko", text: "O zaman kaybetmezsin de. Kaçırmak, zarar etmekten ucuzdur." }], image: p6b },
          { size: "half", scene: "İkisi camdan Tokyo'nun akşam siluetine bakıyor; siluetler karanlıkta.", lines: [{ who: "Aiko", text: "Yarın gelecek misin?" }, { who: "Ryō", text: "Borcum var." }, { who: "Aiko", text: "Yanlış cevap. Borç için gelenler burada en hızlı tükenenler oluyor." }], image: p6c },
        ],
      },
      {
        no: 7,
        title: "Gece Nöbeti",
        panels: [
          { size: "full", scene: "Gece yarısı, tek bir masa lambası. Ryō dizüstü bilgisayarın karşısında, önünde el yazısıyla dolu kâğıtlar.", narration: "O gece uyumadım. Grafik izlemedim. Sadece tek bir hissenin emir defterini altı saat boyunca izledim. Nefes alışını öğrendim.", image: p7a },
          { size: "half", scene: "Sakin, kontrollü bir el, klavyeye tek tek bir limit emri yazıyor.", lines: [{ who: "Ryō", text: "1.238. Bir yen bile yukarısı yok.", type: "thought" }, { who: "Ryō", text: "Dolmazsa dolmasın. Bugün beni piyasa değil, ben seçeceğim.", type: "thought" }], sfx: "tık.", image: p7b },
          { size: "half", scene: "Sisin içinden yükselen dev mum grafiği monolitleri; aralarında yürüyen küçük bir figür.", narration: "Bir hafta boyunca hiçbir şey almadım. Sadece baktım. Piyasa, izlemeyi öğrenene kadar sana hiçbir şey anlatmıyor.", image: p7c },
        ],
      },
      {
        no: 8,
        title: "İkinci Deneme",
        panels: [
          { size: "full", scene: "Ryō sabah sokakta kararlı adımlarla yürüyor; arkasında binalara yansıyan grafik gölgeleri.", narration: "Sekiz gün sonra. Aynı kapı. Aynı takım elbise. Farklı bir çocuk.", image: p8a },
          { size: "half", scene: "Masasında odaklanmış Ryō; ekranda üç seviyeye bölünmüş emirler.", lines: [{ who: "Ryō", text: "Tek seferde değil. Üçe böl: 1.238, 1.232, 1.225.", type: "thought" }, { who: "Aiko", text: "Fena değil. Kendine yanılma payı bırakıyorsun." }, { who: "Tōdō", text: "Hayatta kalmanın adı budur evlat." }], image: p8b },
          { size: "half", scene: "Ekranın yakın planı: emirlerden biri sessizce dolmuş.", sfx: "pıt.", lines: [{ who: "Ryō", text: "Doldu. Benim fiyatımdan.", type: "thought" }], image: p8c },
        ],
      },
      {
        no: 9,
        title: "Küçük Kazanç",
        panels: [
          { size: "wide", scene: "Ekranda mütevazı bir yükseliş; klavyenin yanında sessizce kenetlenmiş bir el.", narration: "Kâr 9.400 yendi. Kaybettiğimin yedide biri. Ama ilk defa neden kazandığımı biliyordum.", image: p9a },
          { size: "half", scene: "Tōdō'nun yüzünün yakın planı: derin kırışıklar ve neredeyse görünmeyen bir gülümseme.", lines: [{ who: "Tōdō", text: "Şimdi sat." }, { who: "Ryō", text: "Daha çıkabilir." }, { who: "Tōdō", text: "Çıkabilir. Ama planın 'çıkabilir' demiyordu." }], image: p9b },
          { size: "half", scene: "Ryō pozisyonu sakince kapatıyor; masada boş kahve fincanları.", lines: [{ who: "Ryō", text: "Kapattım." }, { who: "Aiko", text: "İşte asıl zor kısmı buydu. Kazanırken durmak." }], image: p9c },
        ],
      },
      {
        no: 10,
        title: "Üç Satır",
        panels: [
          { size: "full", scene: "Tōdō'nun yaşlı eli, yıpranmış deftere fırçayla üç satır yazıyor; yanında mürekkep şişesi.", narration: "Tōdō defterini bana verdi. İçinde otuz yıllık işlem yoktu. Sadece üç satır vardı.", lines: [{ who: "Tōdō", text: "Bir: fiyatı sen kabul edersin, piyasa sana dayatmaz." }, { who: "Tōdō", text: "İki: her emirden önce nerede yanıldığını yaz." }, { who: "Tōdō", text: "Üç: ilk hedefin kâr değil, yarın da burada olmaktır." }], image: p10a },
          { size: "half", scene: "Yağmurlu camın önünde duran Ryō; yansımasında arkasında duran yaşlı bir siluet.", narration: "Babam da bu salonda çalışmıştı. Borcu bu yüzden vardı. Ve Tōdō bunu ilk günden biliyordu.", lines: [{ who: "Ryō", text: "Onu tanıyordun, değil mi?", type: "thought" }], image: p10b },
          { size: "half", scene: "Çatıdan görünen dev Tokyo silueti; kenarda küçük, yalnız bir figür.", narration: "Piyasa beni yenmemişti. Ben kendimi yenmiştim. Ve çatıda birinin beni izlediğini hâlâ fark etmemiştim.", sfx: "…", image: p10c },
        ],
      },
    ],
  },
  {
    no: 2,
    slug: "ayi-mevsiminin-golgesi",
    title: "Ayı Mevsiminin Gölgesi",
    kanji: "熊影",
    subject: "Trend, düşüş piyasası ve açığa satış",
    logline:
      "Kokuyō endeksi tek günde %18 düşerken Kage-Nuke topluluğu sahneye çıkar. Ryō, düşerken de para kazanılabileceğini öğrenir — ve bunun bedelini.",
    cast: ["Kage-Nuke Topluluğu", "Ryō", "Kenji Arakawa", "Aiko"],
    lesson: [
      "Trend, fiyatın yönü değil; alıcı ve satıcı arasındaki güç dengesinin süregelen hâlidir.",
      "Açığa satışta zarar teorik olarak sınırsızdır: yukarı yol bitmez.",
      "Panik satışları hacimle gelir; hacimsiz düşüş çoğu zaman tuzaktır.",
      "Düşmekte olan bir fiyatı yakalamaya çalışmak cesaret değil, ölçüsüzlüktür.",
      "Kalabalığın en gürültülü olduğu an, çoğu zaman yönün en zayıf olduğu andır.",
    ],
    cover: ch2,
    pages: [
      {
        no: 1,
        title: "Kara Perşembe",
        panels: [
          { size: "full", scene: "Gece yağmuru. Gökdelenin yüzündeki dev ekranda Kokuyō endeksi ▼-18,73%. Çatıda dört maskeli siluet.", narration: "Perşembe. Şehrin bütün ekranları aynı rengi gösteriyordu: kırmızı. Ve o gece ilk kez birilerinin bu renkten beslendiğini gördüm.", image: c2p1a, sfx: "ZAAAA— (yağmur)" },
          { size: "half", scene: "Topluluğun lideri, çatı kiremitlerinin üzerinde çömelmiş, aşağıdaki paniği izliyor. Maskesinden görünen gözler soğuk.", lines: [{ who: "Kage-Nuke Lideri", text: "Kalabalık koşuyor. Biz oturuyoruz. Fark burada." }], image: c2p1b },
          { size: "half", scene: "Aşağıda kaldırımda koşuşan takım elbiseliler, telefonlarına bağırıyor; kimisinin evrakları yağmurda dağılıyor.", sfx: "GŌ! GŌ!", lines: [{ who: "Broker", text: "Sat! Hepsini sat! Alıcı kalmadı!", type: "shout" }, { who: "Broker", text: "Fiyat yok! Fiyat yok bende!", type: "shout" }] },
        ],
      },
      {
        no: 2,
        title: "Trend Denen Şey",
        panels: [
          { size: "full", scene: "Ryō ıslak ceketiyle borsanın önünde donmuş; camda akan kırmızı sayılara bakıyor.", narration: "Öğrendiğim ilk hatalı cümle şuydu: 'Ne kadar düşerse o kadar ucuzdur.' O gece piyasa bu cümleyi cebimden yırtıp çöpe attı.", image: c2p2a },
          { size: "half", scene: "Aiko yanına yaklaşıyor, elinde kapalı bir defter.", lines: [{ who: "Aiko", text: "Trend fiyatın yönü değil." }, { who: "Ryō", text: "Ne peki?" }, { who: "Aiko", text: "Alıcıyla satıcı arasındaki güç dengesinin, uzayıp giden hâli. Yön sadece görüntü." }] },
          { size: "half", scene: "Aiko defteri açıyor: üç ay boyunca çizilmiş iniş serisi, her tepe bir öncekinden alçak.", lines: [{ who: "Aiko", text: "Bak: her tepe bir öncekinden alçak, her dip bir öncekinden derin." }, { who: "Aiko", text: "Bu bir çizgi değil, bir alışkanlık. Piyasa alışkanlıklarını kolay bırakmaz." }] },
        ],
      },
      {
        no: 3,
        title: "Ödünç Alınan Hisse",
        panels: [
          { size: "wide", scene: "Kenji, Ryō'yu arka sokakta durduruyor. Elinde ıslak bir emir kâğıdı, üzerinde 'AÇIĞA SATIŞ' damgası.", lines: [{ who: "Kenji", text: "Sende olmayan bir şeyi satabilir misin?" }, { who: "Ryō", text: "Bu hırsızlık olur." }, { who: "Kenji", text: "Ödünç alırsan olmaz. Sat, düşünce ucuzdan geri al, sahibine iade et. Aradaki fark senin." }], image: c2p2b },
          { size: "half", scene: "Ryō'nun gözünde parlayan tehlikeli bir kıvılcım; arkasında ayı gölgesi büyüyor.", lines: [{ who: "Ryō", text: "Yani düşerken de kazanılıyor...", type: "thought" }] },
          { size: "half", scene: "Kenji sigarasını söndürüyor, yüzü yarı karanlıkta.", lines: [{ who: "Kenji", text: "Kazanılıyor. Ama dinle: aldığın hisse en fazla sıfıra düşer — zararın sınırlı." }, { who: "Kenji", text: "Sattığın hisse ise sonsuza yükselebilir. Zararının tavanı yok." }] },
        ],
      },
      {
        no: 4,
        title: "Sonsuz Yol",
        panels: [
          { size: "full", scene: "Sayfa boyu: yukarı doğru sonsuza uzanan mum grafiği, altında minicik kalmış Ryō silueti.", narration: "O gece kafamda bir cümle çınladı: 'Aşağı yol biter, yukarı yol bitmez.' Bunu unutan herkes bir sabah defterlerden silindi.", image: c2p3a },
          { size: "half", scene: "Ryō masasında hesap makinesiyle senaryolar yazıyor: -%20, -%50, +%200, +%500.", lines: [{ who: "Ryō", text: "Sıfıra kadar düşerse 100 kazanırım. İki katına çıkarsa 100 kaybederim. Üç katı olursa 200 kaybederim...", type: "thought" }] },
          { size: "half", scene: "Ryō defterine kırmızı kalemle iri harflerle: 'ASİMETRİ VAR.'", lines: [{ who: "Ryō", text: "Kâr sınırlı, zarar sınırsız. Bu oyunun tavanı ile tabanı aynı değil.", type: "thought" }], sfx: "KAT." },
        ],
      },
      {
        no: 5,
        title: "Hacimsiz Tuzak",
        panels: [
          { size: "wide", scene: "Sabah. Endeks yeniden düşüyor ama alt paneldeki hacim çubukları cılız. Aiko ekranı tırnağıyla tıklatıyor.", lines: [{ who: "Aiko", text: "Bak. Fiyat düşüyor ama kimse satmıyor." }, { who: "Ryō", text: "Nasıl olur?" }, { who: "Aiko", text: "Çünkü bu düşüş bir hikâye değil, bir sahne. Hacim yoksa oyuncular sahnede değildir." }], image: c2p3b },
          { size: "half", scene: "Aiko iki grafiği yan yana koyuyor: solda hacimli düşüş, sağda hacimsiz düşüş.", lines: [{ who: "Aiko", text: "Hacimli düşüş: gerçek satış. İnsanlar mal çıkarıyor." }, { who: "Aiko", text: "Hacimsiz düşüş: kimse alıcı olmadığı için fiyat kendi ağırlığından kayıyor. Bir itiş yeter, geri döner." }] },
          { size: "half", scene: "Ryō ekrana dikkatle bakıyor; parmakları klavyenin üzerinde hareketsiz.", lines: [{ who: "Ryō", text: "O zaman bu bir tuzak. Ve ben tam ortasına girecektim.", type: "thought" }, { who: "Aiko", text: "Ve girenlerin çoğu bir daha çıkamıyor." }] },
        ],
      },
      {
        no: 6,
        title: "İlk Açık Pozisyon",
        panels: [
          { size: "full", scene: "Ryō, doğru okuduğu bir trendin ortasında, ilk açığa satış emrini giriyor. Ekranda küçük bir 'SHORT' etiketi yanıyor.", narration: "İlk açığa satış emrimi yavaş verdim. Kâğıda önce nerede yanılmış olacağımı yazdım: 'Direncin üstüne kapanış = ben yanıldım.'", image: c2p4b },
          { size: "half", scene: "Ryō'nun defteri: 'Giriş 1.410 · Stop 1.462 · Hedef 1.290 · Risk %1'", lines: [{ who: "Ryō", text: "Yanıldığım noktayı önceden söylersem, piyasa bana yalan söyleyemez.", type: "thought" }] },
          { size: "half", scene: "Tōdō uzaktan bakıyor; başını hafifçe onaylayarak sallıyor, ama gözlerinde tedirginlik var.", lines: [{ who: "Tōdō", text: "İlk açığa satışın. İyi bir öğretmen bulmuşsun." }, { who: "Tōdō", text: "Ama unutma evlat: ödünç sattığın her hisse, birinin kütüphanesinden çıkmış bir kitaptır. Bir gün geri istenir." }] },
        ],
      },
      {
        no: 7,
        title: "Sıkışma Başlıyor",
        panels: [
          { size: "full", scene: "Kage-Nuke topluluğu sessizce pozisyonlarını kapatıyor. Ekranda beklenmedik bir alım dalgası; dev bir yeşil mum patlıyor.", sfx: "VŪŞ!", narration: "Yön değiştiğinde ilk hissedenler zaten çıkmış olanlardır. Ekrana bakan biz değiliz — biz sadece kalanlarız.", image: c2p4a },
          { size: "half", scene: "Ryō'nun ekranındaki 'SHORT' pozisyonu yeşilden kırmızıya dönüyor; kâr, hızla zarara geçiyor.", sfx: "PIP! PIP!", lines: [{ who: "Ryō", text: "Nereden çıktı bu alım?!", type: "shout" }] },
          { size: "half", scene: "Aiko soğukkanlı: telefonda kısa bir konuşma yapıp kapatıyor.", lines: [{ who: "Aiko", text: "Kısa pozisyonu olan herkes şu an aynı düğmeye basıyor: 'GERİ AL'." }, { who: "Aiko", text: "Bu düğmenin adı sıkışma. Ve o düğmeye ilk basanlar bugün en pahalıya basacak." }] },
        ],
      },
      {
        no: 8,
        title: "Kırk Yedi İsim",
        panels: [
          { size: "full", scene: "Trader'ların monitörleri teker teker parlak yeşile dönüyor, elleri başlarında; ekranın ortasında dev bir yeşil dalgalı grafik.", narration: "Ayıların kendi izinde tökezlediği bu ana bir isim veriyorlar: sıkışma. On dört dakika sürdü. Kırk yedi kişi tasfiye oldu.", image: c2p4a },
          { size: "half", scene: "Kenji ekrana bakarken derin bir nefes alıyor, elleriyle saçını karıştırıyor.", lines: [{ who: "Kenji", text: "Üç aydır kazandığım her şey... on dakika!", type: "shout" }, { who: "Ryō", text: "Neden stopun yoktu?" }, { who: "Kenji", text: "Çünkü 'düşecek' diyordum. Dilek stop olmuyormuş." }] },
          { size: "half", scene: "Ryō stop çizgisine dokunmadan pozisyonunu kapatıyor; ekranda küçük ama pozitif bir sayı.", lines: [{ who: "Ryō", text: "Kapattım. Planım kadar." }, { who: "Aiko", text: "Kâr bugün 12.000 yen. Ama asıl kazandığın şey ekranda yazmıyor." }] },
        ],
      },
      {
        no: 9,
        title: "Maskenin Ardı",
        panels: [
          { size: "full", scene: "Karşı sırada Kage-Nuke lideri kalabalığın içinde, maskesini bir an kaldırıp gülüyor. Etrafında meraklı gözler.", lines: [{ who: "Kage-Nuke Lideri", text: "Öğrenmişsin, yavru. Yönü değil, hacmi oku." }, { who: "Ryō", text: "Bir dahaki sefere sizi de okuyacağım." }], image: c2p5a },
          { size: "half", scene: "Topluluğun lideri kayboluyor kalabalıkta; arkasında yerde bir kâğıt: 'GÖRÜNMEYENİ SAT, GÖRÜNENİ AL.'", lines: [{ who: "Ryō", text: "Bu kâğıdı arkalarında bilerek mi bıraktılar?", type: "thought" }] },
          { size: "half", scene: "Aiko kâğıdı alıp deftere yerleştiriyor.", lines: [{ who: "Aiko", text: "Piyasada gerçek düşman senin hikâyene bir de kendi hikâyesini ekleyendir." }, { who: "Aiko", text: "Bugün senin hikâyenle beslenmediler. Bir dahaki sefere değişebilir." }] },
        ],
      },
      {
        no: 10,
        title: "Islak Çatı",
        panels: [
          { size: "full", scene: "Yağmur dinmiş. Ryō ve Aiko binaların üstündeki ıslak çatıda Tokyo'nun ışıklarına bakıyor. Şehir sessiz.", narration: "Bugün on dokuz yaşımdaydım ve ilk defa düşüşün de bir sanat olduğunu öğrendim. Ama en önemli dersim başkaydı: kalabalığın gürültüsü, yönün gücü değildir.", image: c2p5b },
          { size: "half", scene: "Aiko ellerini ceplerine sokmuş, uzağa bakıyor.", lines: [{ who: "Aiko", text: "Bir gün seninle karşı taraflarda olabiliriz." }, { who: "Ryō", text: "O zaman ne olur?" }, { who: "Aiko", text: "İkimizden biri, kuralına daha iyi uyanı kazanır. Kimin haklı olduğunun bir önemi yok." }] },
          { size: "half", scene: "Uzakta, karşı binadaki reklam panosunda küçük harflerle: '次回: 酒田五法' — 'Devam edecek: Sakata'nın Beş Kuralı.'", narration: "Aiko ertesi gün beni bir başka kapıya götürecekti. 300 yıllık, tozlu bir dojoya. Ve orada bana bir grafiğin neden bir belge değil, bir hafıza olduğunu anlatacaktı.", sfx: "…" },
        ],
      },
    ],
  },
  {
    no: 3,
    slug: "sakata-nin-bes-kurali",
    title: "Sakata'nın Beş Kuralı",
    kanji: "酒田",
    subject: "Teknik analiz ve mum formasyonları",
    logline:
      "Aiko, Ryō'yu 300 yıllık pirinç tüccarı okulunun tozlu dojosuna götürür. Grafik okumak bir yetenek değil, bir disiplindir.",
    cast: ["Aiko Mizuhara", "Ryō", "Sensei Honma"],
    lesson: [
      "Mum, dört sayının hikâyesidir: açılış, en yüksek, en düşük, kapanış.",
      "Uzun alt fitil, satıcıların reddedildiği yeri gösterir; direnç ve destek insan davranışının izidir.",
      "Formasyon tek başına sinyal değildir; bağlam (trend + hacim + seviye) olmadan gürültüdür.",
      "Grafik geleceği söylemez, olasılığı ölçer.",
      "Bir formasyon, aynı fiyat çevresinde yapılan hataların üst üste binmesidir.",
    ],
    cover: ch3,
    pages: [
      {
        no: 1,
        title: "Tozlu Dojo",
        panels: [
          { size: "full", scene: "Fener ışığında ahşap oda. Aiko, pirinç kâğıdına çizilmiş mum grafiğinin üzerine eğilmiş, elinde fırça kalem.", narration: "Aiko'nun yeri bir ofis değildi. Tatami, mürekkep ve 1755'ten kalma bir defter: Sakata Gohō.", image: c3p1a },
          { size: "half", scene: "Yakın plan: tek bir mumun anatomisi kâğıda çiziliyor — gövde, fitiller, kanji notlar.", lines: [{ who: "Aiko", text: "Bir mum dört rakamdır. Ama bir mum aslında bir pazarlığın tutanağıdır." }], image: c3p1b },
          { size: "half", scene: "Ryō çekinerek fırçayı alıyor, eli mürekkebe bulanıyor.", lines: [{ who: "Ryō", text: "Yani gövde sonucu, fitiller de denemeleri mi gösteriyor?" }, { who: "Aiko", text: "Şimdi görmeye başladın." }], image: c3p2a },
        ],
      },
      {
        no: 2,
        title: "Dört Sayı",
        panels: [
          { size: "full", scene: "Aiko büyük bir kâğıda dört harf yazıyor: A · Y · D · K. Her birinin altına küçük bir mum çiziyor.", lines: [{ who: "Aiko", text: "Açılış: gün başladığında ilk el sıkışma." }, { who: "Aiko", text: "Yüksek: alıcıların ileri gidebildiği son adım." }, { who: "Aiko", text: "Düşük: satıcıların bastırabildiği son adım." }, { who: "Aiko", text: "Kapanış: gün bittiğinde kimin masada kaldığı." }] },
          { size: "half", scene: "Ryō defterine dört harfi bir daire içine alıyor.", lines: [{ who: "Ryō", text: "Yani her mum dört soruya cevap veriyor.", type: "thought" }, { who: "Ryō", text: "Kim başlattı, kim ileri gitti, kim geri çekti, kim bitirdi." }] },
          { size: "half", scene: "Aiko onaylayarak başını sallıyor; arka planda pencereden hafif rüzgâr, kâğıtlar oynuyor.", lines: [{ who: "Aiko", text: "Grafik bir tarih kitabıdır. Ama sadece son satırı okuyanlar için." }] },
        ],
      },
      {
        no: 3,
        title: "Reddedilen Seviye",
        panels: [
          { size: "wide", scene: "Kâğıtta uzun alt fitilli bir çekiç formasyonu; Aiko kırmızı mürekkeple altını çiziyor.", lines: [{ who: "Aiko", text: "Bu fitil bir hatadır. Satıcılar buraya indi ve geri püskürtüldü." }, { who: "Aiko", text: "İnsanlar hatalarını hatırlar. Fiyat oraya döndüğünde aynı korku geri gelir." }], image: c3p3a },
          { size: "half", scene: "Sensei Honma kapıda, sırtı dönük, elinde bir bardak çay.", lines: [{ who: "Honma", text: "Kız haklı. Destek bir çizgi değil, bir hafızadır." }], image: c3p3b },
          { size: "half", scene: "Ryō pencereye bakıyor; camda kendi yansımasının yanında bir mum grafiği.", lines: [{ who: "Ryō", text: "Yani grafik aslında insanların anıları...", type: "thought" }, { who: "Honma", text: "Ve anılar unutulur. O yüzden her seviye sonsuza kadar tutmaz." }] },
        ],
      },
      {
        no: 4,
        title: "Yüzlerce Şekil",
        panels: [
          { size: "full", scene: "Ryō üç farklı formasyonu ezberlemeye çalışıyor, kafası karışık; etrafında dönen mumlar, üzerinde uçuşan isim etiketleri: doji, harami, engulfing, morning star...", lines: [{ who: "Ryō", text: "Ama yüzlerce formasyon var! Hepsini nasıl—", type: "shout" }, { who: "Honma", text: "Hiçbirini. Bağlamı ezberle, şekli değil." }], image: c3p4a },
          { size: "half", scene: "Honma tahtaya iki aynı formasyon çiziyor: biri düşüş sonunda, biri yükseliş ortasında.", lines: [{ who: "Honma", text: "Aynı şekil, iki farklı yerde iki farklı anlam." }, { who: "Honma", text: "Şekli tanıyan bir kütüphaneci olur. Bağlamı okuyan bir tüccar." }] },
          { size: "half", scene: "Ryō defterini kapatıp yeni bir sayfa açıyor; tepesine tek bir kelime yazıyor: 'BAĞLAM'.", lines: [{ who: "Ryō", text: "Şekilleri sonra öğrenirim. Önce yeri öğrenmeliyim.", type: "thought" }] },
        ],
      },
      {
        no: 5,
        title: "Üç Halka",
        panels: [
          { size: "full", scene: "Honma tahtaya üç halka çiziyor: TREND — SEVİYE — HACİM. Üçünün kesiştiği yere kırmızı mühür basıyor.", narration: "Sinyal, üç halkanın kesiştiği yerde doğar. Halkalardan biri eksikse elindeki şey sinyal değil, temennidir.", sfx: "DON!", image: c3p5a },
          { size: "half", scene: "Ryō üç halkayı defterine geçiriyor, ortalarına küçük bir mum çiziyor.", lines: [{ who: "Ryō", text: "Trend nereye gittiğini söyler. Seviye nerede duracağını. Hacim de gerçek mi olduğunu.", type: "thought" }] },
          { size: "half", scene: "Aiko onaylıyor: 'İşte bu.'", lines: [{ who: "Aiko", text: "Bu üçünden ikisi bile eksikse elini tutacaksın." }, { who: "Ryō", text: "Peki üçü de varsa?" }, { who: "Aiko", text: "O zaman girmezsen suç." }] },
        ],
      },
      {
        no: 6,
        title: "Üç Günlük Bekleyiş",
        panels: [
          { size: "full", scene: "Ertesi gün. Ryō ekranın karşısında sakin; fiyat destek seviyesine iniyor, hacim artıyor. Cam pencereden şafak sızıyor.", narration: "Üç gün bekledim. Üç gün boyunca hiçbir şey yapmamak, hayatımda yaptığım en zor iş oldu.", image: c3p6a },
          { size: "half", scene: "Ryō ekrandaki mumlara dikkatle bakıyor, tek tek işaretliyor.", lines: [{ who: "Ryō", text: "Birinci gün: uzun alt fitil. İkinci gün: doji. Üçüncü gün: kapanış üstte.", type: "thought" }] },
          { size: "half", scene: "Ryō çayı yudumluyor; yüzünde ilk kez sabrın rahatlığı var.", lines: [{ who: "Ryō", text: "Piyasa bana koşmadı. Ben ona koşmadım. Buluştuk.", type: "thought" }] },
        ],
      },
      {
        no: 7,
        title: "İlk Doğru Emir",
        panels: [
          { size: "full", scene: "Ryō limit emri giriyor; stop seviyesi fitilin bir tık altında. Ekranın çevresi karanlık, sadece emir formu aydınlık.", lines: [{ who: "Ryō", text: "Nerede yanılmış olacağımı biliyorum. O yüzden girebilirim." }], image: c3p7a },
          { size: "half", scene: "Ekranda fitilin bir tık altında ince bir stop çizgisi çiziliyor.", lines: [{ who: "Ryō", text: "Stop = fitilin bir yen altı. Buraya inerse hafıza kırılmış demektir.", type: "thought" }], sfx: "tık." },
          { size: "half", scene: "Fiyat sıçrıyor; Ryō'nun yüzünde ilk gerçek gülümseme.", sfx: "SU—", lines: [{ who: "Ryō", text: "Fitil tuttu.", type: "thought" }] },
        ],
      },
      {
        no: 8,
        title: "Şafak",
        panels: [
          { size: "full", scene: "Aiko arkasında duruyor, onaylayan bir bakış. Pencereden şafak; Tokyo silueti pusun içinden çıkıyor.", lines: [{ who: "Aiko", text: "Kazandığın için değil. Neden girdiğini söyleyebildiğin için tebrik ediyorum." }], narration: "İlk kez kazanç bir kaza değildi.", image: c3p8a },
          { size: "half", scene: "Ryō ekranın karşısında sessiz; masasında üç halka çizili küçük bir kâğıt.", lines: [{ who: "Ryō", text: "Kâr 22.000 yen. Ama asıl kazandığım şey bir cümle:", type: "thought" }, { who: "Ryō", text: "'Bağlamsız formasyon, öznesiz bir cümledir.'", type: "thought" }] },
          { size: "half", scene: "Aiko masaya küçük bir kâğıt bırakıyor: üzerinde tek bir formasyon çizili — 'sabahyıldızı' benzeri üç mum.", lines: [{ who: "Aiko", text: "Ödev. Bu formasyonu bir hafta boyunca üç farklı yerde ara: trend içinde, seviyede, hacimle." }, { who: "Aiko", text: "Ama sinyal diye ilan etme. Sadece not düş." }] },
        ],
      },
      {
        no: 9,
        title: "Kaybetmeyi Öğrenmek",
        panels: [
          { size: "full", scene: "Bir hafta sonra. Ryō ekranın karşısında; çizdiği formasyon dolmuş ama fiyat ters yöne gitmiş. Stop yenmiş.", narration: "Ders şuydu: doğru bağlam, doğru sinyal ve yine de kayıp. Bu bir hata değildi. Bu, olasılığın kendisiydi.", image: c3p4a },
          { size: "half", scene: "Ryō sakin bir şekilde defterine tik atıyor, altına iki satır yazıyor.", lines: [{ who: "Ryō", text: "'Kural işledi. Sonuç ters çıktı. İkisi ayrı şey.'", type: "thought" }] },
          { size: "half", scene: "Honma kapıdan izliyor, elinde yeni bir bardak çay.", lines: [{ who: "Honma", text: "Şimdi tüccar oldun. Kaybettiğinde bile aynı kişi kalıyorsun." }, { who: "Ryō", text: "Yani mesele hep aynı ben kalmakmış." }, { who: "Honma", text: "Piyasa değişir. Sen değişmezsen kazanırsın." }] },
        ],
      },
      {
        no: 10,
        title: "Beşinci Kural",
        panels: [
          { size: "full", scene: "Honma masaya eski bir tomar açıyor: 'Sakata'nın Beş Kuralı' yazılı, mürekkep solmuş.", narration: "Beşinci kural en zoruydu ve hiç mumdan bahsetmiyordu: 'Sabır, en pahalı emirdir. Ödemeyi bilmeyen giremez.'", image: c3p1a },
          { size: "half", scene: "Aiko tomarı Ryō'nun eline veriyor.", lines: [{ who: "Aiko", text: "Bu artık senin. Kopyala, defterine geçir." }, { who: "Ryō", text: "Orijinali sende kalmasın mı?" }, { who: "Aiko", text: "Orijinal grafikte. Bu sadece bir hatırlatma." }] },
          { size: "half", scene: "Ryō dojodan çıkıp caddeye adım atıyor; arkasında Aiko kapının önünde. Bir sonraki bölümün kapısı — kripto neonları — uzakta parlıyor.", narration: "O gece kâğıdı defterime kaydettim. Ertesi hafta kâğıdımı bir başka şehre — Kabukichō'nun neonlarına — götürecektim. Ve orada 'anahtar sende değilse para da senin değil' cümlesini duyacaktım.", sfx: "…" },
        ],
      },
    ],
  },
  {
    no: 4,
    slug: "kripto-anahtar",
    title: "Kripto ve Anahtar",
    kanji: "鍵",
    subject: "Kripto varlıklar, cüzdan güvenliği ve karşı taraf riski",
    logline:
      "Kabukichō'nun neonları altında Amagi Meisa, 'anahtarı olmayanın parası da yoktur' der. Ryō borsada tuttuğu paranın kime ait olduğunu sorgular.",
    cast: ["Amagi Meisa", "Ryō", "Kenji", "Aiko"],
    lesson: [
      "Anahtarların sende değilse coin de senin değil: borsada tutulan bakiye bir alacak kaydıdır.",
      "Karşı taraf riski, fiyat riskinden daha sessiz ve daha yıkıcıdır.",
      "Getiri vaadi ne kadar yüksekse, ödemeyi yapanın kim olduğunu o kadar net sormalısın.",
      "Soğuk cüzdan + yedek ifade + ayrılmış bakiye: üçü olmadan pozisyon büyütme.",
      "Bir varlığın adresi kamuya açıksa, bakiyesi de öyledir; anonimlik bir varsayım değil bir çalışmadır.",
    ],
    cover: ch4,
    pages: [
      {
        no: 1,
        title: "Neon Sokak",
        panels: [
          { size: "full", scene: "Yağmurlu Kabukichō sokağı, neon reklamlar. Ryō dar bir kapının önünde duruyor; kapının üstünde küçük bir logo: 鍵.", narration: "Kabukichō. Kağıt paranın kokusunun yok olduğu ve kodun onun yerini aldığı yer. Aiko'nun defterinde tek bir adres vardı: bu kapı.", image: c4p1 },
          { size: "half", scene: "Ryō'nun elinde bir telefon; ekranda milyonlarca kullanıcının işlem yaptığı bir borsa uygulaması, bakiyesi görünüyor.", lines: [{ who: "Ryō", text: "Buradaki her şey benim. Bakiye ekranda yazıyor.", type: "thought" }] },
          { size: "half", scene: "Kapı aralanıyor; içeriden kırmızı ışık, sigara dumanı, uzaktan gelen makine sesi.", sfx: "KRIİK…", lines: [{ who: "İçeriden bir ses", text: "İçeri gel. Ama önce şu cümleyi bırak dışarıda: 'Bakiye benim.'" }] },
        ],
      },
      {
        no: 2,
        title: "Amagi Meisa",
        panels: [
          { size: "full", scene: "Loş bir arka oda. Duvarda soğuk cüzdan modelleri asılı, masada eski bir laptop, bir bardak buzlu çay. Karşısında Amagi Meisa: kısa saçlı, gözlerinde neonun yansıması.", lines: [{ who: "Amagi", text: "Adım Amagi. Bu evde tek bir kural var:" }, { who: "Amagi", text: "Anahtar sende değilse, para da senin değil." }], image: c4p2 },
          { size: "half", scene: "Amagi masaya küçük siyah bir cihaz koyuyor: hardware cüzdan.", lines: [{ who: "Amagi", text: "Bu, banka değil. Bu, senin cebindeki kasa." }, { who: "Ryō", text: "Peki borsa hesabımdaki milyonlar?" }, { who: "Amagi", text: "Onlar birinin defterine yazılmış bir söz. Sözler bozulur." }] },
          { size: "half", scene: "Yakın plan: Ryō'nun telefonundaki borsa bakiyesi. Amagi parmağıyla dokunuyor.", lines: [{ who: "Amagi", text: "Bu bir sayı. Bir alacak kaydı. Borsa yarın kapıyı kapatırsa, bu sayının bir karşılığı olmayabilir." }] },
        ],
      },
      {
        no: 3,
        title: "İki Anahtar",
        panels: [
          { size: "wide", scene: "Amagi tahtaya iki anahtar çiziyor: bir genel (public), bir özel (private).", lines: [{ who: "Amagi", text: "Genel anahtar bir posta kutusu. Herkes içine mektup atabilir." }, { who: "Amagi", text: "Özel anahtar posta kutusunun anahtarı. Kaybedersen, mektuplar sonsuza dek orada kalır." }], image: c4p3 },
          { size: "half", scene: "Amagi 12 kelimelik bir yedek ifadesi kâğıdı gösteriyor; kelimeler el yazısıyla.", lines: [{ who: "Amagi", text: "Bu 12 kelime senin özel anahtarının başka bir dilidir." }, { who: "Amagi", text: "Ekran görüntüsü alma. Buluta yükleme. Yazdır, sakla, unut." }] },
          { size: "half", scene: "Ryō kâğıdı elinde tutuyor; kelimeler onun için hâlâ soyut.", lines: [{ who: "Ryō", text: "Bu kelimeler bir hesabın tamamı mı?", type: "thought" }, { who: "Amagi", text: "Hayır. Bu kelimeler o hesabın kendisi." }] },
        ],
      },
      {
        no: 4,
        title: "Karşı Taraf",
        panels: [
          { size: "full", scene: "Amagi laptop çeviriyor: eski bir borsa iflasının haber arşivi, binlerce kullanıcının kaybettiği rakamlar.", narration: "'Karşı taraf riski' hiç fiyat düşmeden seni bitirebilir. Bir sabah uygulamayı açarsın, giriş çalışmaz.", lines: [{ who: "Amagi", text: "2014. Bir borsa. Bir gecede 850.000 coin buharlaştı." }] , image: c4p4 },
          { size: "half", scene: "Kenji kapıdan içeri giriyor, elinde çay; yüzünde ciddi bir ifade.", lines: [{ who: "Kenji", text: "Sen borsayı bir kasa sanıyordun. O bir kredi kartıydı: harcarken senin, kesilirken onların." }] },
          { size: "half", scene: "Ryō çenesini avucuna dayamış; gözünde ilk gerçek endişe.", lines: [{ who: "Ryō", text: "Peki hepsini soğuk cüzdana mı çekmeliyim?", type: "thought" }, { who: "Amagi", text: "Hayır. Sadece uyuyacağın miktarı. İşlem yapacağın miktar borsada kalır — ama bilinçle." }] },
        ],
      },
      {
        no: 5,
        title: "Zincir Şeffaftır",
        panels: [
          { size: "full", scene: "Duvarda büyük bir monitör: canlı bir blok zinciri gezgini, hareket eden adresler ve miktarlar.", narration: "Zincir bir günlüktür. Her hareket okunur, her adres izlenebilir. Anonimlik bir varsayım değil, bir çalışmadır.", lines: [{ who: "Amagi", text: "Sen bu adresi kimseye vermedin. Ama iki yıl sonra biri, üç transfer geriye giderek seni bulabilir." }] , image: c4p5 },
          { size: "half", scene: "Kenji ekrana parmağıyla dokunuyor; bir adresin geçmişi açılıyor.", lines: [{ who: "Kenji", text: "Yani harcadığın her coin, seni bir sonraki muhataba tanıtır." }, { who: "Kenji", text: "Yeni cüzdan, yeni kimlik değildir. Zincir hafıza tutar." }] },
          { size: "half", scene: "Ryō defterine not alıyor: 'gizlilik ≠ anonimlik'.", lines: [{ who: "Ryō", text: "Şeffaflık bir hediye ama aynı zamanda bir prangaymış.", type: "thought" }] },
        ],
      },
      {
        no: 6,
        title: "Getiri Vaadi",
        panels: [
          { size: "full", scene: "Yan sokakta ışıklı bir tabela: 'Aylık %30 sabit getiri' yazıyor. Kapının önünde uzun bir kuyruk.", narration: "Piyasada bir cümle vardı: 'Getiri ne kadar yüksekse, kaynağını o kadar net sormalısın.' O kuyruğu kimse sormamıştı.", sfx: "GŌ…" , image: c4p6 },
          { size: "half", scene: "Amagi kuyruğu göstererek Ryō'nun yüzüne bakıyor.", lines: [{ who: "Amagi", text: "Sabit getiri bir masaldır. Piyasa, kendisi de dalgalıyken kimseye 'sabit' söz veremez." }, { who: "Amagi", text: "Kimse yalan söylemek zorunda değil. Yeni gelenin parası eskisine getiri olarak dağıtılır. Piramit ortadan çöker." }] },
          { size: "half", scene: "Ryō kuyruktaki bir gencin yüzüne bakıyor; genç mutlu, telefonuna bakıyor.", lines: [{ who: "Ryō", text: "Ama grafik yükseliyor. Herkes kazanıyor.", type: "thought" }, { who: "Kenji", text: "Piramit çökmeden önce herkes kazanır. İşin bütün numarası buradadır." }] },
        ],
      },
      {
        no: 7,
        title: "Kayıp Anahtar",
        panels: [
          { size: "full", scene: "Amagi eski bir hikâye anlatıyor: bir programcı, sabit diskini çöpe atmış; içinde 7.500 coin. Şehir çöplüğünde arıyor.", narration: "Anahtarını kaybeden zengin, yanındaki fakirden daha çaresizdir. Şifreyi hatırlayamayan cüzdan sonsuza dek kilitli bir kapıdır.", lines: [{ who: "Amagi", text: "İki tuzak: birine kaptırırsın, ya da kendine kaptırırsın. İkincisi daha yaygın." }] , image: c4p7 },
          { size: "half", scene: "Amagi bir yedekleme prosedürü çiziyor: iki farklı fiziksel konum, metal levha üzerine kazınmış kelimeler.", lines: [{ who: "Amagi", text: "Kâğıt yanar, su alır. Kelimeleri metale kaz." }, { who: "Amagi", text: "İki kopya, iki farklı yerde. Aynı çekmecede iki kopya, tek kopyadır." }] },
          { size: "half", scene: "Ryō 12 kelimeyi tekrar tekrar okuyor.", lines: [{ who: "Ryō", text: "Bu 12 kelimeyi kaybedersem, hayatım boyunca kazandığım her şey de kaybolur mu?", type: "thought" }, { who: "Amagi", text: "Evet. Bu yüzden bu 12 kelime, mülkiyetin en dürüst hâlidir." }] },
        ],
      },
      {
        no: 8,
        title: "Kabukichō Anlaşması",
        panels: [
          { size: "full", scene: "Sokakta yağmur duruyor; su birikintilerinde neon yansımaları. Amagi Ryō'ya elini uzatıyor.", lines: [{ who: "Amagi", text: "Sana bir teklif. Küçük başla. Sermayenin %5'i." }, { who: "Amagi", text: "%5'i yönetemiyorsan %50'sini yönetemezsin." }], image: c4p8 },
          { size: "half", scene: "Ryō soğuk cüzdanı cebine koyuyor; yüzünde yeni bir ağırlık.", lines: [{ who: "Ryō", text: "Kilit artık bende.", type: "thought" }, { who: "Ryō", text: "Ve kilit bendeyse, kaybın sorumluluğu da bende." }] },
          { size: "half", scene: "Kenji uzaktan sigara içiyor; sesi düz.", lines: [{ who: "Kenji", text: "Kimin bir suçlaması varsa — borsanın, kodun, piyasanın — aynadaki adamı unutmuş demektir." }] },
        ],
      },
      {
        no: 9,
        title: "İlk Transfer",
        panels: [
          { size: "wide", scene: "Ryō laptop başında, gecenin ilerlemiş saati. Ekranda küçük bir test transferi.", narration: "İlk kural: büyük transferden önce küçük bir test. Yanlış adres, geri dönüşü olmayan bir mektuptur.", lines: [{ who: "Ryō", text: "Önce bir kahve parası kadar gönder. Sonra gerisi.", type: "thought" }] , image: c4p9 },
          { size: "half", scene: "Ekranda 'işlem onaylandı' bildirimi; Ryō rahatlıyor.", sfx: "pıt.", lines: [{ who: "Ryō", text: "Doğru adres. Doğru zincir.", type: "thought" }] },
          { size: "half", scene: "Aiko mesaj atıyor; ekranda görüntüleniyor: 'Yavaş git. Ağ sıkışıksa ücret yükselir.'", lines: [{ who: "Aiko", text: "Ağ trafiği fiyatı belirler. Aceleyle transferler dört katı öder." }] },
        ],
      },
      {
        no: 10,
        title: "Anahtar Bende",
        panels: [
          { size: "full", scene: "Şafak. Ryō sokağa çıkıyor; cebinde küçük siyah cihaz, defterine son satırı yazmış.", narration: "Kabukichō'ya bir borç kapatmak için gitmiştim. Bir mülkiyet fikriyle döndüm. Bakiye ekranda yazabilir; sahiplik anahtarda saklıdır.", lines: [{ who: "Ryō", text: "'Bakiye ≠ sahiplik. Sahiplik = anahtar + yedek + bilinç.'", type: "thought" }] , image: c4p10 },
          { size: "half", scene: "Aiko sabahın buğusunda ona doğru yürüyor.", lines: [{ who: "Aiko", text: "Bir sonraki bölüm daha ağır. Bu kez piyasayla değil, kendinle yarışacaksın." }, { who: "Ryō", text: "Neyle?" }, { who: "Aiko", text: "Zararı sınırlama disipliniyle." }] },
          { size: "half", scene: "Uzakta bir gazete standı; başlık: 'Piyasa dört gündür rekor kırıyor'. Ryō başlığı okurken gülümsüyor.", narration: "O gülümseme, bir sonraki bölümde bana çok pahalıya patlayacaktı.", sfx: "…" },
        ],
      },
    ],
  },
  {
    no: 5,
    slug: "zarari-sinirla",
    title: "Zararı Sınırla",
    kanji: "損切",
    subject: "Risk yönetimi, stop-loss ve pozisyon büyüklüğü",
    logline:
      "Ryō kuralını bir kez çiğner ve on dört ayda kazandığını on dört saatte kaybeder. Bu bölüm bir kayıp değil, bir disiplin sınavı.",
    cast: ["Ryō", "Tōdō", "Aiko"],
    lesson: [
      "Pozisyon büyüklüğü, tahminin değil, kayıp toleransının fonksiyonudur: risk / mesafe = lot.",
      "Tek işlemde sermayenin %1-2'sinden fazlasını riske atma; seri kayıp matematiksel olarak kaçınılmazdır.",
      "%50 kaybettiğinde başa dönmek için %100 kazanman gerekir. Asimetri her zaman aleyhinedir.",
      "Stop bir yenilgi değil, sözünü tutma biçimidir.",
      "Ortalamayı düşürmek, yanlış yönde büyümenin naif adıdır.",
    ],
    cover: ch5,
    pages: [
      {
        no: 1,
        title: "Kırık Kural",
        panels: [
          { size: "full", scene: "Sabah 10:14. Ryō masasında; ekran yeşil, kâr rakamı büyük. Tōdō'nun defteri masanın kenarında kapalı duruyor.", narration: "Bir kuralı çiğnemenin en tehlikeli anı, aylardır ona uyduktan sonrasıdır. Piyasa sana on dört ay boyunca 'haklısın' der. On dördüncü ayın on beşinci gününde faturayı keser.", image: c5p1 },
          { size: "half", scene: "Ryō stop çizgisini biraz aşağı çekiyor; klavye üzerinde tek bir tık.", lines: [{ who: "Ryō", text: "Sadece bir tık aşağı. Şimdi dokunmasın diye.", type: "thought" }] },
          { size: "half", scene: "Aiko kapıdan geçerken duruyor; ekrana bakıyor, sesini çıkarmıyor.", lines: [{ who: "Aiko", text: "Stop'u oynatmak — ne için?", type: "thought" }] },
        ],
      },
      {
        no: 2,
        title: "Yükselen Grafik",
        panels: [
          { size: "full", scene: "Şehir merkezindeki dev ekran: piyasa dört gündür yeşil. Herkes telefonuna bakıyor, herkes kazanıyor.", narration: "'Bu sefer farklı' cümlesi piyasanın en pahalı dört kelimesidir. Her defasında yeniden ödenir.", sfx: "GŌ", image: c5p2 },
          { size: "half", scene: "Ryō sosyal medyada bir grafik görüyor: 'x hisse 3 günde %60 kazandırdı'. Yorumlar coşkulu.", lines: [{ who: "Kalabalık", text: "Kaçırma! Tren kalkıyor!", type: "shout" }] },
          { size: "half", scene: "Ryō pozisyonunu iki katına çıkarıyor; ekrandaki lot boyutu 3'ten 6'ya çıkıyor.", lines: [{ who: "Ryō", text: "Bu tren gerçek. Bir kere de büyük gir.", type: "thought" }, { who: "Aiko", text: "Sermayenin yüzde kaçı bu?", type: "thought" }] },
        ],
      },
      {
        no: 3,
        title: "Formül",
        panels: [
          { size: "full", scene: "Geriye dönüş: Tōdō'nun eski dersi. Kara tahtada üç harf: R / M = L.", narration: "Bir yıl önce Tōdō bana bir formül yazdırmıştı. O gün ezberlemiştim. O gün unutmuştum.", lines: [{ who: "Tōdō", text: "Risk bölü mesafe eşittir lot. Ne kadar kaybetmeye razısın? Nereye stop koydun? Bu ikisi lotu belirler." }] , image: c5p3 },
          { size: "half", scene: "Yakın plan: Tōdō'nun tebeşirli parmağı.", lines: [{ who: "Tōdō", text: "%1 kaybı göze alabiliyorsan, stop'un uzaksa lot'un küçüktür." }, { who: "Tōdō", text: "Lot'u büyütmek istiyorsan stop'u yaklaştıracaksın. Ama stop yakınsa, gürültü seni oyundan çıkarır." }] },
          { size: "half", scene: "Ryō'nun bugünkü ekranı: lot 6, ama stop hâlâ eski uzak yerinde. Toplam risk sermayenin %11'i.", lines: [{ who: "Ryō", text: "%11 mi? Bir tık atlamışım.", type: "thought" }, { who: "Ryō", text: "Ama grafik zaten yukarı gidiyor.", type: "thought" }] },
        ],
      },
      {
        no: 4,
        title: "Öğle Dönüşü",
        panels: [
          { size: "full", scene: "12:47. Grafik ilk kez ters dönüyor; büyük bir kırmızı mum. Ekran duvarında sayılar kırmızıya kayıyor.", sfx: "SLAM", narration: "İki dakika. İki dakikada aylarca çalışmış bir 'aşağı yönde direnç' bir üstünde ışıklandı." , image: c5p4 },
          { size: "half", scene: "Ryō ekrana bakıyor; kâr rakamı yarıya iniyor. Stop hâlâ devreye girmedi.", lines: [{ who: "Ryō", text: "Bekle. Geri gelir.", type: "thought" }] },
          { size: "half", scene: "Aiko sessizce yaklaşıyor; masaya yazdığı iki kelimeli bir kâğıt bırakıyor: 'Şimdi çık.'", lines: [{ who: "Aiko", text: "Bekleme kararı da bir karardır. Ama bilinçli mi?" }] },
        ],
      },
      {
        no: 5,
        title: "Sözü Tutmak",
        panels: [
          { size: "full", scene: "Tōdō'nun eski dersinden bir kare: 'Stop bir yenilgi değil, sözünü tutma biçimidir.'", narration: "Stop, geleceğin sana ait olduğunu inkâr eden bir sözdür. 'Buraya inerse, ben yanılmışım demektir.' Yanılmayı önceden kabul etmek — çoğu insan bunu bir kez bile yapmadan piyasayı bırakır.", lines: [{ who: "Tōdō", text: "Emrini verirken kim olduğunu unutma. Emrini kapatırken de aynı kişi kal." }] , image: c5p5 },
          { size: "half", scene: "Ryō stopu tekrar aşağı çekiyor; el titreyerek.", lines: [{ who: "Ryō", text: "Bir tık daha. Piyasa geri gelirse haklı çıkacağım.", type: "thought" }] },
          { size: "half", scene: "Aiko yanına oturuyor; sesi çok yumuşak.", lines: [{ who: "Aiko", text: "Ryō. Haklı çıkmak için stop oynatmak, oyunun kurallarını değiştirmek demek." }, { who: "Aiko", text: "Kurallarını değiştirenler, aynı oyunu ikinci kez oynayamaz." }] },
        ],
      },
      {
        no: 6,
        title: "Asimetri",
        panels: [
          { size: "full", scene: "Tahtada Aiko'nun çizdiği bir tablo: -%10 → +%11, -%25 → +%33, -%50 → +%100, -%75 → +%300.", narration: "Kaybın matematiği kazancın matematiğinden acımasızdır. Aşağı yolu kısa, geri dönüş yolu uzundur.", lines: [{ who: "Aiko", text: "Yarısını kaybettin mi, iki katını kazanman gerekir." }, { who: "Aiko", text: "Bu yüzden risk yönetiminin adı 'kaybetmemek' değil, 'geri dönebilir kalmak'tır." }], image: c5p6 },
          { size: "half", scene: "Ekran: pozisyon şu an -%14. Ryō gözünü kırpmıyor.", lines: [{ who: "Ryō", text: "Bir kere daha çek. Ortalamayı düşür.", type: "thought" }, { who: "Aiko", text: "Ortalamayı düşürmek, yanlış yönde büyümenin süslü adıdır.", type: "thought" }] },
          { size: "half", scene: "Ryō ikinci bir alım yapıyor; ekranda pozisyon boyutu şimdi 9 lot.", lines: [{ who: "Ryō", text: "Şimdi geri gelmesi lazım.", type: "thought" }] },
        ],
      },
      {
        no: 7,
        title: "Karar Anı",
        panels: [
          { size: "full", scene: "14:31. Piyasa ikinci bir bacak aşağı iniyor. Ekranda kırmızı hızla akıyor.", sfx: "DOMM!", narration: "Kimse kendi kararını dışarıdan izleyemez. Ama kararı kimin vereceğini seçebilir." , image: c5p7 },
          { size: "half", scene: "Tōdō'nun eski defteri masaya düşüyor; sayfa 'Kural 3' üzerinde açılıyor.", lines: [{ who: "Tōdō (defterden)", text: "Kural 3: Emrini verirken 'yanılırsam nerede çıkarım?' cevabı yoksa, emri verme." }] },
          { size: "half", scene: "Aiko sessizce elini Ryō'nun bileğine koyuyor.", lines: [{ who: "Aiko", text: "Kapat. Şimdi. Bugün olan, para değil. Bugün olan, kendine verdiğin sözü tutmak." }] },
        ],
      },
      {
        no: 8,
        title: "Karar",
        panels: [
          { size: "full", scene: "Ryō 'sat' butonuna basıyor; ekranda pozisyon kapanıyor. Kâr rakamı büyük bir eksi olarak beliriyor.", narration: "On dört ayın kazancının %62'si. On dört saatte. Bir emirde. İki kural çiğnendiği için.", sfx: "KLIK." , image: c5p8 },
          { size: "half", scene: "Ryō ellerini masaya koyuyor; nefes alıyor. Yüzü sakin, ama gözleri boş.", lines: [{ who: "Ryō", text: "Yaptım.", type: "thought" }, { who: "Ryō", text: "Sınırladım.", type: "thought" }] },
          { size: "half", scene: "Aiko bir bardak su getiriyor.", lines: [{ who: "Aiko", text: "Karar doğru. Kalan sermaye ile hâlâ oyundasın." }, { who: "Aiko", text: "Oyunda kalmak, kazanmaktan önce gelir." }] },
        ],
      },
      {
        no: 9,
        title: "İki Sütun",
        panels: [
          { size: "full", scene: "Boş salonda Aiko tahtaya iki sütun çiziyor: solda 'kontrol edebildiklerin', sağda 'edemediklerin'.", lines: [{ who: "Aiko", text: "Sol: lot, stop, giriş, çıkış, sabır." }, { who: "Aiko", text: "Sağ: yön, süre, boyut, kalabalığın hissi." }], image: c5p9 },
          { size: "half", scene: "Ryō sol sütuna bakıyor.", lines: [{ who: "Aiko", text: "İyi trader sağdan bir şey ister mi? İster. Ama tek karar hakkı soldadır." }, { who: "Ryō", text: "Bugün ben soldan sağa geçmişim.", type: "thought" }] },
          { size: "half", scene: "Aiko defterin son sayfasına iki cümle yazıyor.", lines: [{ who: "Aiko", text: "Cümle 1: 'Yanıldığımı ilk ben kabul ederim.'" }, { who: "Aiko", text: "Cümle 2: 'Küçük yanılmak, doğru olmak kadar değerlidir.'" }] },
        ],
      },
      {
        no: 10,
        title: "Sözünü Tutan",
        panels: [
          { size: "full", scene: "Akşam. Ryō çatıda oturuyor; şehir aşağıda pırıldıyor. Elinde Tōdō'nun defteri.", narration: "O gece, kazanç eğrimin ilk büyük çukurunu çizdim. Ama grafik değil, kendime baktım. Ve grafiği bir daha okuyabildim.", lines: [{ who: "Ryō", text: "Sermayemin bir kısmını kaybettim. Ama sözümü kaybetmedim.", type: "thought" }] , image: c5p10 },
          { size: "half", scene: "Aiko yanına oturuyor.", lines: [{ who: "Aiko", text: "Bir sonraki bölüm, tek bir işlem değil. Bir portföy." }, { who: "Aiko", text: "On işlem, on kendini kandırış." }] },
          { size: "half", scene: "Uzaktaki tepede kadın bir siluet: elinde komuta yelpazesi, arkasında düzenli sıralı köyler.", narration: "Ertesi hafta bir daimyo ile tanışacaktım. Ve bir daimyo'nun tek bir vadiye köy kurmadığını öğrenecektim.", sfx: "…" },
        ],
      },
    ],
  },
  {
    no: 6,
    slug: "portfoy-daimyosu",
    title: "Portföy Daimyosu",
    kanji: "分散",
    subject: "Portföy kurulumu, çeşitlendirme ve korelasyon",
    logline:
      "Bir daimyo topraklarını tek vadiye kurmaz. Ryō, farklı varlıkların aynı anda neden düştüğünü öğrenir.",
    cast: ["Lady Kirishima", "Ryō", "Aiko"],
    lesson: [
      "Çeşitlendirme adet değil, korelasyon meselesidir: on farklı teknoloji hissesi tek bir bahistir.",
      "Varlık dağılımı getirinin en büyük belirleyicisidir; hisse seçimi ikinci sıradadır.",
      "Yeniden dengeleme, disiplini otomatikleştirmenin yoludur.",
      "Korelasyon sabit değildir; kriz anında her şey birlikte düşer.",
      "Portföy, tek işlemin süslenmiş hâli değil; birbirini dengeleyen kararlar bütünüdür.",
    ],
    cover: ch6,
    pages: [
      {
        no: 1,
        title: "Kirishima Vadisi",
        panels: [
          { size: "full", scene: "Feodal Japon dağ manzarası. Ryō dar patikadan yukarı çıkıyor; tepede resmi kıyafetli bir kadın figürü, elinde komuta yelpazesi.", narration: "Kirishima. Zamandan bağımsız görünen bir dağ. Buraya çağıran, adını yalnız fısıltıyla duyduğum bir daimyoydu: Lady Kirishima.", image: c6p1 },
          { size: "half", scene: "Lady Kirishima Ryō'ya dönüyor; sakin, ölçülü bir bakış.", lines: [{ who: "Kirishima", text: "Diyorlar ki iyi bir tüccar olmuşsun." }, { who: "Ryō", text: "İyi bir işlem yaptım. İyi bir portföyüm yok." }, { who: "Kirishima", text: "İşte bu yüzden buradasın." }] },
          { size: "half", scene: "Vadinin panoraması: farklı iklimlerde farklı köyler — pirinç tarlaları, balıkçı iskelesi, dağ madeni, orman kenarı çiftlik.", lines: [{ who: "Kirishima", text: "Topraklarımı görüyor musun? Beş köy. Beş farklı gelir." }] },
        ],
      },
      {
        no: 2,
        title: "Tek Vadi Yanılgısı",
        panels: [
          { size: "full", scene: "Kirishima komuta yelpazesiyle uzaktaki dar bir vadiyi işaret ediyor; içinde tek tip bir tarım.", lines: [{ who: "Kirishima", text: "Şuradaki komşu daimyo topraklarını tek vadiye kurmuş. Zengin. Bir yıl. Sonra bir sel gelir; her şey biter." }], image: c6p2 },
          { size: "half", scene: "Ryō defterine 'çeşitlendirme = adet mi?' yazıyor.", lines: [{ who: "Ryō", text: "Ben on farklı hisse tutuyorum. Bu çeşitlendirme değil mi?", type: "thought" }] },
          { size: "half", scene: "Kirishima defteri kenara itiyor; sertçe.", lines: [{ who: "Kirishima", text: "On farklı hisse, aynı sektörden alınmışsa — on isim, bir bahistir." }, { who: "Kirishima", text: "Adet seni aldatır. Korelasyon konuşur." }] },
        ],
      },
      {
        no: 3,
        title: "Beş Köy",
        panels: [
          { size: "full", scene: "Kirishima haritayı seriyor: pirinç, balık, maden, orman, ipek. Her birinin yanında farklı bir sembol.", lines: [{ who: "Kirishima", text: "Pirinç kurak yılda kaybeder, balık kazanır." }, { who: "Kirishima", text: "Maden düşük fiyatta kaybeder, orman odun talebi yükselince kazanır." }, { who: "Kirishima", text: "Her köyün başka bir düşmanı, başka bir mevsimi vardır." }], image: c6p3 },
          { size: "half", scene: "Ryō defterine dört başlık atıyor: hisse, tahvil, altın, nakit.", lines: [{ who: "Ryō", text: "Belki benim beş köyüm bunlar olmalı.", type: "thought" }] },
          { size: "half", scene: "Aiko içeri giriyor, ellerinde iki koyu çay bardağı.", lines: [{ who: "Aiko", text: "Bir de son sınıf: 'nakit'. Sıkıcı görünür. Ama fırtınada tek gemi odur." }] },
        ],
      },
      {
        no: 4,
        title: "Korelasyon",
        panels: [
          { size: "full", scene: "Kirishima bir masada iki dalga çiziyor; birlikte inip birlikte kalkıyorlar.", lines: [{ who: "Kirishima", text: "İki varlık aynı anda mı düşer, aynı anda mı yükselir? Cevap 'korelasyon' denen sayıdır." }], image: c6p4 },
          { size: "half", scene: "İkinci çizim: iki dalga; biri yukarı çıkarken diğeri aşağı iniyor.", lines: [{ who: "Kirishima", text: "Ters yönlüyse korelasyon eksi. Portföyün nefesi burada gizlidir." }] },
          { size: "half", scene: "Üçüncü çizim: iki dalga; birbirinden bağımsız.", lines: [{ who: "Kirishima", text: "Bağımsızsa sıfır. Ama bir gerçek daha var: fırtınada bütün dalgalar bir olur." }] },
        ],
      },
      {
        no: 5,
        title: "Fırtına Günü",
        panels: [
          { size: "full", scene: "Geriye dönüş: 2020 baharı. Bütün grafikler aynı anda düşüyor. Hisse, tahvil, kripto, emtia — hepsi kırmızı.", narration: "Bir sabah uyanırsın: hisseler düşmüş, tahviller düşmüş, altın düşmüş, kripto düşmüş. 'Çeşitlendirme' o gün bir hikâye gibi anlatılır.", sfx: "DOOM", image: c6p5 },
          { size: "half", scene: "Kirishima defteri kapatıyor; sesi düşük.", lines: [{ who: "Kirishima", text: "Bu yüzden çeşitlendirme yetmez. Bir de likidite lazım." }, { who: "Kirishima", text: "Fırtına günü satabildiğin, sadece nakit ve en likit varlıklardır." }] },
          { size: "half", scene: "Ryō defterine yazıyor: 'Kriz = tüm korelasyonlar 1'e çıkar.'", lines: [{ who: "Ryō", text: "Yani sakin havada ölçtüğüm risk, fırtınada başka bir sayı.", type: "thought" }] },
        ],
      },
      {
        no: 6,
        title: "Dağılım",
        panels: [
          { size: "full", scene: "Kirishima kâğıda basit bir pasta grafiği çiziyor: %50 hisse, %30 tahvil, %10 altın, %10 nakit.", narration: "Yıllarca yapılan çalışmalar tek bir cümlede özetlenir: portföy getirisinin en büyük belirleyicisi hangi hisseyi seçtiğin değil, ne kadarını hisseye ayırdığındır.", lines: [{ who: "Kirishima", text: "Önce dağılımını seç. Sonra içindeki isimleri." }], image: c6p6 },
          { size: "half", scene: "Aiko not defterine iki soru yazıyor: 'Hangi yaşta?' ve 'Hangi ufuk?'", lines: [{ who: "Aiko", text: "Yirmi yaşında biriyle altmışında biri aynı portföyü taşıyamaz." }, { who: "Aiko", text: "Zaman ufkun kısaysa, dalgalanmayı taşıyamazsın." }] },
          { size: "half", scene: "Ryō kendi tablosunu yazıyor: hedef %60 hisse, %25 tahvil, %10 altın/emtia, %5 nakit.", lines: [{ who: "Ryō", text: "İlk defa portföy 'bir sonraki işlem' değil, bir düzenmiş.", type: "thought" }] },
        ],
      },
      {
        no: 7,
        title: "Yeniden Dengeleme",
        panels: [
          { size: "full", scene: "Kirishima bir kum saati gösteriyor; kum bir taraftan diğerine akıyor.", lines: [{ who: "Kirishima", text: "Piyasa senin dağılımını her gün bozar. Yükselen ağırlaşır, düşen incelir." }, { who: "Kirishima", text: "Yılda bir kez ya da eşiklerde geri düzeltirsin. Buna 'yeniden dengeleme' denir." }], image: c6p7 },
          { size: "half", scene: "Yakın plan: bir el, ağır olan tarafın taşlarını hafif tarafa aktarıyor.", lines: [{ who: "Kirishima", text: "Bu, yükseleni satıp düşeni almak demektir. Kalabalığa ters. Ama disipline uygun." }] },
          { size: "half", scene: "Ryō biraz duraksıyor.", lines: [{ who: "Ryō", text: "Ama yükseleni neden satayım?", type: "thought" }, { who: "Kirishima", text: "Çünkü portföyün adı 'bugün en çok kazandıran' değildir. 'Yarın ayakta kalabilen'dir." }] },
        ],
      },
      {
        no: 8,
        title: "Ucuz Ders",
        panels: [
          { size: "full", scene: "Kirishima kâğıda bir hesap yazıyor: yüksek işlem ücretleri, vergiler, aşırı alım-satım. Sonuç: getirinin yarısı buharlaşıyor.", narration: "İyi portföyün en büyük düşmanı kötü piyasa değildir. Kötü portföy sahibidir. Çok işlem, çok maliyet, çok kendini kandırış.", lines: [{ who: "Kirishima", text: "Portföy hafif dokunulur. Ağır dokunan aşağı çeker." }], image: c6p8 },
          { size: "half", scene: "Ryō defterine üç kural yazıyor: '1) yılda bir denge, 2) eşikte müdahale, 3) haber varsa 24 saat bekle'.", lines: [{ who: "Ryō", text: "'Haber varsa 24 saat bekle' — bu en zoru olacak.", type: "thought" }] },
          { size: "half", scene: "Aiko onaylayarak başını sallıyor.", lines: [{ who: "Aiko", text: "Kural, sen zayıfken senin yerine karar veren şeydir." }] },
        ],
      },
      {
        no: 9,
        title: "Tek Bahis Değil",
        panels: [
          { size: "full", scene: "Kirishima Ryō'yu tepenin kenarına götürüyor; aşağıda beş köy sabahın buğusunda parlıyor.", lines: [{ who: "Kirishima", text: "Bir tüccar tek işleme, bir daimyo tek köye bağlanmaz." }, { who: "Kirishima", text: "Bir tanesi yanarsa, kalanlar seni ayakta tutmalı." }], image: c6p9 },
          { size: "half", scene: "Uzakta, komşu daimyonun tek vadili topraklarında sel görüntüsü; köy sular altında.", lines: [{ who: "Kirishima", text: "Şu manzaraya bakmayı unutma. Portföyünü kurarken hep şu vadiyi hatırla." }] },
          { size: "half", scene: "Ryō defterini kapatıyor; kararlı bir yüz.", lines: [{ who: "Ryō", text: "Portföy = 'bir sonraki işlem' değil. Portföy = birbirini dengeleyen kararlar bütünü.", type: "thought" }] },
        ],
      },
      {
        no: 10,
        title: "Dönüş Yolu",
        panels: [
          { size: "full", scene: "Ryō dağdan aşağı iniyor; sırt çantasında Kirishima'nın verdiği eski bir portföy tablosu.", narration: "Dağdan bir işlem stratejisiyle inmedim. Bir varlık dağılımıyla indim. İkisi arasındaki fark, bir günün ile bir on yılın arasındaki farktır.", lines: [{ who: "Ryō", text: "Bir sonraki bölümde defterlere gireceğim. Ama bu kez fiyat defterine değil, bilanço defterine.", type: "thought" }], image: c6p10 },
          { size: "half", scene: "Uzakta arşiv odasının kapısı; yaşlı bir arşivci Genzō pencereden bakıyor.", lines: [{ who: "Genzō (uzaktan)", text: "Kâr bir görüştür. Nakit bir gerçektir." }] },
          { size: "half", scene: "Ryō yolda yürürken defterinin son sayfasında Kirishima'nın el yazısını görüyor: 'Adet çokluk değildir. Farklılık çokluktur.'", narration: "O günden sonra portföyümde hâlâ tek bir bahis vardı. Ama artık o bahsin adı 'ben' değildi.", sfx: "…" },
        ],
      },
    ],
  },
  {
    no: 7,
    slug: "bilanco-defteri",
    title: "Bilanço Defteri",
    kanji: "帳簿",
    subject: "Temel analiz: bilanço, nakit akışı, değerleme",
    logline:
      "Genzō'nun arşiv odasında hikâyeler değil defterler konuşur. Bir şirketin gerçeği nakit akışındadır.",
    cast: ["Arşivci Genzō", "Aiko"],
    lesson: [
      "Kâr bir görüş, nakit bir gerçektir.",
      "F/K tek başına ucuzluk göstergesi değildir; büyüme ve borç olmadan anlamsızdır.",
      "Borç, iyi günlerde kaldıraç, kötü günlerde ipotektir.",
    ],
  },
  {
    no: 8,
    slug: "turev-sahnesi",
    title: "Türev Sahnesi",
    kanji: "先物",
    subject: "Vadeli işlemler, opsiyonlar ve kaldıraç",
    logline:
      "Osaka'nın eski tahıl borsasında tüccarlar kendi sermayeleriyle değil, ödünç aldıkları güçle iş yapar.",
    cast: ["Dōgen, Kaldıraç Ustası", "Kenji"],
    lesson: [
      "Kaldıraç kazancı değil, hızı büyütür — iflasın hızını da.",
      "Opsiyon alıcısı zamanla savaşır, satıcısı olasılıkla.",
      "Türevin ilk işlevi korunmadır; spekülasyon yan üründür.",
    ],
  },
  {
    no: 9,
    slug: "zihin-dojosu",
    title: "Zihin Dojosu",
    kanji: "心",
    subject: "Trading psikolojisi ve davranışsal önyargılar",
    logline:
      "En güçlü düşman ekranın karşısındaki değil, ekranın önündekidir. Ryō kendi zihniyle yüzleşir.",
    cast: ["Sensei Honma", "Ryō"],
    lesson: [
      "Kayıptan kaçınma: aynı büyüklükteki kayıp, kazançtan yaklaşık iki kat ağır hissedilir.",
      "Doğrulama yanlılığı seni destekleyen veriyi büyütür, çelişeni siler.",
      "İşlem günlüğü tutmayan trader, hafızasını piyasaya emanet etmiştir.",
    ],
  },
  {
    no: 10,
    slug: "makro-firtinasi",
    title: "Makro Fırtınası",
    kanji: "嵐",
    subject: "Faiz, enflasyon ve merkez bankaları",
    logline:
      "Merkez bankası binasında bir tek cümle söylenir ve şehrin bütün grafikleri yön değiştirir.",
    cast: ["Guvernör Shirakawa", "Aiko"],
    lesson: [
      "Faiz paranın fiyatıdır; her varlığın değerlemesi bu fiyata göre yeniden yazılır.",
      "Enflasyon nakit tutanın sessiz vergisidir.",
      "Piyasa haberi değil, beklentiden sapmayı fiyatlar.",
    ],
  },
  {
    no: 11,
    slug: "defi-yeralti-sehri",
    title: "DeFi Yeraltı Şehri",
    kanji: "地下",
    subject: "DeFi, likidite havuzları ve akıllı sözleşme riski",
    logline:
      "Bankasız bir şehirde krediyi kod verir. Kod hata yaparsa temyiz yoktur.",
    cast: ["Amagi Meisa", "Ryō", "Kenji"],
    lesson: [
      "Likidite sağlamak ücret kazandırır; geçici kayıp (impermanent loss) bunu silebilir.",
      "Denetlenmiş sözleşme güvenli değil, daha az kırılgan demektir.",
      "Getirinin kaynağını açıklayamıyorsan, getiri sensin.",
    ],
  },
  {
    no: 12,
    slug: "son-emir",
    title: "Son Emir",
    kanji: "終",
    subject: "Kendi sistemini kurmak ve uzun vadeli plan",
    logline:
      "Ryō artık kimseyi taklit etmiyor. Son bölümde kendi kurallarını yazar ve defteri bir sonrakine bırakır.",
    cast: ["Ryō", "Aiko", "Kenji", "Tōdō"],
    lesson: [
      "Sistem = giriş kuralı + risk kuralı + çıkış kuralı + kayıt. Dördü olmadan sistem yoktur.",
      "Geriye dönük test, geleceğin garantisi değil; hatalarını ucuza yapma yöntemidir.",
      "Bileşik getiri sabrın faizidir; en büyük düşmanı gereksiz işlemdir.",
    ],
  },
];

export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug);
export const readableChapters = chapters.filter((c) => c.pages);
