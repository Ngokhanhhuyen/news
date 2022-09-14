import { createContext, useEffect, useReducer } from 'react';
import newsReducer, { InitNews } from '../Reduces/NewsReduces';
import axios from 'axios';

export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    // State
    const [newsState, dispatch] = useReducer(newsReducer, InitNews);

    useEffect(() => {
        getNews();
    }, []);
    // todo Get all NEWS
    const getNews = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/news/all`);
            if (response.data) {
                dispatch({
                    type: 'NEWS_LOADED_SUCCESS',
                    payload: response.data,
                });
            }
        } catch (error) {
            dispatch({ type: 'NEWS_LOADED_FAIL' });
        }
    };
    // todo Search NEWS by title
    const getNewsByTitle = async (title) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/news/byTitle/?title=${title}`,
            );
            return response.data;
        } catch (error) {
            dispatch({ type: 'NEWS_LOADED_FAIL' });
        }
    };
    // todo Get news By Id
    const getNewsById = async (id) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/news/findNews/${id}`,
            );
            return response.data[0];
        } catch (error) {
            dispatch({ type: 'NEWS_LOADED_FAIL' });
        }
    };

    const deleteNews = async (newsId) => {
        try {
            const response = await axios.delete(
                `http://localhost:8080/news/deleteNews/${newsId}`,
            );
            console.log(response);
            if (response.data)
                dispatch({ type: 'DELETE_NEWS', payload: newsId });
        } catch (error) {
            console.log(error);
        }
    };

    const createNews = async (news) => {
        const reqNews = {
            content: news.content,
            summary: news.summary,
            title: news.title,
            countLike: news.count_like,
            countView: news.count_view,
            nameImage: news.name_image,
            idType: news.id_type,
            author: news.author,
            idUser: news.idUser,
        };

        const response = await axios.post(
            `http://localhost:8080/news/addNews`,
            reqNews,
        );
        console.log(response);
        if (response.data.success) {
            return response.data;
        } else {
            return response.data;
        }
    };

    // todo Update user
    const updateNews = async (updateNews) => {
        console.log(updateNews);
        try {
            const response = await axios.put(
                `http://localhost:8080/news/updateNews`,
                updateNews,
            );

            console.log(response);

            if (response.data) {
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

    // Product context data
    const newsContextData = {
        newsState,
        getNews,
        createNews,
        deleteNews,
        updateNews,
        getNewsById,
        getNewsByTitle,
    };

    return (
        <NewsContext.Provider value={newsContextData}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContextProvider;
