document.body.style =
  "display: flex; flex-direction: column; align-items: center; text-align:center;";
document.body.innerHTML = `
<h1>Next Presenter is...</h1>
<div id="presenters"></div>
<button id="Rollin">Let’s Roll</button>
`;
const presenters = [
  "john",
  "jake",
  "shara",
  "ryuma",
  "yoon",
  "yi",
  "travis",
  "gulp",
  "york",
  "helen",
  "duke",
  "sindy",
  "jain",
  "akari",
  "tom",
  "yen",
  "yongho"
];
const getPresenterNum = () => {
  return Math.floor(Math.random() * presenters.length);
};
const getPresenter = () => {
  return presenters[getPresenterNum()];
};
const appendResult = () => {
  const presenterNode = document.createElement("h2");
  let presenterTextNode = document.createTextNode(getPresenter());
  presenterNode.appendChild(presenterTextNode);
  document.getElementById("presenters").appendChild(presenterNode);
};
const rollin = document.getElementById("Rollin");
rollin.addEventListener("click", function () {
  appendResult();
});
