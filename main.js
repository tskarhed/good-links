var articles = document.querySelectorAll('article');
var expandedArticles = document.querySelectorAll('article.expanded');
//console.log(articles);
articles.forEach((article) => {
 
  article.addEventListener('click', (e) =>{
    toggleExpand(article);
  });
});

function toggleExpand(el, animLength){
  //isExpanded?
  if(el.classList.contains('expanded')){
    el.classList.toggle('expanded');
    el.classList.toggle('half-expanded');
    setTimeout(() => {
      el.classList.toggle('half-expanded');
    }, 200);
  } else{
    //isNotExpanded
    el.classList.toggle('half-expanded');
    setTimeout(() => {
      el.classList.toggle('half-expanded');
      el.classList.toggle('expanded');
    }, 200);
  }
}
