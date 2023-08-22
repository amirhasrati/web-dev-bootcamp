/* AMIR'S SOLUTION:

const franc = require('franc');
const colors = require('colors');
const langs = require('langs');

// Take some argument from the command-line
const input = process.argv[2];

// Use franc to get a language code from input
const langCode = franc(input);

// error handling
if (langCode === 'und'){
    console.log("Could not match a language. Please try again with a larger sample".red);
} else {
    // Use langs to find the language name
    const language = langs.where("3", langCode);
    console.log(language.name.green);
}
*/

/* COLT'S SOLUTION */
const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT".red);
} else {
    const language = langs.where("3", langCode);
    if(language){
        console.log(`Our best guess is: ${language.name}`.green);
    } else {
        console.log(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`.red)
    }
    
}

