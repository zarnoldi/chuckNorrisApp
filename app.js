class UI {
    static uiMessage(data){
         let ui = document.createElement('div'); 
         ui.innerHTML = `
         <h3>${data}</h3>
         `; 
         document.getElementById('output').appendChild(ui); 
     }
 }


document.getElementById('categories').addEventListener('click', getCategoryData); 

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

