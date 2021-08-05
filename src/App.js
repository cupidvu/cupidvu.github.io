import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './routes/route';
import React, { Suspense, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./layouts/Layout/ScrollToTop";
import { useDispatch } from 'react-redux';
import { doSomethings } from './reduxs/doSomethings';
import Loading from "./layouts/Loading/Loading";

toast.configure();
export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(doSomethings())
    }, [dispatch]);
    
    return (
        <React.Fragment>
            <Router >
                <Suspense fallback={<Loading />}>
                    <div className="animeAB-wrapper">
                        <Switch>
                            <Route />
                        </Switch>
                    </div>
                </Suspense>
            </Router>
            {/* scroll to top */}
            <ScrollToTop></ScrollToTop>
            {/* toast notification */}
            <ToastContainer 
                autoClose={2000} 
                closeButton={true} 
                hideProgressBar={false} 
                position={'top-right'} />
        </React.Fragment>
    )
}

