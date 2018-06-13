import {WordModel} from '../models/index';
export default function (phrase: string = null, lang: string) {
    return new Promise((resolve, reject) => {
        if(!phrase || !lang) {
            reject('Both phrase and lang are required');
        }

        resolve(WordModel(phrase,lang));
    });
}

