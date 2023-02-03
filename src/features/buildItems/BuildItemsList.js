import { Col, Row } from 'reactstrap';
import BuildItemCard from './BuildItemCard';
import { selectAllBuildItems } from './buildItemsSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading'; 

const BuildItemsList = () => {
    const builditems = useSelector(selectAllBuildItems);
    console.log('build items:', builditems);
    const isLoading = useSelector((state) => state.builditems.isLoading);
    const errMsg = useSelector((state) => state.builditems.errMsg);
    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }
    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }
    return (
        <Row className='ms-auto'>
            {builditems.map((builditem) => {
                return (
                    <Col md='5' className='m-4' key={builditem.id}>
                        <BuildItemCard builditem={builditem} />
                    </Col>
                );
            })}
        </Row>
    );
};


export default BuildItemsList; 