import "./shop.style.scss";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../Category/Category.component";

import {setCategories} from "../../Redux Store/categories/categories.action";
// import { getCollectionsAndDocuments } from "../../utils/Firebase/Firebase.component";
// import { thunkFetchCategoriesAsync } from "../../Redux Store/categories/categories.action";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCategoriesStart } from "../../Redux Store/categories/categories.action";

const Shop = () => 
{   
    const dispatch = useDispatch();
    useEffect(() => {
        // const getCategories = () => {
            // const categories = await getCollectionsAndDocuments();
            // dispatch(thunkFetchCategoriesAsync());
        // }
        // getCategories();
        dispatch(fetchCategoriesStart());
      }, []);

    return(
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=":category" element={<Category />}/>
        </Routes>

        )
}

export default Shop;