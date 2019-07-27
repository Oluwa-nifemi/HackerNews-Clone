export async function getTop(){
    const articlesRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const articles = await articlesRes.json()
    return Promise.all(articles.splice(0,20).map(processItem))
}

export async function getNew(){
    const articlesRes = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    const articles = await articlesRes.json()
    return Promise.all(articles.splice(0,20).map(processItem))
}

export async function getUserDetails(user){
    const userDetailsRes = await fetch(`https://hacker-news.firebaseio.com/v0/user/${user}.json?print=pretty`)
    const userDetails = await userDetailsRes.json()
    let userArticles = [];
    do{
        userArticles = userArticles.concat(await Promise.all(userDetails.submitted.splice(0,20).map(processItem)))
        userArticles = userArticles.filter(({type}) => type === "story")
    }while(userArticles.length < 20)
    userDetails.articles = userArticles.slice(0,20)
    return userDetails;
}

export async function getArticle(id){
    const article = await processItem(id)
    const comments = await Promise.all(article.kids.map(processItem))
    return({article,comments})
}

const processItem = (id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json());