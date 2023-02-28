import Home from "./Routes/Home/home.component";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Routes/Navigation/Navigation.component";
import Authenticate from "./Routes/Authenticate/Authenticate.component";

import Shop from "./Routes/Shop/shop.component";
import Checkout from "../src/Routes/checkout/Checkout.component";

//import { onAuthChangeStateListener, createUserFromAuth, getCurrentUser } from "./utils/Firebase/Firebase.component";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import {setCurrentUser, checkUserSession} from "../src/Redux Store/user/User.action";
import Success from "./Routes/Success/success.component";
import Error from "./Routes/error/Error.component";



const App= () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(checkUserSession());
    // getCurrentUser().then((user) => console.log(user));
    // const unsubscribe = onAuthChangeStateListener((user) =>{
    //     console.log(user);
    //     if (user){
    //         createUserFromAuth(user);
    //     }
    //     dispatch(setCurrentUser(user));
    // });
    // return unsubscribe;
}, 
[]);


  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}/>
        <Route path="auth" element={<Authenticate />}/>
        <Route path="checkout" element={<Checkout />}/>
        <Route path="success" element={<Success />}/>
        <Route path="error" element={<Error />}/>
      </Route>
    </Routes>
  )
}

export default App;