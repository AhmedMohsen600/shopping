import { Route, Routes } from 'react-router-dom';
import * as ROUTES from '../constant/routes';
import { Home, PageDetails } from '../pages';

export default function PageRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PAGE_DETAILS} element={<PageDetails />} />
      <Route path="*" element={<div>PAGE NOT FOUND!</div>} />
    </Routes>
  );
}
