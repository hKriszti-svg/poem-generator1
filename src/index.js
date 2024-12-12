function displayPoem (response) {
  console.log("poem generated");
    
    new Typewriter("#poem", {
        strings:response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}
 


function generatePoem(event) {
    event.preventDefault();



let instructionsInput= document.querySelector("#user-instructions");
let apiKey = "ae026d6933ff4e9b69c0f323co1d1d9t";
let prompt = `User instructions:Generate a German poem about  ${instructionsInput.value}`;
let context= "You are a funny Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML without saying  that is html  and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating Poem ");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);




axios.get(apiURL).then(displayPoem);
  
  
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);