import useNewsData from '../../hooks/useNewsData';
import GridContainer from '../common/GridContainer';
import GridItem from '../common/GridItem';
import LogoImage from '../common/LogoImage';

const MyNewsCard = () => {
    const { pressLogoUrls } = useNewsData(18);
    return (
        <GridContainer>
            {
                pressLogoUrls.map((logoUrl) => 
                    <GridItem>
                        <LogoImage logoUrl={ logoUrl }/>
                    </GridItem>)
            }
        </GridContainer>
    );
};

export default MyNewsCard;