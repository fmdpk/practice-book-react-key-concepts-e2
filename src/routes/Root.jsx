import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Root = () => {
  const navigation = useNavigation()
  return (
      <>
        {navigation.state === 'loading' && <span>loading ...</span>}
        <MainNavigation/>
        {/*<Outlet/>*/}
        <AnimatePresence mode="wait">
          <motion.div
              key={location.pathname}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              // exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ position: "relative" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </>
  )
}

export default Root
