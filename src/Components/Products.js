import Badge from 'react-bootstrap/Badge';

// Create a function component that returns the product info.
function Product(props) {
    return (
        <div className="product">          
            <h4>{props.productName}</h4> 
            <p>{props.productDescription}</p>
            <h6><Badge bg="warning" text="dark">{props.productPrice}</Badge></h6>
        </div>
    );
}

// Export the Product component.
export default Product;