import useNewsData from '../../hooks/useNewsData';
import GridContainer from '../common/GridContainer';
import GridItem from '../common/GridItem';
import LogoImage from '../common/LogoImage';

const MyNewsCard = () => {
    const { subscribedPressList } = useNewsData(18);
    return (
        <GridContainer>
            {
                subscribedPressList.map(({ logoImgUrl }) => 
                    <GridItem>
                        <LogoImage logoUrl={ logoImgUrl }/>
                    </GridItem>)
            }
        </GridContainer>
    );
};

export default MyNewsCard;