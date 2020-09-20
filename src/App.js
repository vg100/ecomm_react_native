import * as React from "react";

import { Provider } from "react-redux";

import { Navigator } from "./navigation/navigator";
import { store } from "./Redux/store";


console.disableYellowBox = true;
 const App=()=>{
 
  return (
    <Provider store={store}>
      
    <Navigator />
  </Provider>
  );
}

export default App
