import useNewsData from '../../hooks/useNewsData';
import GridContainer from '../common/GridContainer';
import GridItem from '../common/GridItem';
import LogoImage from '../common/LogoImage';
import NoSubscribed from '../common/NoSubscribed';

const MyNewsCard = () => {
    const { subscribedNewsData } = useNewsData(18);
    if(!subscribedNewsData.length) return <NoSubscribed/>

    return (
        <GridContainer>
            {
                subscribedNewsData.map(({ logoImgUrl }, idx) => 
                    <GridItem key={idx}>
                        <LogoImage logoUrl={ logoImgUrl }/>
                    </GridItem>)
            }
        </GridContainer>
    );
};

export default MyNewsCard;