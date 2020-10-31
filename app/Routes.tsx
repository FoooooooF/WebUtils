/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
// import QrcodePage from './containers/QrcodePage';

// Lazily load routes and code split with webpackp
const LazyCounterPage = React.lazy(() =>
    import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);
const LazyQrcodePage = React.lazy(() =>
    import(/* webpackChunkName: "CounterPage" */ './containers/QrcodePage')
);

const CounterPage = (props: Record<string, any>) => (
    <React.Suspense fallback={<h1>Loading...</h1>}>
        <LazyCounterPage {...props} />
    </React.Suspense>
);
const QrcodePage = (props: Record<string, any>) => (
    <React.Suspense fallback={<h1>Loading...</h1>}>
        <LazyQrcodePage {...props} />
    </React.Suspense>
);
// 默认Route后面不能放路由
export default function Routes() {
    return (
        <App>
            <Switch>
                <Route path={routes.QRCODE} component={QrcodePage} />
                <Route path={routes.COUNTER} component={CounterPage} />
                <Route path={routes.HOME} component={HomePage} />
            </Switch>
        </App>
    );
}
