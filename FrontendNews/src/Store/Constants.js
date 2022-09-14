export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8080/'
        : 'somedeployUrl';

export const LOCAL_STORAGE_TOKEN_NAME = 'token_user';
