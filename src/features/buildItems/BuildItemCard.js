import { Link } from 'react-router-dom';

const BuildItemCard = ({ builditem }) => {
    const { id, image, name } = builditem;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width = '100%' src = {image} alt = {name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default BuildItemCard;