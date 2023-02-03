import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectBuildItemById } from '../features/buildItems/buildItemsSlice';
import BuildItemDetail from '../features/buildItems/BuildItemDetail';
// import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';

const BuildItemDetailPage = () => {
    const { builditemId } = useParams();
    const builditem = useSelector(selectBuildItemById(builditemId));
    console.log('build item:', builditem);

    const isLoading = useSelector((state) => state.builditems.isLoading);
    const errMsg = useSelector((state) => state.builiItems.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <BuildItemDetail builditem={builditem} />
                {/* <CommentsList builditemId={builditemId} /> */}
            </>
        );
    }

    return (
        <Container>
            {builditem && <SubHeader current={builditem.name} detail={true} />}
            <Row>{content}</Row>
        </Container>
    );
};

export default BuildItemDetailPage;