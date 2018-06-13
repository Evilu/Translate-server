
 async function WordModel(phrase,lang) {
    switch (lang) {
        case 'english':
            return 'Translate, World!';
        case 'spanish':
            return 'Translate, Mundo!';
        case 'japanese':
            return 'Translate, Sekai!';
        case 'german':
            return 'Translate, Welt!';
        case 'amharic':
            return 'Translate, alemi!';
        case 'zulu':
            return 'Translate, umhlaba!';
        case 'turkish':
            return 'Translate, Dünya!';
        case 'klingon':
             return 'Translate, juHqo!';
        case 'elvish':
             return 'Translate, ambar!';
        case 'Itayish':
             return 'Translate, Ezra!'

        default:
            return 'Waka Waka';
    }
}


export default WordModel;