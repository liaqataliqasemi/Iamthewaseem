import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from './Containers/Layout';
import LandingPage from './Containers/Pages/LandingPage';
import About from './Containers/Pages/About';
import NotFound from './Containers/Pages/NotFound';
import Author from './Containers/Pages/Author';
import Books from './Containers/Pages/Books';
import Ensan1 from './Containers/Pages/Ensan1';
import Ensan2 from './Containers/Pages/Ensan2';
import Ensan3 from './Containers/Pages/Ensan3';
import Ensan4 from './Containers/Pages/Ensan4';
import Amazon from './Containers/Pages/Amazon';
 // eslint-disable-next-line
import Paypal from './Containers/Pages/Paypal';
import BuyHere from './Containers/Pages/Buyhere';
import Buy from './Containers/Pages/Buy';
import Contact from './Containers/Pages/Contact';
import Construction from './Containers/Pages/Construction'
import Volume1 from './Containers/Pages/Volume1';
import Volume2 from './Containers/Pages/Volume2';
import Volume3 from './Containers/Pages/Volume3';
import Volume4 from './Containers/Pages/Volume4';

class Routes extends Component {
    render(){
        return (
            <div>
                <Layout>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" render={props => <LandingPage {...props} />} exact component={LandingPage}/>
                            <Route path="/AboutUs" exact component={About}/>
                            <Route path="/Author" exact component={Author}/>
                            <Route path="/Ensan_shinakhti_vol_one" exact component={Ensan1}/>
                            <Route path="/Ensan_shinakhti_vol_two" exact component={Ensan2}/>
                            <Route path="/Ensan_shinakhti_vol_three" exact component={Ensan3}/>
                            <Route path="/Ensan_shinakhti_vol_four" exact component={Ensan4}/>
                            <Route path="/Amazon" exact component={Amazon}/>
                            <Route path="/PayPal" exact component={Construction}/>
                            <Route path="/Books" exact component={Books}/>
                            <Route path="/Buy" exact component={Buy}/>
                            <Route path="/BuyHere" exact component={BuyHere}/>
                            <Route path="/Volume1" exact component={Volume1}/>
                            <Route path="/Volume2" exact component={Volume2}/>
                            <Route path="/Volume3" exact component={Volume3}/>
                            <Route path="/Volume4" exact component={Volume4}/>
                            <Route path="/ContactUs" exact component={Contact}/>
                            <Route path="*" exact component={NotFound}/>

                        </Switch>
                    </BrowserRouter>
                </Layout>
            </div>
    );
}
};

export default Routes;
