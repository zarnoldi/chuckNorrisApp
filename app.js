class UI {
    static uiMessage(data){
         let ui = document.createElement('div'); 
         ui.innerHTML = `
         <h3>${data}</h3>
         <a href="#" class="float-end delete-item">
         <button type="button" class="btn-close" disabled aria-label="Close"></button>
         </a>`;
         ; 
         document.getElementById('output').appendChild(ui); 
     }
 }

document.getElementById('categories').addEventListener('click', getCategoryData); 
document.getElementById('output').addEventListener('click', deleteJoke)


function getCategoryData(e) {

    console.log(e.target.textContent);

    let category = e.target.textContent; 

    category = category.toLowerCase();

    const httpRequest = new XMLHttpRequest(); 

    httpRequest.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}`, true);

    httpRequest.onload = function () {

        if (this.status === 200) {
            joke = JSON.parse(this.response); 

            UI.uiMessage(joke.value);
  
        }else{
            window.alert('Not working dude check your code')
        }
  
    }
    httpRequest.send(); 

e.preventDefault();    
}

function deleteJoke(e) {
    if (e.target.classList.contains('delete-item')) {
        e.target.parentElement.remove(); 
    }

}