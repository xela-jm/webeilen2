import {
    HIDE_ALERT,
    HIDE_LOGIN,
    LOG_OUT, PAGINATE,
    REGISTER_USER,
    SET_USER_DATA,
    SHOW_ALERT,
    SHOW_LOGIN,
    TOGGLE_ALERT,
    TOGGLE_COLOR,
    TOGGLE_LOGIN,
    TOGGLE_SIZE, UPDATE_ITEMS_COLLECTION, UPDATE_ITEMS_FILTER, UPDATE_ITEMS_FILTERED
} from "../actions/types";


const INITIAL_STATE = {
    showAlert: false,
    showLoginAlert: false,
    user: {},
    userDetails: sessionStorage.getItem("userDetails"),
    itemsFilter: {
        color: {
            blue_opt: false,
            red_opt: false,
            yellow_opt: false
        },
        size: {
            M: false,
            L: false,
            XL: false,
            XXL: false
        },
        page: 0
    },
    itemsFiltered: {
        total: 0,
        //pages: 0,
        offset: 0,
        items: []
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, showAlert: true};

        case HIDE_ALERT:
            return {...state, showAlert: false};

        case TOGGLE_ALERT:
            return {...state, showAlert: !state.showAlert};

        case REGISTER_USER:
            return {...state, user: action.data}

        case SET_USER_DATA:
            sessionStorage.setItem("userDetails", action.data)
            return {...state, userDetails: action.data}

        case SHOW_LOGIN:
            return {...state, showLoginAlert: true};

        case HIDE_LOGIN:
            return {...state, showLoginAlert: false};

        case TOGGLE_LOGIN:
            return {...state, showLoginAlert: !state.showLoginAlert};

        case TOGGLE_COLOR:
            return {
                ...state,
                itemsFilter: {
                    ...state.itemsFilter,
                    color:
                        {
                            ...state.itemsFilter.color,
                            [action.payload.message]: !state.itemsFilter.color[action.payload.message]
                        }
                }
            }

        case TOGGLE_SIZE:
            return {
                ...state,
                itemsFilter: {
                    ...state.itemsFilter,
                    size:
                        {
                            ...state.itemsFilter.size,
                            [action.payload.message]: !state.itemsFilter.size[action.payload.message]
                        }
                }
            }

        case LOG_OUT:
            sessionStorage.removeItem("userDetails")
            return {...state, userDetails: null}

/*        case PAGINATE:
            return {
                ...state,
                itemsFilter: {
                    ...state.itemsFilter,
                    size:
                        {
                            ...state.itemsFilter.size,
                            [action.payload.message]: !state.itemsFilter.size[action.payload.message]
                        }
                }
            }*/

        case UPDATE_ITEMS_FILTER:
            return {
                ...state,
                itemsFilter: action.data
            }

        case UPDATE_ITEMS_FILTERED:
            return {
                ...state,
                itemsFiltered: action.itemsFiltered
            }

        case UPDATE_ITEMS_COLLECTION:
            return {
                ...state,
                itemsFilter: action.filter,
                itemsFiltered: action.itemsFiltered
            }

        default:
            return {...state};
    }
}
