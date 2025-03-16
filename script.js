var generateButton = document.querySelector("#generate-button");
var heading = document.querySelector("#poem-heading");
var wordInput = document.querySelector("#word-input");
var poemParagraph = document.querySelector("#poem");

function updateHeadingAndFetchPoem(event) {
  event.preventDefault();
  heading.innerHTML = wordInput.value;

  let apiKey = "3b1f6a3cf426c8fo47d42200c9911tba";
  let prompt = `Can you generate a poem about ${heading.innerHTML}`;
  let context = "Precise to 2025";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${context}&key=${apiKey}`;

  axios
    .get(apiUrl)
    .then(function (response) {
      poemParagraph.innerHTML = response.data.answer;
    })
    .catch(function (error) {
      poemParagraph.innerHTML = `Could not fetch poem about${heading.innerHTML}, please try again...`;
    });
}

generateButton.addEventListener("click", updateHeadingAndFetchPoem);
