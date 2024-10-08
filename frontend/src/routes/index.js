import config from '../config';
import Media from '../Layouts/components/Media/';
import MediaFull from '../Layouts/components/Media/MediaFull';
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
    {
        path: config.path.mediaFull,
        element: (
            <DefaultLayout>
                <MediaFull />
            </DefaultLayout>
        ),
    },
];

export default routes;
