const GhState = {
  products: [],
  detailcomments: [],
  basket: [],
  pagination: [],
  fav: [],
  login: [],
  psw: [],
};

export default function reducer(state = GhState, action) {
  switch (action.type) {
    case "SET_BASKET":
      return {
        ...state,
        basket: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
      case "SET_COMMENTS":
        return {
          ...state,
          detailcomments: action.payload,
        };
    case "SET_PAGINATION":
      return {
        ...state,
        pagination: action.payload,
      };
    case "SET_FAV":
      return {
        ...state,
        fav: action.payload,
      };
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "SET_PSW":
      return {
        ...state,
        psw: action.payload,
      };
    case "RESET_STATE":
      return GhState;
    default:
      return state;
  }
}
