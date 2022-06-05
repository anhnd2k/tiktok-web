import HeaderOnly from '~/components/Layout/HeaderOnly';

import Home from '~/page/Home';
import Following from '~/page/Following';
import Upload from '~/page/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

export { publicRoutes };
