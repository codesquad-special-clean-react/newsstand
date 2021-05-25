import { CardIcon, LeftIcon, ListIcon, RightIcon } from '../../assets/icons';
import useRoute from '../../hooks/useRoute';
import Link from '../../router/components/Link';
import { routes } from '../../router/routes';
import * as Styled from './NavigationBar.style';

const NavigationBar = () => {
    const { isMyNewsSelected } = useRoute();

    const { list, card } = routes.mynews;
    const { total : press } = routes.press;

    return (
        <Styled.Container>
            <Styled.Categories>
                뉴스스탠드 {`>`} 
                <Link to={press.path}>전체 언론사</Link>
                <Styled.Divider/>
                <Link to={list.path} isSelected={isMyNewsSelected}>MY 뉴스</Link>
            </Styled.Categories>
            { isMyNewsSelected && 
                <Styled.CardTypes>
                    <Link to={card.path}>
                        <CardIcon/>
                    </Link>
                    <Link to={list.path}>
                        <ListIcon/>
                    </Link>
                </Styled.CardTypes>
            }
            <Styled.ArrowContainer>
                <Link>
                    <LeftIcon />
                </Link>
                <Link>
                    <RightIcon />
                </Link>
            </Styled.ArrowContainer>
        </Styled.Container>
    );
};

export default NavigationBar;