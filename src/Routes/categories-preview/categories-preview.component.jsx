// import { useContext } from "react";
// import ProductCard from "../../components/Product Card/ProductCard.component";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../context/categories.context";

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoryLoading } from "../../Redux Store/categories/categories.selector";
import Spinner from "../../components/Spinner/spinner.component";

const CategoriesPreview = () => 
{
    const categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoryLoading);
    return(
            <>
            { isLoading ? (<Spinner />) :(
                Object.keys(categoriesMap).map
                (
                    (title) => 
                    {
                    const products = categoriesMap[title];
                    return (
                            <CategoryPreview title={title} products={products} key={title}/>
                        )
                    }
                )
           ) }
            </>
        )
}

export default CategoriesPreview;