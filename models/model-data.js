const { Random } = require("random-js");
const baseUrl = 'https://icanhazdadjoke.com/search?limit=30&page=';
const axios = require('axios');
axios.defaults.headers.get['Accept'] = 'application/json'
const pageRange = Array.apply(null, Array(10)).map((_, i) => {return i + 1});

const getJSONData = () => {
    console.log('starting json call');
    let jsonData = [];
        for (let page of pageRange) {
            try {
                pageData = axios.get(baseUrl + page);
                jsonData.concat(pageData.data.results);
            } catch (err){
                console.log(err);
            }
        }
    console.log(jsonData);
    return jsonData;
}

// initialJSONData = getJSONData();

initialJSONData = {
    "current_page": 2,
    "limit": 30,
    "next_page": 3,
    "previous_page": 1,
    "results": [
        {
            "id": "2wP711DAdFd",
            "joke": "Man, I really love my furniture... me and my recliner go way back."
        },
        {
            "id": "2wkykjyIYDd",
            "joke": "What did the traffic light say to the car as it passed? \"Don't look I'm changing!\""
        },
        {
            "id": "39Etc2orc",
            "joke": "Why did the man run around his bed? Because he was trying to catch up on his sleep!"
        },
        {
            "id": "3E6MuHtH6h",
            "joke": "What did one wall say to the other wall? I'll meet you at the corner!"
        },
        {
            "id": "3E6U8UKmbFd",
            "joke": "Sometimes I tuck my knees into my chest and lean forward.  That’s just how I roll."
        },
        {
            "id": "3El3TCYDYob",
            "joke": "Conjunctivitis.com – now that’s a site for sore eyes."
        },
        {
            "id": "3LRCIJY82wc",
            "joke": "How many South Americans does it take to change a lightbulb? A Brazilian"
        },
        {
            "id": "3LmyXvsPfqc",
            "joke": "I don't trust stairs. They're always up to something."
        },
        {
            "id": "3w5wAIRZTnb",
            "joke": "A police officer caught two kids playing with a firework and a car battery. He charged one and let the other one off."
        },
        {
            "id": "41LeN7EImjb",
            "joke": "What is the difference between ignorance and apathy?\r\n\r\nI don't know and I don't care."
        },
        {
            "id": "49xPmW82g",
            "joke": "I went to a Foo Fighters Concert once... It was Everlong..."
        },
        {
            "id": "4EBsPZvP7h",
            "joke": "Some people eat light bulbs. They say it's a nice light snack."
        },
        {
            "id": "4MmjbFlbah",
            "joke": "I cut my finger chopping cheese, but I think that I may have grater problems."
        },
        {
            "id": "4TCAsHJRnjb",
            "joke": "What do you get hanging from Apple trees? Sore arms."
        },
        {
            "id": "4wHB51ws4Ed",
            "joke": "Last night me and my girlfriend watched three DVDs back to back. Luckily I was the one facing the TV."
        },
        {
            "id": "4wciyk3EBAd",
            "joke": "I got a reversible jacket for Christmas, I can't wait to see how it turns out."
        },
        {
            "id": "51DAA5Tfaxc",
            "joke": "What did Romans use to cut pizza before the rolling cutter was invented? Lil Caesars"
        },
        {
            "id": "5M7hF6EItzd",
            "joke": "My pet mouse 'Elvis' died last night. He was caught in a trap.."
        },
        {
            "id": "5T08U8M79pb",
            "joke": "Never take advice from electrons. They are always negative."
        },
        {
            "id": "5TS7pbxcpb",
            "joke": "Why are oranges the smartest fruit? Because they are made to concentrate. "
        },
        {
            "id": "5h399pWLmyd",
            "joke": "What did the beaver say to the tree? It's been nice gnawing you."
        },
        {
            "id": "5hNJexX8prc",
            "joke": "How do you fix a damaged jack-o-lantern? You use a pumpkin patch."
        },
        {
            "id": "5hVDAAIRKuc",
            "joke": "What did the late tomato say to the early tomato? I’ll ketch up"
        },
        {
            "id": "5hyP79pOCd",
            "joke": "I have kleptomania, but when it gets bad, I take something for it."
        },
        {
            "id": "5oGYLZo4Tvc",
            "joke": "I used to be addicted to soap, but I'm clean now."
        },
        {
            "id": "5oWLeFdxkjb",
            "joke": "When is a door not a door? When it's ajar."
        },
        {
            "id": "5wHexPC5hib",
            "joke": "I made a belt out of watches once... It was a waist of time."
        },
        {
            "id": "6EYLBscN7wc",
            "joke": "This furniture store keeps emailing me, all I wanted was one night stand!"
        },
        {
            "id": "6EdFBAsrcpb",
            "joke": "How do you find Will Smith in the snow?  Look for fresh prints."
        },
        {
            "id": "6MZobUfVKuc",
            "joke": "I just read a book about Stockholm syndrome. It was pretty bad at first, but by the end I liked it."
        }
    ],
    "search_term": "",
    "status": 200,
    "total_jokes": 549,
    "total_pages": 18
}

module.exports = initialJSONData;