// addEventListener('click', switchClass);
//
// function switchClass() {
//     console.log(document.getElementsByClassName('my-work'));
// }

document.addEventListener("DOMContentLoaded", () => {
document.getElementById('navbar').addEventListener("click", (e) => {
    const item = e.target.closest('a')
    console.log("item clickeado", item.dataset.item)
});
});