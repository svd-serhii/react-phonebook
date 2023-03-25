import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Welcome = lazy(() => import('components/Welcome/Welcome'));
const SignIn = lazy(() => import('components/SignIn/SignIn'));
const SignUp = lazy(() => import('components/SignUp/SignUp'));
const PhoneBook = lazy(() => import('components/Phonebook/Phonebook'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route element={<PublicRoute />}>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
