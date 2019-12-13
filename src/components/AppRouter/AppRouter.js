import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getRoutes } from './RoutesProvider'
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'
import PageThree from '../PageThree/PageThree'

function AppRouter() {

    const Routes = getRoutes();
    const mainRoute = Routes.OPTION_1;
    const routePrefix = '/';

    return (
        <Switch>
            <Route path={routePrefix + Routes.OPTION_1}>
                <PageOne />
            </Route>
            <Route path={routePrefix + Routes.OPTION_2}>
                <PageTwo />
            </Route>
            <Route path={routePrefix + Routes.OPTION_3}>
                <PageThree />
            </Route>
            <Route path="/"><Redirect to={mainRoute} /></Route>
            <Route path=""><Redirect to={mainRoute} /></Route>
        </Switch>
    )
}

export default AppRouter