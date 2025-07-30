function launchConfettiWithSound() {
  launchEmojiBurst();

  confetti({
    particleCount: 200,
    spread: 100,
    startVelocity: 40,
    origin: { y: 0.5 },
    zIndex: 9999,
  });
}

function launchEmojiBurst() {
  const emojis = ['🎉', '🎂', '🎈', '✨', '💖'];
  for (let i = 0; i < 30; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji-particle';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = 1 + Math.random() * 1.5 + 's';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
  }
}

window.addEventListener('load', () => {
  setTimeout(() => {
    launchConfettiWithSound();
  }, 1000);
});

function toggleMusic() {
  const music = document.getElementById('birthdayMusic');
  if (music) {
    music.paused ? music.play() : music.pause();
  }
}

// ------------------- Slideshow -------------------

const slideshowData = [
  { img: "gallery/1.jpg", text: "Grateful for friends like you 💖 #UnforgettableDays #ForeverVibes" },
  { img: "gallery/2.jpg", text: "Garba nights, bright lights, and the best vibes with you 💃🕺" },
  { img: "gallery/3.jpg", text: "Our first ever 1-night stay together…" },
  { img: "gallery/9th-anu.jpg", text: "9th class ka pehla function tha…" },
  { img: "gallery/bevrages-fate.jpg", text: "Bas shakes peene mile the Shantushti pe…" },
  { img: "gallery/dancce-prac.jpg", text: "Met just to ‘make a reel’ — ended up..." },
  { img: "gallery/date_2.jpg", text: "No plans, just vibes — random date..." },
  { img: "gallery/date.jpg", text: "Hum 3 jab bhi milte hain..." },
  { img: "gallery/enjoy.jpg", text: "No outings allowed, so we created our own little hangout zone..." },
  { img: "gallery/enjoyment.jpg", text: "Random clicks, real smiles..." },
  { img: "gallery/fun.jpg", text: "One of your funniest photos…" },
  { img: "gallery/funny.jpg", text: "Clicked it casually..." },
  { img: "gallery/funworld.jpg", text: "Funworld + Hum Teen = Full Pagalpanti Combo!" },
  { img: "gallery/garden.jpg", text: "Hum dono ki pehli perfect photo 📸" },
  { img: "gallery/ghilbli.jpg", text: "Turned ourselves into a Ghibli scene…" },
  { img: "gallery/holi.jpg", text: "Asli Holi tab hoti hai…" },
  { img: "gallery/jethalal.jpg", text: "Ek din ka Jethalal…" },
  { img: "gallery/masti.jpg", text: "Jab dosti bojh nahi…" },
  { img: "gallery/movie1.jpg", text: "Screen pe hero tha…" },
  { img: "gallery/sandwitch.jpg", text: "Sandwich ka taste yaad nahi…" },
  { img: "gallery/saree.png", text: "Saree day with you — picture perfect 🌸" },
  { img: "gallery/smile.png", text: "Bhukh nahi thi, bas photo lena tha 😅" },
  { img: "gallery/sy-anu_2.jpg", text: "Clicked by chance, kept for life 💖" },
  { img: "gallery/movie2.jpg", text: "Saiyara + friends = perfect combo 🌟" },
  { img: "gallery/three.jpg", text: "Ek frame mein teen muskaan…" },
  { img: "gallery/sy-anu.jpg", text: "Candid tha, but emotion 100% real tha 💖" },
  { img: "gallery/three1.jpg", text: "Good friends, better pizza 😄🍕" },
  { img: "gallery/us.jpg", text: "Two people. One bond. No filter needed 💛" },
  { img: "gallery/us1.jpg", text: "Not sisters by blood, but by heart 💖" },
  { img: "gallery/us2.jpg", text: "One selfie. Million memories 💫" },
  { img: "gallery/us3.jpg", text: "Click. Smile. Save forever 🌸" },
  { img: "gallery/us4.jpg", text: "Always my comfort person" },
  { img: "gallery/us5.jpg", text: "Not a great picture, but one of the memorable days 💛" },
  { img: "gallery/us6.jpg", text: "Not posed. Just perfectly us 🫶✨" },
  { img: "gallery/us7.jpg", text: "From silly selfies to serious support — we’ve seen it all 💛" },
  { img: "gallery/vc.png", text: "The group call that started with ‘5 mins’ and ended at 1 AM 😆" },
];

let currentSlide = 0;
let captionTimeout;
let autoAdvanceTimeout;

function startSlideshow(index = 0) {
  const container = document.getElementById('slideshowContainer');
  if (!container) return alert('Slideshow container missing!');

  currentSlide = index;
  document.body.style.overflow = 'hidden';
  container.classList.remove('hidden');
  container.classList.add('visible');
  launchConfettiWithSound();
  showSlide(currentSlide);
}

function showSlide(index) {
  const slide = slideshowData[index];
  const img = document.getElementById('slideImage');
  const text = document.getElementById('slideText');

  clearTimeout(captionTimeout);
  clearTimeout(autoAdvanceTimeout);

  img.src = slide.img;
  text.textContent = '';
  text.classList.remove('visible');

  // Show caption after 1.5s
  captionTimeout = setTimeout(() => {
    text.textContent = slide.text;
    text.classList.add('visible');
  }, 1500);

  // Auto-advance to next slide after 6s
  autoAdvanceTimeout = setTimeout(() => {
    if (currentSlide < slideshowData.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    } else {
      endSlideshow();
    }
  }, 6000);
}

function nextSlide() {
  if (currentSlide < slideshowData.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    endSlideshow();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function endSlideshow() {
  const container = document.getElementById('slideshowContainer');
  clearTimeout(captionTimeout);
  clearTimeout(autoAdvanceTimeout);
  container.classList.remove('visible');
  setTimeout(() => {
    container.classList.add('hidden');
    document.body.style.overflow = '';
    currentSlide = 0;
  }, 800);
}

// ------------------- Scroll arrows -------------------

function scrollGallery(direction) {
  const gallery = document.querySelector('.gallery');
  gallery.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}

// ------------------- Click on photo card -------------------

document.addEventListener('DOMContentLoaded', () => {
  const photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      startSlideshow(index);
    });
  });
});
