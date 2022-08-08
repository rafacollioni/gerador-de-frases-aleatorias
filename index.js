const Quote = document.querySelector('p'),
quoteBtn = document.querySelector('button'),
author = document.querySelector('.author'),
soundBtn = document.querySelector('.fa-volume-high'),
twitterBtn = document.querySelector('.fa-twitter'),
copyBtn = document.querySelector('.fa-copy');

quoteBtn.addEventListener('click', quoteGenerator)
function quoteGenerator(){
    Quote.innerText = "Carregando Frase...";
    quoteBtn.innerText = "Carregando";
    fetch ("https://api.quotable.io/random").
    then((res) => res.json()).
    then(result =>{
        Quote.innerText = result.content;
        author.innerText = result.author;
        
    })
    quoteBtn.innerText = "Nova Frase";
}

soundBtn.addEventListener('click', textToSpeech)
function textToSpeech(){
    let utterance = new  SpeechSynthesisUtterance(`${Quote.innerText}`);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}