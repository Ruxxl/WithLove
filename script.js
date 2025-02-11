const predictions = [
    { ar: "سامحني و حبني دائماً", ru: "Прости меня и люби всегда ❤️" },
    { ar: "أنت روحي و حياتي", ru: "Ты – моя душа и жизнь 💖" },
    { ar: "كل يوم معك هو نعمة", ru: "Каждый день с тобой – это благословение ☀️" },
    { ar: "أنت مثل القمر في سمائي", ru: "Ты как луна в моем небе 🌙" },
    { ar: "حبي لك لا ينتهي", ru: "Моя любовь к тебе бесконечна 💞" },
    { ar: "في عينيك أرى عالمي", ru: "В твоих глазах я вижу свой мир 👀💫" },
    { ar: "أنتِ كنزي الثمين", ru: "Ты – мое драгоценное сокровище 💎" },
    { ar: "أحبك أكثر مما تتخيل", ru: "Я люблю тебя больше, чем ты можешь представить 💓" },
    { ar: "كل لحظة معك هي سعادة", ru: "Каждое мгновение с тобой – это счастье 🌸" },
    { ar: "أنتِ أجمل هدية من الحياة", ru: "Ты – самый прекрасный подарок от жизни 🎁" },
    { ar: "صوتك موسيقى قلبي", ru: "Твой голос – это музыка моего сердца 🎶❤️" },
    { ar: "لا شيء في العالم أغلى منك", ru: "Нет ничего в мире дороже тебя 💖" },
    { ar: "الحياة جميلة لأنكِ فيها", ru: "Жизнь прекрасна, потому что в ней есть ты 🌹" },
    { ar: "أنتِ زهرتي الجميلة", ru: "Ты – мой прекрасный цветок 🌷" },
    { ar: "حلمي الوحيد هو أن أبقى معكِ للأبد", ru: "Моя единственная мечта – быть с тобой вечно 💏" },
    { ar: "لا تخافي من المستقبل، فأنا معكِ دائمًا", ru: "Не бойся будущего, ведь я всегда с тобой 💕" },
    { ar: "أنتِ أقوى مما تعتقدين", ru: "Ты сильнее, чем думаешь 💪💖" },
    { ar: "في قلبكِ يكمن سر السعادة", ru: "В твоём сердце скрыт секрет счастья 💞" },
    { ar: "لا يوجد حب أجمل من حبكِ", ru: "Нет любви прекраснее твоей 💓" },
    { ar: "ابتسامتكِ تضيء حياتي", ru: "Твоя улыбка освещает мою жизнь 😍" },
    { ar: "أنتِ أغنيتي المفضلة", ru: "Ты – моя любимая песня 🎼❤️" },
    { ar: "أنتِ السبب في سعادتي", ru: "Ты – причина моего счастья 😊💖" },
    { ar: "أحبكِ حتى آخر نبضة في قلبي", ru: "Я буду любить тебя до последнего удара сердца 💓" },
    { ar: "أنتِ الملاك الذي أرسله الله لي", ru: "Ты – ангел, которого послал мне Бог 👼❤️" },
    { ar: "لا يوجد شخص في العالم يشبهكِ", ru: "В мире нет никого, похожего на тебя ✨" },
    { ar: "أنتِ عالمي بأكمله", ru: "Ты – весь мой мир 🌍💖" },
    { ar: "لو كان الحب كلمة، لكانت اسمكِ", ru: "Если бы любовь была словом, она была бы твоим именем 💞" },
    { ar: "أنتِ سبب نبضي و حياتي", ru: "Ты – причина, по которой бьётся моё сердце 💘" },
    { ar: "لا تتركي أحلامكِ، فأنا معكِ لتحقيقها", ru: "Не оставляй свои мечты, я с тобой, чтобы их осуществить 💫" },
    { ar: "كل دقيقة معكِ هي معجزة", ru: "Каждая минута с тобой – это чудо ✨" },
    { ar: "أنتِ الشمس التي تضيء أيامي", ru: "Ты – солнце, которое освещает мои дни ☀️" },
    { ar: "قلبي لا يعرف سوى حبكِ", ru: "Моё сердце знает только твою любовь 💖" },
    { ar: "عندما أكون معكِ، أشعر أنني في الجنة", ru: "Когда я с тобой, я чувствую себя в раю 😇" },
    { ar: "حبي لكِ يكبر مع كل يوم", ru: "Моя любовь к тебе растёт с каждым днём 🌱💘" },
    { ar: "عيناكِ تروي لي ألف قصة حب", ru: "Твои глаза рассказывают мне тысячу историй любви 👀💖" },
    { ar: "كل صباح معكِ هو بداية حلم جميل", ru: "Каждое утро с тобой – это начало прекрасной мечты 🌅" },
    { ar: "أنتِ السبب في كل لحظة جميلة في حياتي", ru: "Ты – причина каждого прекрасного мгновения в моей жизни 💫" },
    { ar: "كل شيء فيكِ يجذبني", ru: "Всё в тебе привлекает меня 💓" },
    { ar: "أنتِ ملكة قلبي", ru: "Ты – королева моего сердца 👑❤️" },
    { ar: "وجودكِ في حياتي هو أعظم نعمة", ru: "Твоё присутствие в моей жизни – величайшее благословение 🙏❤️" },
    { ar: "عندما أحببتكِ، اكتشفت المعنى الحقيقي للسعادة", ru: "Полюбив тебя, я понял истинный смысл счастья 😊💖" },
    { ar: "لن أدع يدكِ أبدًا", ru: "Я никогда не отпущу твою руку 🤝💞" },
    { ar: "أنتِ روحي ونبض قلبي", ru: "Ты – моя душа и биение моего сердца 💓" },
    { ar: "حبكِ يجعلني أقوى", ru: "Твоя любовь делает меня сильнее 💪❤️" },
    { ar: "أجمل ما في حياتي هو أنتِ", ru: "Самое прекрасное в моей жизни – это ты 🌹" },
    { ar: "أنتِ الحب الذي كنتُ أبحث عنه", ru: "Ты – та любовь, которую я искал всю жизнь 💕" },
    { ar: "سأكون دائمًا بجانبكِ مهما حدث", ru: "Я всегда буду рядом с тобой, что бы ни случилось 🤗💖" },
    { ar: "أنتِ كل ما تمنيتُه", ru: "Ты – всё, о чём я мечтал 💭❤️" },
    { ar: "حياتي تبدأ وتنتهي بكِ", ru: "Моя жизнь начинается и заканчивается тобой 💞" },
    { ar: "لا يمكنني تخيل حياتي بدونكِ", ru: "Я не могу представить свою жизнь без тебя 🥰" },
    { ar: "كل حب في الدنيا صغير أمام حبكِ", ru: "Вся любовь в мире ничто по сравнению с твоей 💖" }
];

