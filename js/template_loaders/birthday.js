import { birthday_quotes } from "../data/quotes.js";
import { templates_list } from "../../templates/birthday.templates.js";

/**
 * Function to render a birthday template with a name and a random birthday quote.
 *
 * @param {string} name - The name of the person celebrating their birthday.
 * @param {string} dob - The date of birth (dob) of the person.
 * 
 * Important: Please refrain from making any updates, changes, or deletions to this function.
 * 
 */
export const renderTemplate = (name, dob) => {


    const randomIndex = Math.floor(Math.random() * templates_list.length);

    // Get random quote from birthday array
    const quote = birthday_quotes[getRandomIndex(birthday_quotes.length)];
    
    // Generate a birthday template with a random quote and render it
    const randomTemplate = templates_list[randomIndex](name, quote, dob);

    // Insert the generated template into the "template-container" element
    document.getElementById("template-container").innerHTML = randomTemplate;
}
