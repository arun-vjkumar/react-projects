export enum NewsActionType {
    GET_ALL_NEWS_HEADLINES = 'GET_ALL_NEWS_HEADLINES'
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

export interface INewsState {
    headlines: NewsHeadlines[]
    newsLoading: boolean;
}


