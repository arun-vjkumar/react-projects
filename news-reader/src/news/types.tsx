export enum NewsActionType {
    GET_ALL_NEWS_HEADLINES = 'GET_ALL_NEWS_HEADLINES',
    GET_TOP_NEWS_HEADLINES = 'GET_TOP_NEWS_HEADLINES'
}

export interface NewsHeadlines {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface TopHeadlines {
    "source": {
        "id": string,
        "name": string
    },
    "author": string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string,
    "publishedAt": string,
    "content": string
}

export interface INewsState {
    headlines: NewsHeadlines[]
    topHeadLines: TopHeadlines[]
    newsLoading: boolean;
}


