export interface ISource {
    id: string,
    name: string
}

export interface IArticle {
    source: ISource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export interface INews {
    status: string,
    totalResults: number,
    articles: IArticle[]
}