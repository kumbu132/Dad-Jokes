const jokes = [
  `What did the NFL coach say when his coin got stuck in the vending machine? "Give me my quarter back!"`,
  "I was forced to watch my dog eat a clock. It was very time consuming!",
  `My friend David lost his ID... now I call him Dav.`,
  "What days are the strongest? Saturdays and Sundays. The rest are week days",
  "Why did the blind man fall into the well? Because he couldn't see that well",
  "How do Mexicans keep warm? They use chicken fajitas",
  "What do you call a hen looking at a lettuce? Chicken Caesar Salad",
  "There are 10 types of people: Those who understand binary and those who don't",
  "I don't trust stairs. They're always up to something!",
  "How much does Santa pay to park his sleigh? Nothing, it's on the house!",
  "Why did the scarecrow win so many awards? He was outstanding in his field",
  "How can a shepherd tell which sheep are his? By checking their baa codes",
  "My extra sensitive toothpaste doesn't like it when I use other toothpastes",
  "I recently bought 51% off a vampire hunting company. I'm now the main stake holder",
  "I have a habit of taking pictures of myself in the shower, but they always come out too blurry.\nI think I may have selfie steam issues.",
];

const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");
const config = {
  headers: {
    Accept: "application/json",
  },
};
jokeBtn.addEventListener("click", getJoke);

jokeBtn.click();

function getJoke() {
  // const i = Math.floor(Math.random() * jokes.length);
  // return jokes[i];
  fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => (joke.innerHTML = data.joke));
}
