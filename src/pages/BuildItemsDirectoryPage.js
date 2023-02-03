import { Container } from 'reactstrap';
import BuildItemsList from '../features/buildItems/BuildItemsList';
import SubHeader from '../components/SubHeader';

const BuildItemsDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory' />
            <BuildItemsList />
        </Container>
    );
};

export default BuildItemsDirectoryPage;