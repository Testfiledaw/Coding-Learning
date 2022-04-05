fetch('https://gnews.io/api/v4/top-headlines?topic=business&lang=en&country=us&max=10&token=383d5e1a2efe6ebdbc086693786e1f09')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        let htmls = data.articles.map(function(data) {
            return `
            <ul>
            <li>
            <img src="${data.image}">
            <div>
            <a href="${data.url}"><b>${data.title}</b></a>
            <p>${data.description}</p>
            </div>
            </li>
            </ul>
            `
        })
        let html = htmls.join('');
        document.getElementById('container').innerHTML = html;
    });

function searching() {

    var input = document.getElementById('search1').value;
    fetch('https://gnews.io/api/v4/search?token=383d5e1a2efe6ebdbc086693786e1f09')
        .then(function(response) {
            return response.json();
        })
        // .then(function(data) {
        //     console.log(data)
        //     let htmls = data.articles.map(function(data) {
        //         return `
        //         <ul>
        //         <li>
        //         <img src="${data.image}">
        //         <div>
        //         <a href="${data.url}"><b>${data.title}</b></a>
        //         <p>${data.description}</p>
        //         </div>
        //         </li>
        //         </ul>
        //         `
        //     })
        //     let html = htmls.join('');
        //     document.getElementById('container').innerHTML = html;
        // });

    .then(function(data) {

        var html = '';
        for (var i = 0; i < data.articles.map; i++) {
            html += '<ul>';
            html += '<li>';
            html += '<img src="' + data.articles[i].image + '">';
            html += '<div>';
            html += '<a href="' + data.articles[i].url + '"><b>' + data.articles[i].title + '</b></a>';
            html += '<p>' + data.articles[i].description + '</p>';
            html += '</div>';
            html += '</li>';
            html += '</ul>';

        }

        console.log(data);
    });
}