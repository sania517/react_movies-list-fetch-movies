(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(3),m=a.n(l),c=(a(11),a(5)),s=a(1),o=(a(12),a(13),a(14),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,m=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:m},"IMDB"))))}),r=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(o,Object.assign({key:e.imdbId},e))})))},d=(a(15),function(e){var t=e.addMovie,a=Object(i.useState)(""),l=Object(s.a)(a,2),m=l[0],c=l[1],r=Object(i.useState)(null),d=Object(s.a)(r,2),u=d[0],h=d[1],p=Object(i.useState)(!1),g=Object(s.a)(p,2),b=g[0],v=g[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),u&&(c(""),v(!1),t(u),h(null))}},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(b?"is-danger":""),value:m,onChange:function(e){c(e.target.value),v(!1)}})),n.a.createElement("p",{className:"help is-danger"},b?"Can't find a movie with such a title":"")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){fetch("http://www.omdbapi.com/?apikey=5c8f0f93&t="+m).then((function(e){return e.json()})).then((function(e){var t=e.Title,a=e.Plot,i=e.Poster,n=e.imdbID;"True"===e.Response?h({title:t,description:a,imgUrl:i,imdbId:n,imdbUrl:"https://www.imdb.com/title/"+n}):(v(!0),h(null))}))}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"submit",className:"button is-primary"},"Add to the list")))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),u?n.a.createElement(o,u):""))}),u=a(4);m.a.render(n.a.createElement((function(){var e=Object(i.useState)(u),t=Object(s.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(r,{movies:a})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(d,{addMovie:function(e){a.find((function(t){return t.imdbId===e.imdbId}))||l([].concat(Object(c.a)(a),[e]))}})))}),null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.f1f0641e.chunk.js.map