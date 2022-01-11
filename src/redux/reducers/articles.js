import { createSlice } from "@reduxjs/toolkit";
import img01 from "../../img/resources/art01.png";
import img02 from "../../img/resources/art02.png";
import img03 from "../../img/resources/art03.png";
import img04 from "../../img/resources/art04.png";
import img05 from "../../img/resources/art05.png";
import img06 from "../../img/resources/art06.png";
import img07 from "../../img/resources/art07.png";
import img08 from "../../img/resources/art08.png";
import img09 from "../../img/resources/art09.png";
import img10 from "../../img/resources/art10.png";

const initialState = {
  selectedArticle: {},
  articles: [
    {
      id: 1,
      name: "Nuevos cambios para CFDI Factura 4.0",
      href: "/recursos/articulo-nuevos-cambios-para-cfdi-factura-4-0/",
      date: "Diciembre 28, 2021",
      imageSrc: img01,
      imageAlt: "Nuevos cambios para CFDI Factura 4.0",
    },
    {
      id: 2,
      name: "Manual del Complemento de Carta Porte",
      href: "/recursos/articulo-manual-del-complemento-de-carta-porte/",
      date: "Diciembre 16, 2021",
      imageSrc: img02,
      imageAlt: "Manual del Complemento de Carta Porte",
    },
    {
      id: 3,
      name: "¿Cómo generar mi constancia de situación fiscal en el SAT?",
      href: "/recursos/articulo-como-generar-mi-constancia-de-situacion-fiscal-en-el-sat/",
      date: "Septiembre 14, 2021",
      imageSrc: img03,
      imageAlt: "¿Cómo generar mi constancia de situación fiscal en el SAT?",
    },
    {
      id: 4,
      name: "Conoce cuándo es necesario el complemento Carta Porte en tus facturas.",
      href: "/recursos/articulo-conoce-cuando-es-necesario-el-complemento-carta-porte-en-tus-facturas/",
      date: "Septiembre 10, 2021",
      imageSrc: img04,
      imageAlt:
        "Conoce cuándo es necesario el complemento Carta Porte en tus facturas.",
    },
    {
      id: 5,
      name: "¿Cómo presento mi aviso de actividades económicas en el SAT?",
      href: "/recursos/articulo-como-presento-mi-aviso-de-actividades-economicas-en-el-sat/",
      date: "Agosto 23, 2021",
      imageSrc: img05,
      imageAlt: "¿Cómo presento mi aviso de actividades económicas en el SAT?",
    },
    {
      id: 6,
      name: "Renueva tu e.Firma sin acudir al SAT",
      href: "/recursos/articulo-renovacion-de-e-firma/",
      date: "Agosto 19, 2021",
      imageSrc: img06,
      imageAlt: "Renueva tu e.Firma sin acudir al SAT",
    },
    {
      id: 7,
      name: "Obtén tu firma electrónica (FIEL) por primera vez",
      href: "/recursos/articulo-agenda-una-cita-y-obten-tu-e-firma-por-primera-vez/",
      date: "Agosto 19, 2021",
      imageSrc: img07,
      imageAlt: "Obtén tu firma electrónica (FIEL) por primera vez",
    },
    {
      id: 8,
      name: "¿Cómo realizo el cambio de domicilio fiscal en el SAT?",
      href: "/recursos/articulo-como-realizo-el-cambio-de-domicilio-fiscal-en-el-sat/",
      date: "Agosto 12, 2021",
      imageSrc: img08,
      imageAlt: "¿Cómo realizo el cambio de domicilio fiscal en el SAT?",
    },
    {
      id: 9,
      name: "Personas físicas podrán presentar declaración anual hasta mayo",
      href: "/recursos/articulo-personas-fisicas-podran-presentar-declaracion-anual-hasta-mayo/",
      date: "Septiembre 14, 2021",
      imageSrc: img09,
      imageAlt:
        "Personas físicas podrán presentar declaración anual hasta mayo",
    },
    {
      id: 10,
      name: "Complemento de Vehículos Usados",
      href: "/recursos/articulo-complemento-de-vehiculos-usados/",
      date: "Febrero 22, 2021",
      imageSrc: img10,
      imageAlt: "Complemento de Vehículos Usados",
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
