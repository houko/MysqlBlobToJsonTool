// export const domainName = environment.production?'https://api.tusoapp.com':'https://api.dev.tusoapp.com';
const domainName = 'http://localhost:9999';

export const login = {
    login: domainName + '/login',
    logout: domainName + '/logout',
};
export const list = {
    all: domainName + '/queryTables',
    listByTable: domainName + '/queryDataList',
    listByTableMore: domainName + '/queryData',
};