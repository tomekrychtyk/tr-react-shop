import { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const { open, setOpen } = useContext(CartContext);

  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={() => setOpen(!open)} />
      <span className='item-count'>10</span>
    </div>
  );
};

export default CartIcon;
