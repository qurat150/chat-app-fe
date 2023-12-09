import { AuthLayout, MainLayout, ErrorLayout } from 'layouts';
import { loginRoutes } from './auth';
import { Chat, SetAvatar } from 'pages';
// import ChatScreen from 'components/ChatList';

export const routes = (auth) => [
  {
    path: '/',
    element: <AuthLayout isLoggedIn={auth.isLoggedIn} />,
    children: loginRoutes,
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <h1>404 not found</h1>,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout isLoggedIn={auth.isLoggedIn} />,
    children: [
      {
        index: true,
        element: <Chat />,
      },
      { path: '/set-profile-picture', element: <SetAvatar /> },
    ],
  },
];