const btn = document.getElementById("predictBtn");
const predictionBox = document.getElementById("predictionBox");
const predictionTextAr = document.getElementById("predictionTextAr");
const predictionTextRu = document.getElementById("predictionTextRu");
const countdown = document.getElementById("countdown");
const greeting = document.getElementById("greeting"); // Приветствие

function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function updateCountdown(endTime) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            localStorage.removeItem("prediction");
            localStorage.removeItem("endTime");
            location.reload();
        } else {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdown.innerText = `Следующее предсказание через: ${hours}ч ${minutes}м ${seconds}с`;
        }
    }, 1000);
}

btn.addEventListener("click", () => {
    let storedPrediction = JSON.parse(localStorage.getItem("prediction"));
    let endTime = localStorage.getItem("endTime");

    if (!storedPrediction || !endTime || new Date().getTime() > endTime) {
        storedPrediction = getRandomPrediction();
        endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 5 секунд вместо 24 часов

        localStorage.setItem("prediction", JSON.stringify(storedPrediction));
        localStorage.setItem("endTime", endTime);
    }

    predictionTextAr.innerText = storedPrediction.ar;
    predictionTextRu.innerText = storedPrediction.ru;
    predictionBox.classList.remove("hidden");
    document.body.classList.add("prediction-shown")
    btn.style.display = "none"; 
    greeting.style.display = "none";// Скрываем кнопку после показа предсказания
    updateCountdown(endTime);
});

// Если предсказание уже есть, показываем его
window.onload = () => {
    let storedPrediction = JSON.parse(localStorage.getItem("prediction"));
    let endTime = localStorage.getItem("endTime");

    if (storedPrediction && endTime && new Date().getTime() < endTime) {
        predictionTextAr.innerText = storedPrediction.ar;
        predictionTextRu.innerText = storedPrediction.ru;
        predictionBox.classList.remove("hidden");
        btn.style.display = "none"; 
        greeting.style.display = "none";
        document.body.classList.add("prediction-shown");// Кнопка сразу скрывается, если есть предсказание
        updateCountdown(endTime);
    }
};
