
// Event listener on the language links in order to display language to user
const english = document.getElementById('EN');
const french = document.getElementById('FR');
const indicator = document.getElementById('languageIndicator');

french.addEventListener('click', function(){
    indicator.innerHTML = `<p>French</p>`;
})

english.addEventListener('click', function(){
    indicator.innerHTML = `<p>English</p>`;
})

console.log('kickin');