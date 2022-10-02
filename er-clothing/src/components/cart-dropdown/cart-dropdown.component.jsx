import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.stles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {[].map(item=> <CartItem CartItem={item} />)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;