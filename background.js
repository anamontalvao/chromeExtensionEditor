// Função para transformar todo o texto selecionado em lower case
function toLowerCase() {
    document.execCommand("lowercase");
}

// Função para transformar todo o texto selecionado em upper case
function toUpperCase() {
    document.execCommand("uppercase");
}

// Função para colocar cada primeira letra em upper case e as outras em lower case com exceção das palavras com apenas uma letra
function capitalize() {
    let selectedText = window.getSelection().toString();
    let words = selectedText.split(" ");
    let capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length == 1) {
            capitalizedWords.push(word.toLowerCase());
        } else {
            capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        }
    }

    let capitalizedText = capitalizedWords.join(" ");
    document.execCommand("insertText", false, capitalizedText);
}

// Adicionando atalhos de teclado para cada função
chrome.commands.onCommand.addListener(function(command) {
    if (command == "to-lower-case") {
        toLowerCase();
    } else if (command == "to-upper-case") {
        toUpperCase();
    } else if (command == "capitalize") {
        capitalize();
    }
});
