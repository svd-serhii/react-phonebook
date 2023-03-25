import { RotatingLines } from 'react-loader-spinner';
import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <RotatingLines
        strokeColor="#3194d1"
        strokeWidth="5"
        animationDuration="0.75"
        width="30"
        visible={true}
      />
    </div>
  );
};

export const LoaderSmall = () => {
  return (
    <div className={styles.LoaderContainerSmall}>
      <RotatingLines
        strokeColor="#4b6575"
        strokeWidth="5"
        animationDuration="0.75"
        width="12"
        visible={true}
      />
    </div>
  );
};

export const LoaderMiddle = () => {
  return (
    <div className={styles.LoaderContainerSmall}>
      <RotatingLines
        strokeColor="#2b384c"
        strokeWidth="5"
        animationDuration="0.75"
        width="14"
        visible={true}
      />
    </div>
  );
};
