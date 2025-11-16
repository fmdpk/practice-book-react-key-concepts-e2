import {NavLink} from "react-router-dom";
import * as classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
      <>
        <ul>
          <li>
            <NavLink
                className={({isActive}) =>
                    isActive ? classes.active : undefined
                }
                to={'/'}>Home
            </NavLink>
          </li>
          <li>
            <NavLink
                className={({isActive}) =>
                    isActive ? classes.active : undefined
                }
                to={'/products'}>Products
            </NavLink>
          </li>
        </ul>
      </>
  )
}

export default MainNavigation
