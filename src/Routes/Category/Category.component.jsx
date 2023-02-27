import "./Category.style.scss";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
// import { CategoriesContext } from "../../context/categories.context";
import { useEffect } from "react";
import ProductCard from "../../components/Product Card/ProductCard.component";

import { useSelector } from "react-redux";
import { selectCategoriesMap, selectIsCategoryLoading } from "../../Redux Store/categories/categories.selector";

import Spinner from '../../components/Spinner/spinner.component'

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    // const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectIsCategoryLoading);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return(
            <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {isLoading ? (<Spinner />) : (
            <div className="category-container">
                {
                products &&
                products.map((product) => 
                <ProductCard key ={product.id} product={product}/>
            )
        }</div>)
            }
            </>
    )
}

export default Category;