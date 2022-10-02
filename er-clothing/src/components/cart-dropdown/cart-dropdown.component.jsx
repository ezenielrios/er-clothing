import Button from '../button/button.component';

import './cart-dropdown.stles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;