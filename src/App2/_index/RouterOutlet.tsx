import { Redirect, Route } from 'react-router-dom';
import Tab1 from './../pages/Tab1';
import Tab2 from './../pages/Tab2';
import Tab3 from './../pages/Tab3';
import Tab4 from './../pages/Tab4';
import Login from '../pages/Login';

const RouterOutlet: React.FC = () => (
    <>
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/tab1">
            <Tab1 />
        </Route>
        <Route exact path="/tab2">
            <Tab2 />
        </Route>
        <Route path="/tab3">
            <Tab3 />
        </Route>
        <Route path="/tab4">
            <Tab4 />
        </Route>
        <Route exact path="/">
            <Redirect to="/tab2" />
        </Route>
    </>
  );
  
  export default RouterOutlet;