const phrasehttp ='https://type.fit/api/quotes';

const searchPhrase = async () => {
    const response = await fetch (phrasehttp);
    const phrase = await response.json();
    const randomPhrase = phrase[Math.floor(Math.random()*phrase.length)]
        
    if (randomPhrase.author === null){
        randomPhrase.author = 'Desconocido'        
    }
    
    const body = document.body;
    const crearPhraseHtml = () => {
    const htmlPhrase = 
    `
    <h3> ¡ ${randomPhrase.text} ! </h3>
    <h3> - Author: ${randomPhrase.author} </h3>    
    `
    const divPhrase = document.createElement('div');
    divPhrase.innerHTML = htmlPhrase;

    body.append(divPhrase);
}
crearPhraseHtml()
}








