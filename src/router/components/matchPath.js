const matchPath = (pathname, options = {}) => {
    const { path, exact = false } = options;

    const paths = [path];

    return paths.reduce((matched, path) => {
        if(!path && path !== "") return null;
        if (matched) return matched;
    })
}