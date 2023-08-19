import { Suspense, lazy } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { routes } from "./routes/routes";
import DataProvider from './context/DataProvider';
import ErrorComponent from './components/Common/ErrorComponent'
import { Typography, CircularProgress, Box } from "@mui/material";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={
      <Box>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </Box>
    }>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </Suspense>
  );
}

export default App;