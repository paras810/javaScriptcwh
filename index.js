// e1a948cc24194063b9d910da2fcca47d
//d093053d72bc40248998159804e0e67d
//grab the news container
let newsAccordion = document.getElementById('newsAccordion')

// initialze the news api parameters
let source = 'the-times-of-india'
let apiKey = 'd093053d72bc40248998159804e0e67d'

// create a get request
let xhr = new XMLHttpRequest();
//https://newsapi.org/v2/top-headlines?country=in&category=technology
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        console.log(json);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = ''
       articles.forEach((element,index) => {
            // console.log(articles[news]);
            let news = `<div class="card">
                           <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                               aria-expanded="false" aria-controls="collapse${index}">
                      <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                            </h2>
                           </div>

                   <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
                    <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                     </div>
                         </div>`;
                         newsHtml += news
                        });
    newsAccordion.innerHTML = newsHtml
    }
    else {
        console.log('some error occured');
    }
}

xhr.send()
// xhr.getResponseHeader('Content-type', 'application/json')

