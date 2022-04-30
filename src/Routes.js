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
import Paypal from './Containers/Pages/Paypal';
import Buy from './Containers/Pages/Buy';
import Contact from './Containers/Pages/Contact';


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
                            <Route path="/PayPal" exact component={Paypal}/>
                            <Route path="/Books" exact component={Books}/>
                            <Route path="/Buy" exact component={Buy}/>
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
