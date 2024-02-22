const defaultState = {
  category_title: "",
  products: [],
};

const ALL_PRODUCTS = "ALL_PRODUCTS";
const CATEGORY_PRODUCTS = "CATEGORY_PRODUCTS";
const SALE_PRODUCTS = "SALE_PRODUCTS";
const PRICE_LOW_HIGH = "PRICE_LOW_HIGH";
const PRICE_HIGH_LOW = "PRICE_HIGH_LOW";
const TITLE_A_Z = "TITLE_A_Z";
const TITLE_Z_A = "TITLE_Z_A";
const BY_DEFAULT = "BY_DEFAULT";
const FILTER_BY_SALE = "FILTER_BY_SALE";
const ORDER_SEND = "ORDER_SEND";
const FILTER_FROM_TO = "FILTER_FROM_TO"

function addIsShowProp(array) {
  return array.map((el) => ({ ...el, isShow: true, isShowPrice: true }));
}

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        category_title: "All products",
        products: addIsShowProp(action.payload),
      };

    case CATEGORY_PRODUCTS:
      return {
        category_title: action.payload.category.title,
        products: addIsShowProp(action.payload.data),
      };

    case SALE_PRODUCTS:
      let sales_products = action.payload.filter((elem) => elem.discont_price);
      return {
        category_title: "Discounted items",
        products: addIsShowProp(sales_products),
      };

    case PRICE_LOW_HIGH:
      let sorted1 = state.products.slice().sort((a, b) => a.price - b.price);
      return { ...state, products: sorted1 };

    case PRICE_HIGH_LOW:
      let sorted2 = state.products.slice().sort((a, b) => b.price - a.price);
      return { ...state, products: sorted2 };

    case TITLE_A_Z:
      let sorted3 = state.products.slice().sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      return { ...state, products: sorted3 };

    case TITLE_Z_A:
      let sorted4 = state.products.slice().sort((a, b) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) return 1;
        if (nameA > nameB) return -1;
        return 0;
      });
      return { ...state, products: sorted4 };

    case BY_DEFAULT:
      let sorted5 = state.products.slice().sort((a, b) => a.id - b.id);
      return { ...state, products: sorted5 };
    

    case FILTER_FROM_TO:
      const show_roducts = state.products.map(el => ({...el, isShowPrice: true}))
      return { ...state, products: show_roducts.map(el => {
        const {from, to} = action.payload
        if (el.price < from || el.price > to) {
          el.isShowPrice = false
        }
        return el
      }) } 


    case FILTER_BY_SALE:
      if (action.payload) {
        return {
          ...state,
          products: state.products.map((el) => {
            if (el.discont_price === null) {
              return { ...el, isShow: false };
            }
            return el;
          }),
        };
      } else {
        return {
          ...state,
          products: state.products.map(el => ({...el, isShow: true}))
        };
      }

    case ORDER_SEND:
      return action.payload;

    default:
      return state;
  }
};

export const orderSendAction = (payload) => ({ type: ORDER_SEND, payload });
export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const categoryProductsAction = (payload) => ({
  type: CATEGORY_PRODUCTS,
  payload,
});
export const salesProductsAction = (payload) => ({
  type: SALE_PRODUCTS,
  payload,
});
export const sortedPrice1 = () => ({ type: PRICE_LOW_HIGH });
export const sortedPrice2 = () => ({ type: PRICE_HIGH_LOW });
export const sortedPrice3 = () => ({ type: TITLE_A_Z });
export const sortedPrice4 = () => ({ type: TITLE_Z_A });
export const sortedPrice5 = () => ({ type: BY_DEFAULT });
export const filterBySaleAction = (payload) => ({
  type: FILTER_BY_SALE,
  payload,
});
export const filterFromToAction = (payload) => ({ type: FILTER_FROM_TO, payload });
