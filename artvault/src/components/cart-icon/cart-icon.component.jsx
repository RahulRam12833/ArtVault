import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CartIconContainer,
  ShoppingBag,
  ItemCount,
} from './cart-icon.styles';

import shoppingbag from '/src/assets/shopping-bag.svg';

import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.reducer';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;

    setIsAdding(true);

    const timer = setTimeout(() => {
      setIsAdding(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [cartCount]);

  const toggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <motion.div
        animate={
          isAdding
            ? {
                scale: [1, 1.15, 0.95, 1],
                rotate: [0, -5, 5, 0],
              }
            : { scale: 1, rotate: 0 }
        }
        transition={{
          duration: 0.45,
          ease: 'easeOut',
        }}
      >
        <ShoppingBag
          src={shoppingbag}
          alt="Shopping Bag"
        />
      </motion.div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={cartCount}
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
        >
          <ItemCount>
            {cartCount}
          </ItemCount>
        </motion.div>
      </AnimatePresence>
    </CartIconContainer>
  );
};

export default CartIcon;