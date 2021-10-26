import axios from 'axios';
import {
  FETCH_NEWS_DATA,
  FETCH_NEWS_SEARCH,
  FETCH_NEWS_SOURCES,
  FETCH_NEWS_TRENDING,
} from './types';
import {
  apiUrl,
  apiKey,
  dispatchSuccess,
  dispatchError,
  dispatchLoading,
} from '../../util';

export const fetchSources = () => dispatch => {
  dispatchLoading(dispatch, FETCH_NEWS_SOURCES);
  axios
    .get(`${apiUrl}/top-headlines/sources?apiKey=${apiKey}`)
    .then(res => {
      console.log(res);
      dispatchSuccess(dispatch, FETCH_NEWS_SOURCES, res.data.sources);
    })
    .catch(err => {
      dispatchError(dispatch, FETCH_NEWS_SOURCES, err);
    });
};

export const fetchNews = from => (dispatch, getState) => {
  // console.log(from);
  // console.log(getState().newsReducer);
  dispatchLoading(dispatch, FETCH_NEWS_DATA);

  axios
    .get(`${apiUrl}/top-headlines?sources=${from}&apiKey=${apiKey}`)
    .then(res => {
      console.log(res);
      dispatchSuccess(dispatch, FETCH_NEWS_DATA, res.data.articles);
    })
    .catch(err => {
      dispatchError(dispatch, FETCH_NEWS_DATA, err);
    });
};

export const fetchSearchNews = query => (dispatch, getState) => {
  // console.log(from);
  // console.log(getState().newsReducer);
  dispatchLoading(dispatch, FETCH_NEWS_SEARCH);

  axios
    .get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`)
    .then(res => {
      console.log(res);
      dispatchSuccess(dispatch, FETCH_NEWS_SEARCH, res.data.articles);
    })
    .catch(err => {
      dispatchError(dispatch, FETCH_NEWS_SEARCH, err);
    });
};

export const fetchTrendingNews = () => dispatch => {
  dispatchLoading(dispatch, FETCH_NEWS_TRENDING);

  axios
    .get(`${apiUrl}/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => {
      // console.log(res);
      dispatchSuccess(dispatch, FETCH_NEWS_TRENDING, res.data.articles);
    })
    .catch(err => {
      dispatchError(dispatch, FETCH_NEWS_TRENDING, err);
    });
};
