import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);

  const handleSubmit = event => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const normalizedName = elements.name.value.toLowerCase();
    const normalizedNumber = elements.number.value.toLowerCase();
    if (
      contacts.find(contact => normalizedName === contact.name.toLowerCase())
    ) {
      return toast.error(`${elements.name.value} is already in contacts`);
    }

    const contactNumber = contacts.find(
      contact => normalizedNumber === contact.number.toLowerCase()
    );
    if (contactNumber) {
      return toast.error(
        `${elements.number.value} is set for contact ${contactNumber.name}`
      );
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

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
        <Typography component="h2" variant="h5" color="#3e426b">
          Add new contact
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChange}
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="number"
                type="tel"
                label="Phone number"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                autoComplete="number"
                onChange={handleChange}
                value={number}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;

Form.propType = {
  handleSubmit: PropTypes.func.required,
  handleChange: PropTypes.func.required,
  name: PropTypes.string.required,
  number: PropTypes.string.required,
};
