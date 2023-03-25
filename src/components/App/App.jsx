import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from 'components/AppBar/AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { UserRoutes } from 'UserRoutes';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <div className={styles.container}>
        {!isFetchingCurrentUser && <UserRoutes />}
      </div>
      <ToastContainer autoClose={2000} theme="light" />
    </>
  );
}
