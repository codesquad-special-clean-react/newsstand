import React from 'react';
import { useContext } from 'react';
import { CardIcon, ListIcon } from '../../assets/icons';
import { RouterContext } from '../../context/RouterContext';
import Link from '../../router/components/Link';
import { routes } from '../../router/routes';
import * as Styled from './NavigationBar.style';

const NavigationBar = () => {
    const { route } = useContext(RouterContext);
    const isMyNewsSelected = route.path.startsWith('/mynews');

    return (
        <Styled.Container>
            <Styled.Categories>
                뉴스스탠드 {`>`} 
                <Link to={routes.press.total.path}>전체 언론사</Link>
                <Styled.Divider/>
                <Link to={routes.mynews.list.path} isSelected={isMyNewsSelected}>MY 뉴스</Link>
            </Styled.Categories>
            { isMyNewsSelected && 
                <Styled.CardTypes>
                    <Link to={routes.mynews.card.path}>
                        <CardIcon/>
                    </Link>
                    <Link to={routes.mynews.list.path}>
                        <ListIcon/>
                    </Link>
                </Styled.CardTypes>
            }
            <div></div>
        </Styled.Container>
    );
};

export default NavigationBar;