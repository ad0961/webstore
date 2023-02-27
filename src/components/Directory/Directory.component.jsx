import './Directory.style.scss'
import CategoryItem from '../DirectoryItem/DirectoryItem.component';

const categories = [
  {
    "id": 1,
    "title": "Hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
    "Route" : "/shop/hats"
  },
  {
    "id": 2,
    "title": "Jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
    "Route" : "/shop/jackets"
  },
  {
    "id": 3,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
    "Route" : "/shop/sneakers"
  },
  {
    "id": 4,
    "title": "Womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
    "Route" : "/shop/womens"
  },
  {
    "id": 5,
    "title": "Mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
    "Route" : "/shop/mens"
  }
]

const Category = () => {
      return(
      <div className="categories-container">
      {categories.map((category) => {
        return(
          <CategoryItem key={category.id} category={category}/>
        )
      })}
    </div>
      )
}

export default Category;