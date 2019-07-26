export async function getTop(){
    const articlesRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const articles = await articlesRes.json()
    return Promise.all(articles.splice(0,20).map(processArticle))
}

export async function getNew(){
    const articlesRes = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    const articles = await articlesRes.json()
    return Promise.all(articles.splice(0,20).map(processArticle))
}


const processArticle = (id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json());