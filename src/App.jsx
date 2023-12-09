import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routes } from 'routes';

function App() {
  const auth = useSelector((state) => state.auth);
  const router = createBrowserRouter(routes(auth));

  return <RouterProvider router={router} />;
}

export default App;
