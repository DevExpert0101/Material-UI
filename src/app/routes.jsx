import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// echart page
const Bots = Loadable(lazy(() => import('app/views/charts/echarts/General')));

// dashboard page
const Chat = Loadable(lazy(() => import('app/views/dashboard/Chat')));

// knowledge page
const Knowledge = Loadable(lazy(() => import('app/views/charts/echarts/Knowledge')));

// personaligy page
const Personality = Loadable(lazy(() => import('app/views/charts/echarts/Personality')));

// interface page
const Interface = Loadable(lazy(() => import('app/views/charts/echarts/Interface')));

// team page
const Team = Loadable(lazy(() => import('app/views/dashboard/Team')));

// team billing page
const Billing = Loadable(lazy(() => import('app/views/dashboard/Billing')));

// create bot page
const CreateBot = Loadable(lazy(() => import('app/views/dashboard/shared/CreateBot')));

// knwledge teamie page
const Teamie = Loadable(lazy(() => import('app/views/charts/echarts/Teamie')));

// teamie create page
const TeamieCreate = Loadable(lazy(() => import('app/views/charts/echarts/TeamieCreat')));

// chat platform page
const ChatPlatform = Loadable(lazy(() => import('app/views/dashboard/ChatPlatform')));


const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      {
        path: '/dashboard/chat',
        element: <ChatPlatform />,
        auth: authRoles.admin
      },

      // e-chart rooute
      {
        path: '/bots/general',
        element: <Bots />,
        auth: authRoles.editor
      },

      // knowledge route
      {
        path: '/bots/knowledge',
        element: <Knowledge />,
        auth: authRoles.guest
      },

      // personality route
      {
        path: '/bots/personality',
        element: <Personality />,
        auth: authRoles.admin
      },

      // interface route
      {
        path: '/bots/interface',
        element: <Interface />,
        auth: authRoles.editor
      },

      // team route
      {
        path: '/dashboard/team',
        element: <Team />,
        auth: authRoles.admin
      },

      // team billing page
      {
        path: '/dashboard/team/billing',
        element: <Billing />,
        auth: authRoles.admin
      },

      // create bot page
      {
        path: '/dashboard/chat/create',
        element: <CreateBot />,
        auth: authRoles.admin
      },

      // teamie page
      {
        path: '/dashboard/knowledge/teamie',
        element: <Teamie />,
        auth: authRoles.admin
      },

      // teamie create page
      {
        path: '/dashboard/knowledge/create',
        element: <TeamieCreate />,
        auth: authRoles.admin
      },

      // chat platform page
      {
        path: '/dashboard/chatplatform',
        element: <ChatPlatform />,
        auth: authRoles.guest
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="dashboard/chat" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
