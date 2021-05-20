import useRoute from '../../hooks/useRoute';
import { formatLocationToRoute } from '../utils';
import * as Styled from './Link.style';

const Link = (props) => {
    const { to, children, onClick, isSelected } = props;
    const { route, setRoute, history } = useRoute();
    const isSelectedLink = isSelected || route.path === to;

    const handleClickLink = (event) => {
        event.preventDefault();
        if(isSelectedLink) return;

        if(onClick) onClick(event);

        history.push(to);
        setRoute(formatLocationToRoute({ pathname: to }));
    }

    return (
        <Styled.A { ...props } href={to} onClick={handleClickLink} isSelected={isSelectedLink}>
            {children} 
        </Styled.A>
    );
};

export default Link;
