import React from 'react';
import { useContext } from 'react';
import { history, RouterContext } from '../../context/RouterContext';
import * as Styled from './Link.style';

const Link = (props) => {
    const { to, children, onClick, isSelected } = props;
    const { route } = useContext(RouterContext);
    const isSelectedLink = isSelected || route.path === to;

    const handleClickLink = (event) => {
        event.preventDefault();
        if(isSelectedLink) return;

        if(onClick) onClick(event);
        history.push(to);
    }

    return (
        <Styled.A { ...props } href={to} onClick={handleClickLink} isSelected={isSelectedLink}>
            {children} 
        </Styled.A>
    );
};

export default Link;
