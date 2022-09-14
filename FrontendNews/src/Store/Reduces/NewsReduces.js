const InitNews = {
    news: [],
    newsLoading: true,
};

const newReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'NEWS_LOADED_SUCCESS':
            return {
                ...state,
                news: payload,
                newsLoading: false,
            };

        case 'NEWS_LOADED_FAIL':
            return {
                ...state,
                new: [],
                newsLoading: true,
            };
        case 'DELETE_NEWS':
            return {
                ...state,
                news: state.news.filter((newi) => newi.id !== payload),
            };
        // case 'UPDATE_NEWS':
        //     const listNews = state.news.map((item) =>
        //         item.id === payload.id ? payload : item,
        //     );
        //     return {
        //         ...state,
        //         products: listNews,
        //     };
        default:
            return state;
    }
};

export { InitNews };
export default newReducer;
