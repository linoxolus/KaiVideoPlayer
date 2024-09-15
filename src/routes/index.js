import config from '../config';
import Media from '../Layouts/components/Media/';
import MediaList from '../Layouts/components/Media/MediaList';
import DefaultLayout from '../Layouts/DefaultLayout';

const routes = [
    {
        path: config.path.home,
        element: (
            <DefaultLayout>
                <MediaList />
            </DefaultLayout>
        ),
    },
    {
        path: `${config.path.media}/*`,
        element: (
            <DefaultLayout>
                <Media />
            </DefaultLayout>
        ),
    },
];

export default routes;
