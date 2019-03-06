
const jokesFrequencyTable = require('./markov-chain-dict');
const buckets = require('buckets-js');
const { Random } = require('random-js');
const random = new Random();
let punctuationCount = 0

const convertArrayToDict = (jokesFrequencyTable) => {
    let frequencyDict = buckets.Dictionary();

    for (const item of jokesFrequencyTable) {
        frequencyDict.set(item.key, item.values);
    }
    return frequencyDict;
}

const getInitialWord = (availableWords, startingIndex) => {
    let word = availableWords[startingIndex];
    let notCapitalized = true;
    const regexp = /^[A-Z]/;
    
    while (notCapitalized) {
        if(regexp.test(word)){
            notCapitalized = false;
            break;
        } else {
            word = availableWords[startingIndex + 1];
            if (word === undefined) {
                word = availableWords[0];
            }
        }
    }
    return word;
}

const generateDadJoke = (frequencyTable, startingArray) => {
    let jokeArray = startingArray;
    let randomIndex = 0;
    const startingWord = jokeArray[jokeArray.length - 1]
    

    if (startingWord.indexOf('.') > -1 || startingWord.indexOf('!') > -1 || startingWord.indexOf('?') > -1) {
        punctuationCount += 1;
    }

    if (punctuationCount >= 2) {
        return jokeArray;
    }

    const subsequentWords = frequencyTable.get(startingWord);
    if (!subsequentWords) {
        return jokeArray;
    }

    if (subsequentWords.length > 1) {
        randomIndex = random.integer(0, subsequentWords.length - 1);
    }

    const nextWord = subsequentWords[randomIndex];
    jokeArray.push(nextWord);

    finalJokeArray = generateDadJoke(frequencyTable, jokeArray); 
    return finalJokeArray;
}

const formatDadJokeArray = (array) => {


    return array.join(' ');
}


const getDadJoke = () => {
    const frequencyTable = convertArrayToDict(jokesFrequencyTable);
    const initialStartingIndex = random.integer(0, frequencyTable.size());
    const initialWord = getInitialWord(frequencyTable.keys(), initialStartingIndex);
    const dadJokeArray = generateDadJoke(frequencyTable, [initialWord]);
    const formattedDadJoke = formatDadJokeArray(dadJokeArray);
    console.log(formattedDadJoke);
    return formattedDadJoke;
}

module.exports = getDadJoke;