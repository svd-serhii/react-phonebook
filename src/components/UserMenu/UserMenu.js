import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import styles from './userMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUsername);
  // console.log(user);

  const onLogOut = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div className={styles.menuContainer}>
      <span className={styles.userName}>Welcome, {user.name}</span>
      <button className={styles.userMenuBtn} type="button" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
}
