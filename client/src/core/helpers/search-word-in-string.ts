export function wordInString(s: string, words: any, replacement: any) {
    var re = new RegExp('\\b' + words.join('|') + '\\b', 'gi');
    return s.replace(re, replacement);
}