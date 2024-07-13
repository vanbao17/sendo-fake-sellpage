import Log from './components/Pages/Log/Log';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Defaultlaytout from '../src/components/layout/DeafaultLayout/Defaultlaytout';
import Newfeeds from './components/Pages/Newfeeds/Newfeeds';
import TypeShop from './components/Pages/TypeShop/TypeShop';
import CreateInforShop from './components/Pages/CreateInforShop/CreateInforShop';
import publicRoutes from './routes/Routes';
import {Fragment} from 'react';
import Popup from './components/layout/components/Popup/Popup';
import BtnChat from './components/layout/components/BtnChat/BtnChat';
function App() {
  return (
    <Router>
      <div className="App" style={{position: 'relative'}}>
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout;
            if (item.posittion == null) {
              Layout = Defaultlaytout;
            }

            if (item.layout) {
              Layout = item.layout;
            }
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  item.posittion ? (
                    <Page data={item.path} />
                  ) : (
                    <Layout>
                      <Page data={item.path} />
                    </Layout>
                  )
                }
              ></Route>
            );
          })}
        </Routes>
        <BtnChat />
      </div>
    </Router>
  );
}

export default App;
