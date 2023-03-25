import { Mail } from '@mui/icons-material';
import {
  Avatar,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
// import PersonRemove from '@mui/icons-material/PersonRemoveSharp';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';

import styles from './ContactsList.module.css';

const ContactsList = () => {
  const contactsRdx = useSelector(state => state.contacts.items);
  const filterRdx = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const searchContact = () => {
    const normalizeFilter = filterRdx.toLowerCase();
    return contactsRdx.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredList = searchContact();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <List className={styles.contactsList}>
          {filteredList.map(({ id, name, number }) => (
            <ListItem key={id} className={styles.contactItem}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: '#3e426b' }}>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                sx={{ color: '#3e426b' }}
                primary={name}
                secondary={number}
              />
              <IconButton
                size="small"
                variant="contained"
                color="primary"
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <PersonRemoveOutlinedIcon sx={{ color: '#3e426b' }} />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>

    // <ul className={styles.contactsList}>
    //   {filteredList.map(({ id, name, number }) => (
    //     <li key={id} className={styles.contactItem}>
    //       <p className={styles.contact}>
    //         {name}: {number}
    //       </p>
    //       <button
    //         className={styles.btnList}
    //         type="button"
    //         onClick={handleDelete}
    //       >
    //         Delete
    //       </button>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default ContactsList;
