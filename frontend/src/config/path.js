const baseURL = '';

var path = {
    home: '/',
    media: '/media',
    mediaFull: '/full/media',
};

function addPrefixURL(path, url) {
    for(var key in path) {
        path[key] = url+path[key];
    }
    return path;
}

const exportPath = addPrefixURL(path, baseURL);

console.log(exportPath);

export default exportPath;
