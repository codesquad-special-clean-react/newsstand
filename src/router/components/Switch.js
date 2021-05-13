import useRoute from "../../hooks/useRoute";
import PageNotFound from "../../components/error/PageNotFound";

const Switch = ({ children }) => {
    const { route } = useRoute();
    const { path: currentPath } = route;

    for(let i = 0; i < children.length; i++) {
        const element = children[i];
        const { path, exact = false } = element.props;

        if(!path) {
            return <PageNotFound/>
        }

        if(exact && path === currentPath) {
            return element;
        }


        if(path.startsWith(currentPath)) {
            return element;
        }
    }
};

export default Switch;