const AVAILABLE_LANGUAGES = ['english', 'spanish','japanese','german','amharic','zulu','turkish'];

export default function LanguageService() {
    return new Promise((resolve, reject) => {
       return resolve(AVAILABLE_LANGUAGES);
    });
}