import {DirectoryContainer, BackgroundImage, Body} from './DirectoryItem.style.jsx';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {imageUrl, title, Route} =category;
    const navigate = useNavigate();
    const NavigateHandler = () => navigate(Route);
    return(
    <DirectoryContainer onClick={NavigateHandler}>
          <BackgroundImage source={imageUrl}/>
          <Body>
            <h2> {title} </h2>
            <p> Shop Now </p>
          </Body>
      </DirectoryContainer>
    )
}

export default CategoryItem;