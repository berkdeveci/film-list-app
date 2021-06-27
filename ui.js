class UI{
    static addFilmtoUI(newFilm){
        const filmList = document.querySelector('#films');
        filmList.innerHTML += ` 
        <tr>
             <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
             <td>${newFilm.title}</td>
             <td>${newFilm.director}</td>
             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
         </tr> 
     `;
    }
    static clearInputs(el1, el2, el3){
        el1.value = "";
        el2.value = "";
        el3.value = "";
    }
    static displayMessage(message, type){
        const cardBody = document.querySelectorAll('.card-body')[0];
        //Create alert message
        const newDiv = document.createElement('div');
              newDiv.className = `alert alert-${type}`;
              newDiv.textContent = message;
        cardBody.appendChild(newDiv);
        setTimeout(() => {
            newDiv.remove();     
        }, 1000);
    }
    static loadAllFilms(films){
        const filmDiv = document.getElementById('films');
        films.forEach((film)=>{
            filmDiv.innerHTML += `<tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
             </tr>`;
        });
    }
    static deleteFilmFromUI(elem){
        elem.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI(){
        const filmDiv = document.getElementById('films');
        while(filmDiv.firstElementChild !== null){
            filmDiv.firstElementChild.remove();
        }
    }
}