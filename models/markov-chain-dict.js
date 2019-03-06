const data = require('./model-data');
const buckets = require('buckets-js');


const createJokeArray = data => {
    return  data.results.map(result => {
        return result.joke;
    })
}

const createWordTable = jokes => {
    
    let wordTable = [];
    let wordSet = [];

    for (let i = 0; i < jokes.length; i++){
        let jokeWords = jokes[i].split(' ');
        jokeWords.map(word => {
            if (!wordSet.includes(word)) {
                wordSet.push(word);
            }
            wordTable.push(word);
            return;
        });
    }
    const frequencyTable = createFrequencyTable(wordTable, wordSet);

    return frequencyTable;
}

 const createFrequencyTable = (wordTable, wordSet) => {
    let frequencyTable = buckets.Dictionary();
    wordSet.map(word => {
        const key = word;
        let nextWords = [];

        const wordIndeces = wordTable.map((e, i) => e === word ? i : '').filter(String)
        subsequentWordIndeces = wordIndeces.map(idx => idx + 1);
        nextWords = wordTable.filter((word, idx) => {
            if (subsequentWordIndeces.includes(idx)){
                return nextWords.push(word);
            }
        })
        frequencyTable.set(key, nextWords);
    });

    return frequencyTable;
 }

const formatTableData = data => {
    const jokes = createJokeArray(data);
    const frequencyTable = createWordTable(jokes);

    const newFrequencyTable = []
    frequencyTable.forEach(key => {
        const values = frequencyTable.get(key);
        newFrequencyTable.push({ 'key': key,
            'values': values});
    });
    return newFrequencyTable;
}


module.exports = formatTableData(data);