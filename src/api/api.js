export async function getTop(){
    const articlesRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    const articles = await articlesRes.json()
    return Promise.all(articles.filter(({deleted}) => !deleted).splice(0,20).map(processItem))
}

export async function getNew(){
    const articlesRes = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    const articles = await articlesRes.json()
    return Promise.all(articles.filter(({deleted}) => !deleted).splice(0,20).map(processItem))
}

export async function getUserDetails(user){
    const userDetailsRes = await fetch(`https://hacker-news.firebaseio.com/v0/user/${user}.json?print=pretty`)
    const userDetails = await userDetailsRes.json()
    if(userDetails){
        let userArticles = [];
        if(userDetails.submitted < 20){
            do{
                userArticles = userArticles.concat(await Promise.all(userDetails.submitted.splice(0,20).map(processItem)))
                userArticles = userArticles.filter(({ type,deleted }) => type === "story" && !deleted)
            }while(userArticles.length < 20)
        }else{
            userArticles = await Promise.all(userDetails.submitted.splice(0,20).map(processItem))
            userArticles = userArticles.filter(({ type,deleted }) => type === "story" && !deleted)
        }
        userDetails.articles = userArticles.slice(0,20)
        return userDetails;
    }else{
        return {
            error: true
        };
    }
}

export async function getArticle(id){
    const article = await processItem(id)
    if(article.type === 'story' && article.kids){
        let comments = await Promise.all(article.kids.map(processItem))
        comments = comments.filter(({ deleted }) => !deleted)
        return({article,comments})
    }else{
        const error = article.type !== 'story' ? "This article doesn't exist" : "This article has no comments"
        return {
            error
        }
    }
    
}

const processItem = (id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => res.json());