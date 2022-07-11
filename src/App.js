
import "./style.css";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <XyzTransition appear duration="auto">
      <div className="page-wrap">
        <Header />
        <Body />
        <Footer />
      </div>
    </XyzTransition>
  );
}
// const NewApp = (props) => {
//   return  <HashRouter basename={process.env.PUBLIC_URL}>
//       <Provider store={store}>
//           <AppContainer />
//       </Provider>
//     </HashRouter>
//  }