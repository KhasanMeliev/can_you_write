function openBox() {
  document.getElementById("button1").style.display = "none";
  document.getElementById("box").style.display = "flex";
}
const words = [
  "dog",
  "cat",
  "horse",
  "puppy",
  "kitten",
  "kangaroo",
  "cow",
  "horse",
  "puppy",
  "kitten",
  "kangaroo",
  "monkey",
  "lion",
  "tiger",
  "wolf",
  "fox",
  "rabbit",
  "camel",
  "donkey",
];
const word = document.getElementById("randomWord");
const lastCharacter = document.getElementById("lastWord");
function random() {
  const randomWord = Math.floor(Math.random() * words.length);
  const output = words[randomWord];
  console.log(output);
  word.value = output;
}
function submit() {
  if (lastCharacter.value == word.value) {
    alert(`you can write ${word.value} text🤩☺`);
    word.value = "";
    lastCharacter.value = "";
  } else {
    alert(`you can't write ${word.value} text🥱`);
  }
}
