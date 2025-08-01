// script.js

// ===== ЯЗЫК =====
const langToggle = document.getElementById("lang-toggle");
const langEn = document.getElementById("lang-en");
const langRu = document.getElementById("lang-ru");

// Установка языка по умолчанию
function setLanguage(lang) {
  if (lang === "ru") {
    langRu.style.display = "block";
    langEn.style.display = "none";
    langToggle.textContent = "🇬🇧 English / Русский 🇷🇺";
  } else {
    langEn.style.display = "block";
    langRu.style.display = "none";
    langToggle.textContent = "🇬🇧 English / Русский 🇷🇺";
  }
  localStorage.setItem("lang", lang);
}

// Проверка и установка языка при загрузке
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

// Обработка переключения
langToggle.addEventListener("click", () => {
  const currentLang = localStorage.getItem("lang") || "en";
  const newLang = currentLang === "en" ? "ru" : "en";
  setLanguage(newLang);
});


// ===== ОБРАТНЫЙ ОТСЧЁТ =====

function startCountdown(targetDate) {
  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Обновить оба таймера
    document.querySelectorAll("#days").forEach(el => el.textContent = String(days).padStart(2, '0'));
    document.querySelectorAll("#hours").forEach(el => el.textContent = String(hours).padStart(2, '0'));
    document.querySelectorAll("#minutes").forEach(el => el.textContent = String(minutes).padStart(2, '0'));
    document.querySelectorAll("#seconds").forEach(el => el.textContent = String(seconds).padStart(2, '0'));

    if (distance < 0) {
      clearInterval(interval);
      document.querySelectorAll("#timer").forEach(el => el.textContent = "Race Started!");
    }
  }

  updateTimer(); // начальное обновление
  const interval = setInterval(updateTimer, 1000);
}

// Установи свою дату старта гонки (в формате: ГГГГ, ММ (0-11), ДД)
const nextRaceDate = new Date(2025, 7, 10, 18, 0, 0); // 10 августа 2025 18:00
startCountdown(nextRaceDate);
