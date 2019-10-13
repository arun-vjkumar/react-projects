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
            headers: {
            },
            params: {
                apiKey: "626b8f2dec7040fb91b2af174e278f0d"
            }
        }
    }
});