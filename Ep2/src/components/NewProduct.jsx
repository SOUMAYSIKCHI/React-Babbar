import './NewProduct.css'
import ProductForm from './ProductForm' 
function NewProduct(props){
    function printproduct(product){
        console.log("Inside new Product-2",product);
        // console.log(product);
        props.soumay(product);
    }

    return(<div className='new-product'>
        <ProductForm onSaveProduct={printproduct} />
    </div>)
}

export default NewProduct