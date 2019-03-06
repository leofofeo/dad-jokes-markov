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
        },
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
            "id": "6MZor4T79pb",
            "joke": "Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady."
        },
        {
            "id": "6U0DIBAlbxc",
            "joke": "If at first you don't succeed, sky diving is not for you!"
        },
        {
            "id": "71gF6wHBsrc",
            "joke": "A book just fell on my head. I only have my shelf to blame."
        },
        {
            "id": "71wsPKeF6h",
            "joke": "What did the dog say to the two trees? Bark bark."
        },
        {
            "id": "7MZ0LR7UfFd",
            "joke": "Why can't your nose be 12 inches long? Because then it'd be a foot!"
        },
        {
            "id": "7U89MJeFdib",
            "joke": "Have you ever heard of a music group called Cellophane? They mostly wrap."
        },
        {
            "id": "7Ufi31gydFd",
            "joke": "What did the mountain climber name his son? Cliff."
        },
        {
            "id": "7UnjNRfapzd",
            "joke": "Why should you never trust a pig with a secret? Because it's bound to squeal."
        },
        {
            "id": "7Uvc29hFIBd",
            "joke": "Why are mummys scared of vacation? They're afraid to unwind."
        },
        {
            "id": "7h3oGtrOfxc",
            "joke": "Whiteboards ... are remarkable."
        },
        {
            "id": "7hNuz5MeVnb",
            "joke": "What kind of dinosaur loves to sleep? A stega-snore-us."
        },
        {
            "id": "7wciy59MJe",
            "joke": "What’s Forest Gump’s Facebook password? 1forest1"
        },
        {
            "id": "82LBXSfaFlb",
            "joke": "What kind of tree fits in your hand? A palm tree!"
        },
        {
            "id": "82TnORSK6wc",
            "joke": "Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies, ‘No, just leave it in the carton!’"
        },
        {
            "id": "82gqciGBdFd",
            "joke": "I used to be addicted to the hokey pokey, but I turned myself around."
        },
        {
            "id": "82wAAI6pbh",
            "joke": "How many tickles does it take to tickle an octopus? Ten-tickles!"
        },
        {
            "id": "82wHlbaapzd",
            "joke": "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle?\r\n\r\nDoctor: No, humans can never hear that high of a frequency no matter what age they are.\r\n\r\nMe: Trick question... dogs can't whistle."
        },
        {
            "id": "892EImW0Dlb",
            "joke": "What musical instrument is found in the bathroom? A tuba toothpaste."
        },
        {
            "id": "89pzsHtW8pb",
            "joke": "My boss told me to attach two pieces of wood together... I totally nailed it!"
        },
        {
            "id": "8U0TClqOZDd",
            "joke": "What was the pumpkin’s favorite sport?\r\n\r\nSquash."
        },
        {
            "id": "8U8EdpWnOuc",
            "joke": "Recent survey revealed 6 out of 7 dwarf's aren't happy."
        },
        {
            "id": "8UDdUnrzkyd",
            "joke": "What do you call corn that joins the army? Kernel."
        },
        {
            "id": "8UnrHe2T0g",
            "joke": "‘Put the cat out’ … ‘I didn’t realize it was on fire"
        },
        {
            "id": "8hVnbxcp4wc",
            "joke": "Is there a hole in your shoe? No… Then how’d you get your foot in it?"
        },
        {
            "id": "8p49pWvcxAd",
            "joke": "Every night at 11:11, I make a wish that someone will come fix my broken clock."
        },
        {
            "id": "8pWvzkjN7Ed",
            "joke": "Two muffins were sitting in an oven, and the first looks over to the second, and says, “man, it’s really hot in here”. The second looks over at the first with a surprised look, and answers, “WHOA, a talking muffin!”"
        },
        {
            "id": "8prWvkOf2Ed",
            "joke": "What's the difference between a guitar and a fish? You can tune a guitar but you can't \"tuna\" fish!"
        },
        {
            "id": "92oOKusHBd",
            "joke": "Did you hear that the police have a warrant out on a midget psychic ripping people off? It reads “Small medium at large.”"
        },
        {
            "id": "99U0T7hVDlb",
            "joke": "Just read a few facts about frogs. They were ribbiting."
        },
        {
            "id": "99UDQZgyIBd",
            "joke": "Two satellites decided to get married. The wedding wasn't much, but the reception was incredible."
        }
    ],
    "search_term": "",
    "status": 200,
    "total_jokes": 549,
    "total_pages": 18
}

module.exports = initialJSONData;