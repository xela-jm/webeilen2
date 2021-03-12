import React from 'react';
import Loadable from 'react-loadable';

import ContentLoader from '../components/global/loaders/ContentLoader';

const AsyncHomePage = Loadable({
    loader: () => import('../routes/home'),
    loading: () => <ContentLoader />
});

const AsyncSignUp = Loadable({
    loader: () => import('../routes/session/sign-up'),
    loading: () => <ContentLoader />
});

export {
    AsyncHomePage,
    AsyncSignUp
}