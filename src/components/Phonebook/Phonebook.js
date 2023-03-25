import { useSelector } from 'react-redux';
import styles from './phonebook.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import { authSelectors } from 'redux/auth';

const PhoneBook = () => {
  const contactsRdx = useSelector(state => state.contacts);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <>
          <h1 className={styles.mainTitle}>Phonebook</h1>
          <Form />

          <div className={styles.wrap}>
            {contactsRdx.length === 0 ? (
              <p>Your contacts list is empty</p>
            ) : (
              <>
                <Filter />
                <ContactsList />
              </>
            )}
          </div>
        </>
      ) : (
        <h1 className={styles.title}>Phonebook App</h1>
      )}
    </div>
  );
};

export default PhoneBook;
