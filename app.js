document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(event){
    event.preventDefault();
    const number = document.getElementById("number").value;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number || 1}`, true);
    
    xhr.onload = function(){
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);
            
            const output = jokes.value.reduce((total,e) => total + `<li>${e.joke}</li>`, '')

            document.querySelector(".jokes").innerHTML = output;
        }
    }

    xhr.onerror = function(){
        document.querySelector(".jokes").innerHTML = `
            <h1>Network Error</h1>
        `;
    }
    xhr.send();
    
}