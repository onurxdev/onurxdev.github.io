const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "EVEETTT! EVET DEDİİİ!!! DATE DE GORUSURUZ!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  noBtn.remove();
  // Asagidaki date fikirlerinden birini yapabiliriz bakalim bakalimmm ne gelicek 
  const dateIdeas = [
    "Romantik bir akşam yemeği pişirin",
    "Sahilde ay ışığında yürüyüş yapın",
    "Parkta piknik yapın",
    "Birlikte dans dersi alın",
    "Arka bahçede yıldızlara bakın",
    "Sıcak hava balonuna binin",
    "Botanik bahçesini keşfedin",
    "Açık hava konserine katılın",
    "Sanat galerisini ziyaret edin",
    "Rahat bir kulübeye hafta sonu kaçamağı yapın",
    "Birlikte yemek kursuna katılın",
    "Evde film maratonu gecesi planlayın",
    "Manzaralı bir tren yolculuğuna çıkın",
    "At binmeye gidin",
    "Yerel bir şaraphaneyi ziyaret edip şarap tadımı yapın",
    "Kano veya kayak yapın",
    "Bir komedi şovuna katılın",
    "Manzaralı bir yürüyüş yapıp piknik yapın",
    "Gün doğumu veya gün batımı fotoğraf çekimi yapın",
    "Yerel çiftçi pazarını ziyaret edin",
    "Tarihi bir mahalleyi keşfedin",
    "Birlikte dans dersi alın",
    "Evde kendin yap spa gecesi yapın",
    "Birlikte bisiklet sürün",
    "Evde temalı bir akşam yemeği gecesi planlayın",
    "Canlı bir tiyatro gösterisine katılın",
    "Manzaralı bir sürüş yapın",
    "Yerel bir çikolata veya tatlı dükkanını ziyaret edin",
    "Seramik veya çömlek kursuna katılın",
    "Yerel bir spor maçına katılın",
    "Yakındaki bir şehre günlük gezi yapın",
    "Evde veya yerel bir mekanda karaoke gecesi yapın",
    "Yerel bir festival veya fuara katılın",
    "Manzaralı bir tekne turuna çıkın",
    "Yerel bir kitapçıyı ziyaret edip birbirinize kitap seçin",
    "Yerel bir parkta piknik yapın",
    "Birlikte fotoğrafçılık atölyesine katılın",
    "Yeni bir yürüyüş parkurunu keşfedin",
    "Şarap ve resim gecesine katılın",
    "Yakındaki bir plajı veya gölü ziyaret edin",
    "Evde masa oyunları veya kart oyunları ile oyun gecesi planlayın",
    "Seramik veya çömlek kursuna katılın",
    "Yerel bir barda bilgi yarışması gecesine katılın",
    "Sıcak hava balonuna binin",
    "Manzaralı bir tren yolculuğuna çıkın",
    "Favori filmlerinizle bir film gecesi planlayın",
    "Helikopter turuna çıkın",
    "Açık hava konserine katılın",
    "Yerel bir sanat galerisini ziyaret edin",
    "Bira fabrikası turuna katılın",
    "Kırsalda manzaralı bir sürüş yapın",
    "Bir komedi şovuna katılın",
    "Yerel botanik bahçesini ziyaret edin",
    "Bağda piknik yapın",
    "Birlikte yemek kursuna katılın",
    "Nehir gezisine çıkın",
    "Rahat bir kulübeye hafta sonu kaçamağı planlayın",
    "Birlikte dans dersi alın",
    "Yakındaki bir milli parka günlük gezi yapın",
    "Manzaralı bir patikada bisiklet sürün",
    "Yerel bir müzeyi ziyaret edin",
    "Evde kendin yap spa günü yapın",
    "Canlı bir tiyatro gösterisine katılın",
    "Manzaralı bir yürüyüş yapıp piknik yapın",
    "Birlikte resim kursuna katılın",
    "Yerel çiftçi pazarını ziyaret edin",
    "Tarihi bir mahalleyi keşfedin",
    "At binmeye gidin",
    "Evde temalı bir akşam yemeği gecesi yapın",
    "Yerel bir spor maçına katılın",
    "Yakındaki bir şehre günlük gezi planlayın",
    "Evde veya yerel bir mekanda karaoke gecesi yapın",
    "Şarap ve peynir tadımına katılın",
    "Yerel bir çikolata veya tatlı dükkanını ziyaret edin",
    "Seramik veya çömlek kursuna katılın",
    "Canlı müzik performansına katılın",
    "Tekne turuna çıkın",
    "Yerel bir kitapçıyı ziyaret edip birbirinize kitap seçin",
    "Birlikte fotoğrafçılık atölyesine katılın",
    "Yeni bir yürüyüş parkurunu keşfedin",
    "Şarap ve resim gecesine katılın",
    "Yakındaki bir plajı veya gölü ziyaret edin",
    "Evde masa oyunları veya kart oyunları ile oyun gecesi planlayın",
    "Seramik veya çömlek kursuna katılın",
    "Yerel bir barda bilgi yarışması gecesine katılın",
    "Sıcak hava balonuna binin",
    "Manzaralı bir tren yolculuğuna çıkın",
    "Favori filmlerinizle bir film gecesi planlayın",
    "Helikopter turuna çıkın",
    "Açık hava konserine katılın",
    "Yerel bir sanat galerisini ziyaret edin",
    "Bira fabrikası turuna katılın",
    "Kırsalda manzaralı bir sürüş yapın",
    "Bir komedi şovuna katılın",
    "Yerel botanik bahçesini ziyaret edin",
    "Bağda piknik yapın",
    "Birlikte yemek kursuna katılın",
    "Nehir gezisine çıkın",
    "Rahat bir kulübeye hafta sonu kaçamağı planlayın",
    "Birlikte dans dersi alın",
];


  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn");
  letsGoBtn.style.position = "absolute";

  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px";

  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`Randomly chosen date idea: ${selectedDateIdea}`);
  });

  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);

