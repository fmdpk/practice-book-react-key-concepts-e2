import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './SideDrawer.module.css';

function SideDrawer({ onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  console.log('SideDrawer')

  // Trigger the opening animation *after* mounting
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10); // tiny delay allows reflow
    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsClosing(true);
  }

  useEffect(() => {
    if (!isClosing) return;

    const timer = setTimeout(() => {
      onClose();
    }, 300); // must match CSS animation duration

    return () => clearTimeout(timer);
  }, [isClosing]);

  return createPortal(
      <>
        <div
            className={`${classes.backdrop} ${
                isClosing ? classes.fadeOut : isVisible ? classes.fadeIn : ''
            }`}
            onClick={handleClose}
        />
        <aside
            className={`${classes.drawer} ${
                isClosing ? classes.slideOut : isVisible ? classes.slideIn : ''
            }`}
        >
          <nav>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/products">All Products</a></li>
              <li><a href="/profile">Your Profile</a></li>
            </ul>
          </nav>
        </aside>
      </>,
      document.getElementById('drawer')
  );
}

export default SideDrawer;
