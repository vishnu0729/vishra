const messages = [
    "Ramya Are you sure?",
    "Really sure aa d ??",
    "Nejama thaa solriyaa cheloo?",
    "Bby please...",
    "Just think about it! Chelooo",
    "If you say no, my manasu will broke..",
    "Yes slu cheloo...",
    "Aii mundaa olungaa yes slu d ..",
    "Buttkuttyy...please d chello",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please my love!...Ramyaa maa ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
