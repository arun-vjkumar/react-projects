import {NewsActionType} from "./types";

export type NewsAction = {
    type: NewsActionType;
    payload: {
        data?: {
            [k: string]: any;
        };
        request: {
            [k: string]: any;
        }
    }
    [k: string]: any;
};

export const getNewsHeadlines = (): NewsAction => ({
    type: NewsActionType.GET_ALL_NEWS_HEADLINES,
    payload: {
        request: {
            url: '/sources',
            headers: {
            },
            params: {
                apiKey: ""
            }
        }
    }
});

export const getTopHeadlines = (countryCode: string = null): NewsAction => ({
    type: NewsActionType.GET_TOP_NEWS_HEADLINES,
    payload: {
        request: {
            url: '/top-headlines',
            headers: {
            },
            params: {
                country: countryCode ? countryCode : "in",
                apiKey: ""
            }
        }
    }
});
