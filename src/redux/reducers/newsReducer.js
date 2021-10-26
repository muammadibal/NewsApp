import {FETCH_NEWS_DATA, FETCH_NEWS_SEARCH, FETCH_NEWS_SOURCES, FETCH_NEWS_TRENDING} from '../actions/types';

const initialState = {
  newsSourceLoading: false,
  newsSourceData: [],
  newsSourceError: false,

  newsLoading: false,
  newsData: [],
  newsError: false,

  newsTrendingLoading: false,
  newsTrendingData: [],
  newsTrendingError: false,

  newsSearchLoading: false,
  newsSearchData: [],
  newsSearchError: false,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_DATA:
      return {
        ...state,
        newsLoading: action.payload.loading,
        newsData: action.payload.data,
        newsError: action.payload.error,
      };

    case FETCH_NEWS_SOURCES:
      return {
        ...state,
        newsSourceLoading: action.payload.loading,
        newsSourceData: action.payload.data,
        newsSourceError: action.payload.error,
      };

    case FETCH_NEWS_TRENDING:
      return {
        ...state,
        newsTrendingLoading: action.payload.loading,
        newsTrendingData: action.payload.data,
        newsTrendingError: action.payload.error,
      };

    case FETCH_NEWS_SEARCH:
      return {
        ...state,
        newsSearchLoading: action.payload.loading,
        newsSearchData: action.payload.data,
        newsSearchError: action.payload.error,
      };

    default:
      return state;
  }
};
