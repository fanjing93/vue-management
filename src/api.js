const API = {
    checkLogin:'/api/v1/user/query',

    login:'/api/v1/user/auth/login/create',
    getShop: '/api/v1/channel/shop/list/query',
    createShop: '/api/v1/channel/shop/auth/register/create',
    loginShop: '/api/v1/channel/shop/auth/login/create',
    changeLog: '/api/v1/system/notification/list/popup/query',

    // get menu
    getMenuList:'/api/v1/user/auth/menu/query'
};

export default API;