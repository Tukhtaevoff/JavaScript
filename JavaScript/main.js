const contractEl = 2000;

const superContractEl = 3000;

const text = document.querySelector(".text");

const scoreEl = +prompt("Balingizni kiriting 👉 (Maximal 200 ball)");

if (scoreEl > 200) {
    text.textContent = "Uzr bizda bunday katta ball mavjud emas 🤦‍♂️"
}  else if (scoreEl >= 150) {
    text.textContent = "Tabriklaymiz siz Grand asosida o'qishga qabul qilindingiz 🙌"
} else if ( scoreEl < 150 && scoreEl >= 100 ) {
    const contractBudget = +prompt("Siz o'qishga kontrakt asosida tavsiya qilindingiz. Iltimos mablag'ingizni kiriting $");
    if ( contractBudget >= contractEl ) {
        text.textContent = "Tabriklaymiz, siz o'qishga kontrakt asosida qabul qilindingiz 👍"
    } else {
        text.textContent = "Uzr Biz sizni o'qishga kontrakt asosida qabul qilolmaymiz, Mablag'ingiz kamlik qiladi 😞"
    }
} else if ( scoreEl < 100 && scoreEl >= 80 ) {
    const superContractBudget = +prompt("Siz o'qishga Super kontrakt asosida tavsiya qilindingiz. Iltimos mablag'ingizni kiriting $");
    if ( superContractBudget >= superContractEl ) {
        text.textContent = "Tabriklaymiz, siz o'qishga Super kontrakt asosida qabul qilindingiz 😉"
    } else {
        text.textContent = "Uzr biz sizni o'qishga super kontrakt asosida qabul qilomaymiz, Mablag'ingiz ozgina kamlik qilyapti 😔"
    }
} else if ( scoreEl < 80 && scoreEl > 0 ) {
    text.textContent = "Afsuski O'qishga kira olmadingiz, sizdan yanada ko'proq harakat qilishingizni so'rab qolardik ✌️"
} else {
    text.textContent = "Bizni ahmoq deb o'ylayapsizmi😡"
}
