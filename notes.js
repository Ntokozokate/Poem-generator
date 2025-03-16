document
  .getElementById("questionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let apiKey = "3b1f6a3cf426c8fo47d42200c9911tba";
    let prompt = document.getElementById("question").value; //getting the user input here
    let context = "Precise to 2025";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=${context}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then(function (response) {
        //showing the response from the API
        document.getElementById("response").innerText = response.data.answer;
        console.log(response);
      })
      .catch(function (error) {
        document.getElementById("response").innerText =
          "An error occured , please try again";
        console.error(error);
      });
  });

function handleClickAndHide() {
  let heading = document.querySelector("h1");
  heading.classList.toggle("heading"); // or you can utilise .toggle or .remove
  let heading2 = document.querySelector("h2");
  heading2.classList.toggle("hidden");
}

let buttonElement = document.querySelector(".special-button");
buttonElement.addEventListener("click", handleClickAndHide);

//setAttribut
//element.style.margin = "10px"
//element.classList.add("special")
//element.classList.remove("special")
//element.classList.toggle("special")

new Typewriter("h5", {
  strings: "Hello",
  autoStart: true,
  cursor: "",
  delay: 10,
});
