const popSound = new Audio('sounds/pop.mp3');

function playClickSound() {
  popSound.currentTime = 0;
  popSound.play();
}

function launchConfettiWithSound() {
  playClickSound();
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

window.addEventListener('click', unlockAudio, { once: true });

function unlockAudio() {
  const audio = document.createElement('audio');
  audio.src = 'sounds/pop.mp3';
  audio.muted = true;
  audio.play().then(() => console.log('Audio unlocked'))
    .catch(err => console.log('Audio unlock failed:', err));
}

window.addEventListener('load', () => {
  setTimeout(() => {
    launchConfettiWithSound();
  }, 1000);
});

function toggleMusic() {
  const music = document.getElementById('birthdayMusic');
  music.paused ? music.play() : music.pause();
}

// ------------------- Slideshow -------------------

const slideshowData = [
  { img: "image/1.JPG", text: "Grateful for friends like you 💖 #UnforgettableDays #ForeverVibes", song: "music/slide1.mp3" },
  { img: "image/2.JPG", text: "Garba nights, bright lights, and the best vibes with you 💃🕺", song: "music/slide2.mp3" },
  { img: "image/3.JPG", text: "Our first ever 1-night stay together…From late-night talks to endless laughter,from shared secrets to shared snacks 🍿🌙These moments turned into memories we’ll cherish forever.Grateful for this beautiful bond 💫", song: "music/slide3.mp3" },
  { img: "image/9th-anu.jpg", text: "9th class ka pehla function tha…Thoda tension, zyada attention! 😜Stage par jitna chamke, usse zyada yaadein ban gayi!School ke best din shuru yahi se hue 💖", song: "music/slide4.mp3" },
  { img: "image/bevrages-fate.jpg",
     text: "Bas shakes peene mile the Shantushti pe aur plan ban gaya pehli raat saath bitane ka! 🤭Random milna, real planning — Yeh dosti bhi alag hi level pe hai 💕#ShakeDateToSleepover #Yaariyaan", 
    song: "music/slide5.mp3" },
  { img: "image/dancce-prac.JPG", text: "Met just to ‘make a reel’ — ended up:✨ Laughing too much✨ Forgetting steps✨ Doing 27 takes✨ Creating core memoriesTrio energy hits different 🔥#ReelPracticeGoneWild #UnplannedFun", song: "music/slide6.mp3" },
  { img: "image/date (2).JPG", text: "No plans, just vibes —random date at Size Zero turned into the best kind of therapy 💚Good food, good mood, even better company!", song: "music/slide7.mp3" },
  { img: "image/date.JPG", text: "Hum 3 jab bhi milte hain,na jagah important hoti hai, na time…Bas ek doosre ki company hi kaafi hoti hai ❤️", song: "music/slide8.mp3" },
  { img: "image/enjoy.jpg", text: "No outings allowed, so we created our own little hangout zone at home 🛋️Just us, snacks, old stories, and a day full of warmth and laughter 🤭", song: "music/slide9.mp3" },
  { img: "image/enjoyment.JPG", text: "Random clicks, real smiles,and memories that’ll stay long after college ends 💕", song: "music/slide10.mp3" },
  { img: "image/fun.jpg", text: "One of your funniest photos…and yes, I stole it! 😈📸Couldn’t resist — it’s just too iconic 😂", song: "music/slide11.mp3" },
  { img: "image/funny.jpg", text: "Clicked it casually.Now it’s the highlight of my entire gallery 🤣", song: "music/slide12.mp3" },
  { img: "image/funworld.jpg", text: "Funworld + Hum Teen = Full Pagalpanti Combo! 🤪Rides pe cheekhna, golgappe khana, aur har moment ka maze lena!Aise trips repeat hone chahiye boss!", song: "music/slide13.mp3" },
  { img: "image/garden.jpg", text: "Hum dono ki pehli perfect photo 📸✨Na awkward pose, na blur…bas ek frame, do muskaan, aur ek yaad hamesha ke liye ❤️", song: "music/slide14.mp3" },
  { img: "image/ghilbli.JPG", text: "Turned ourselves into a Ghibli scene…because real moments deserve a little magic ✨🌿", song: "music/slide15.mp3" },
  { img: "image/holi.jpg", text: "Asli Holi tab hoti hai jab rangon ke saath yaariyaan bhi bikhar jaaye 😜💥First Holi together and we made it legendary", song: "music/slide16.mp3" },
  { img: "image/jethalal.jpg", text: "Ek din ka Jethalal,lifetime ki yaadein! 😜Bas missing thi ek Daya aur thoda garba 😂", song: "music/slide17.mp3" },
  { img: "image/masti.JPG", text: "Jab dosti bojh nahi,toh dost ko utha lena bhi easy lagta hai! 😂🙌Ek photo mein uthaya, yaari mein toh kab se sambhaal rahe hain 😜", song: "music/slide18.mp3" },
  { img: "image/movie1.JPG", text: "Screen pe hero tha,par camera ne hum logon ko hi capture kar liya! 😎🎞️", song: "music/slide19.mp3" },
  // { img: "image/random.jpg", text: "", song: "music/slide20.mp3" },
  { img: "image/sandwitch.jpg", text: "Sandwich ka taste yaad nahi,par us din ki hasi ab bhi yaad hai 🥹Friends > Food, always!", song: "music/slide21.mp3" },
  { img: "image/saree.PNG", text: "Saree day with you — picture perfect 🌸", song: "music/slide22.mp3" },
  { img: "image/smile.PNG", text: "Bhukh nahi thi, bas photo lena tha 😅📸 @crush & crave", song: "music/slide23.mp3" },
  { img: "image/sy-anu (2).jpg", text: "Clicked by chance, kept for life 💖", song: "music/slide24.mp3" },
  { img: "image/movie2.jpg", text: "Saiyara + friends = perfect combo 🌟", song: "music/slide25.mp3" },
  { img: "image/three.jpg", text: "Ek frame mein teen muskaan — bas kaafi hai! 📷❤️", song: "music/slide26.mp3" },
  { img: "image/sy-anu.jpg", text: "Candid tha, but emotion 100% real tha 💖", song: "music/slide27.mp3" },
  { img: "image/three1.JPG", text: "Good friends, better pizza 😄🍕", song: "music/slide28.mp3" },
  { img: "image/us.jpg", text: "Two people. One bond. No filter needed 💛", song: "music/slide29.mp3" },
  { img: "image/us1.jpg", text: "Not sisters by blood, but by heart 💖", song: "music/slide30.mp3" },
  { img: "image/us2.JPG", text: "One selfie. Million memories 💫", song: "music/slide31.mp3" },
  { img: "image/us3.jpg", text: "Click. Smile. Save forever 🌸", song: "music/slide32.mp3" },
  { img: "image/us4.jpg", text: "Always my comfort person", song: "music/slide33.mp3" },
  { img: "image/us5.jpg", text: "Not a great picture, but one of the memorable day 💛", song: "music/slide34.mp3" },
  { img: "image/us6.jpg", text: "Not posed. Just perfectly us 🫶✨", song: "music/slide35.mp3" },
  { img: "image/us7.JPG", text: "From silly selfies to serious support — we’ve seen it all 💛", song: "music/slide36.mp3" },
  { img: "image/vc.PNG", text: "The group call that started with ‘5 mins’ and ended at 1 AM 😆📱", song: "music/slide37.mp3" },
  // { img: "image/9th-anu.jpg", text: "", song: "music/slide38.mp3" }
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
  const audio = document.getElementById('slideAudio');

  clearTimeout(captionTimeout);
  clearTimeout(autoAdvanceTimeout);

  img.src = slide.img;
  text.textContent = '';
  text.classList.remove('visible');
  audio.src = slide.song;
  audio.play();

  // Show caption after 1.5s
  captionTimeout = setTimeout(() => {
    text.textContent = slide.text;
    text.classList.add('visible');
  }, 1500);

  // Go to next slide after 4s
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
  const audio = document.getElementById('slideAudio');

  clearTimeout(captionTimeout);
  clearTimeout(autoAdvanceTimeout);

  container.classList.remove('visible');
  setTimeout(() => {
    container.classList.add('hidden');
    document.body.style.overflow = '';
    audio.pause();
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

// Automatically play birthday music after any click (first time only)
window.addEventListener('click', () => {
  const bgMusic = document.getElementById('birthdayMusic');
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => {
      console.log("Autoplay blocked, user needs to click again.");
    });
  }
}, { once: true });
