import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedArticle: {},
  articles: [
    {
      id: 1,
      name: "¿Cómo generar mi constancia de situación fiscal en el SAT?",
      href: "/articulo-01",
      date: "Septiembre 14, 2021",
      imageSrc: "",
      imageAlt: "¿Cómo generar mi constancia de situación fiscal en el SAT?",
    },
    {
      id: 2,
      name: "Conoce cuándo es necesario el complemento Carta Porte en tus facturas.",
      href: "/articulo-02",
      date: "Septiembre 14, 2021",
      imageSrc: "",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Renueva tu e.Firma sin acudir al SAT",
      href: "/articulo-03",
      date: "Septiembre 14, 2021",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Obtén tu firma electrónica (FIEL) por primera vez",
      href: "/articulo-04",
      date: "Septiembre 14, 2021",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 5,
      name: "¿Cómo realizo el cambio de domicilio fiscal en el SAT?",
      href: "/articulo-05",
      date: "Septiembre 14, 2021",
      imageSrc: "",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 6,
      name: "Personas físicas podrán presentar declaración anual hasta mayo",
      href: "/articulo-06",
      date: "Septiembre 14, 2021",
      imageSrc: "",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 7,
      name: "¿Cómo presento mi aviso de actividades económicas en el SAT?",
      href: "/articulo-07",
      date: "Septiembre 14, 2021",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 8,
      name: "Manual del Complemento de Carta Porte",
      href: "/articulo-08",
      date: "Septiembre 14, 2021",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeSelectedArticles: (state, action) => {
      state.selectedArticle = action.payload.selectedArticle;
    },
    changeData: (state, action) => {
      state.articles = action.payload.articles;
    },
    addArticles: (state, action) => {
      state.articles.push(action.payload.article);
    },
    updateArticles: (state, action) => {
      let updatedArticles = JSON.parse(
        JSON.stringify(
          state.articles.map((article) => {
            if (article.id === action.payload.article.id) {
              return action.payload.article;
            }
            return article;
          })
        )
      );
      state.articles = updatedArticles;
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const rdxarticlesactions = counterSlice.actions;

export default counterSlice.reducer;
