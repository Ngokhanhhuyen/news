import { createContext, useEffect, useReducer } from 'react';
import typeReducer, { InitType } from '../Reduces/TypesNewsReduces';
import axios from 'axios';

export const TypesContext = createContext();

const TypesContextProvider = ({ children }) => {
    // State
    const [typesState, dispatch] = useReducer(typeReducer, InitType);

    useEffect(() => {
        getType();
    }, []);
    // Get all NEWS
    const getType = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/typeNews/all`,
            );
            if (response.data) {
                dispatch({
                    type: 'TYPE_LOADED_SUCCESS',
                    payload: response.data,
                });
            }
        } catch (error) {
            dispatch({ type: 'TYPE_LOADED_FAIL' });
        }
    };

    const deleteType = async (typeId) => {
        try {
            const response = await axios.delete(
                `http://localhost:8080/typeNews/deleteTypeNews/${typeId}`,
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const createType = async (news) => {
        const reqTypes = {
            typeName: news.nameType,
        };
        const response = await axios.post(
            `http://localhost:8080/typeNews/addTypeNews`,
            reqTypes,
        );
        console.log(response);
        if (response.data.success) {
            return response.data;
        } else {
            return response.data;
        }
    };

    // todo Update user
    const updateType = async (updatedCategory) => {
        try {
            const response = await axios.put(
                `http://localhost:8080/typeNews/updatetype`,
                updatedCategory,
            );

            console.log(response);

            return response.data;
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

    // Product context data
    const newsContextData = {
        typesState,
        getType,
        createType,
        deleteType,
        updateType,
    };

    return (
        <TypesContext.Provider value={newsContextData}>
            {children}
        </TypesContext.Provider>
    );
};

export default TypesContextProvider;
