import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Footer from '../Components/Home/Footer';
import Navbar from '../Components/Home/Navbar';

const HomeLayout = props => {
    return (
        <Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </Fragment>
    );
};

export default function HomeTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render = {propsComponent => (
                <HomeLayout>
                    <Component { ...propsComponent}/>
                </HomeLayout>
            )}
        />
    )
}
