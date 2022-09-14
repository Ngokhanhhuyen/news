const InitType = {
    type: [],
    typeLoading: true,
};

const typeReducer = (state, action) => {
    const { type, payload } = action;
    console.log(type);
    switch (type) {
        case 'TYPE_LOADED_SUCCESS':
            return {
                ...state,
                type: payload,
                typeLoading: false,
            };

        case 'TYPE_LOADED_FAIL':
            return {
                ...state,
                new: [],
                typeLoading: true,
            };

        // case UPDATE_NEWS:
        //   const newCategorys = state.type.map((new) =>
        //     new.id === payload.id ? payload : new
        //   );
        //   return {
        //     ...state,
        //     products: newCategorys,
        //   };
        default:
            return state;
    }
};

export { InitType };
export default typeReducer;
