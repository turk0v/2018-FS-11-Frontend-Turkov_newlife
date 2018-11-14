const KB = Math.pow(2,10);
const MB = Math.pow(KB,10);


function getReadableSize(size) {
    var i = size == 0 ? 0 : Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
};

export {getReadableSize,KB,MB};