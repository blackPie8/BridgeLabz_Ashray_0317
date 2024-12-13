// returns an array with words inside a text

const text = "  Hello,     I am a CSE student   "

function texttoWords(text){
    let wordArr = text.trim().split(/\s+/)  // remove multiple consecutive spaces, tabs, or newlines
    return wordArr
}
console.log(texttoWords(text));
