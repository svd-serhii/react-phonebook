import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter-slice';

const Filter = () => {
  const filterRdx = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{ marginBottom: 2 }}
            component="h2"
            variant="h5"
            color="#3e426b"
          >
            Contacts
          </Typography>

          <TextField
            autoComplete="given-name"
            name="name"
            type="text"
            required
            fullWidth
            id="name"
            label="Find contacts by name"
            onChange={({ currentTarget }) =>
              dispatch(setFilter(currentTarget.value))
            }
            value={filterRdx}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;

Filter.propType = {};
