const pronoun = (str) => {
    let pronouns = ["i", "you", "she", "they", "it", "he", "we"];
    let result = {};
    let words = str.toLowerCase().split(/\s+|,|\n/).filter(word => word !== '');
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (pronouns.includes(word)) {
            if (!result[word]) {
                result[word] = {word: [], count: 0};
            }
            result[word].count++;
            if (i + 1 < words.length && !pronouns.includes(words[i+1])) {
                if (!result[word].word.includes(words[i+1])) {
                    result[word].word.push(words[i+1]);
                }
            }
        }
    }
    return result;
};