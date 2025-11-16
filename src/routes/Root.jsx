import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet, useNavigation} from "react-router-dom";

const Root = () => {
  const navigation = useNavigation()
  return (
      <>
        {navigation.state === 'loading' && <span>loading ...</span>}
        <MainNavigation/>
        <Outlet/>
      </>
  )
}

export default Root
