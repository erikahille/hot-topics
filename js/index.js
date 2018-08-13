let btns = document.querySelectorAll('.btns');
let container = document.querySelector('.main-content-bg');
let url = "./partials/articles.html";

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', loadContent);
}

function loadContent(e) {
    e.preventDefault();
    if (e.target.textContent === 'Home') {
        let url = "./partials/articles.html";
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                container.innerHTML = data;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    } else if (e.target.textContent === 'Portfolio') {
        let url = "./partials/portfolio.html";
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                container.innerHTML = data;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
}

fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        container.innerHTML = data;
    })
    .catch(function (error) {
        console.log(error.message);
    });



/*
IMPORTANT NOTES:
loadContent RUNS EVERY TIME A LINK IS CLICKED.
loadContent REQUIRES THE INPUT. THIS INPUT IS
THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
THE UPDATED PATH TO THE REQUESTED CONTENT.
*/
// RUN THE fetch(urlFeed).then().then().catch()
// CLOSE YOUR FUNCTION loadContent HERE
// CALL loadContent WITH THE CURRENT VALUE OF url 



// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
// const selectContent ...
// PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
// GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
// CALL THE FUNCTION loadContent PROVIDING THE href
// VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
// OF loadContent FUNCTION.
// CLOSE YOUR FUNCTION selectContent HERE

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!