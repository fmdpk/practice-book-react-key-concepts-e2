import {useCallback, useEffect, useState} from 'react';

import SideDrawer from './SideDrawer.jsx';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  console.log('MainNavigation')
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }

  const handleCloseDrawer = useCallback(() => {
    setDrawerIsOpen(false);
  }, [])

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleOpenDrawer}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {drawerIsOpen && <SideDrawer isOpen={drawerIsOpen} onClose={handleCloseDrawer} />}
    </>
  );
}

export default MainNavigation;
