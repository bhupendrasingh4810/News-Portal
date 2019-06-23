export interface IHeadlineSource {
    id: string,
    name: string
}

export interface IHeadlineArticle {
    source: IHeadlineSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export interface IHeadlines {
    status: string,
    totalResults: number,
    articles: IHeadlineArticle[]
}