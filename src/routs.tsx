import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Dotabuild } from './dota2/builds';
import { TopicPage } from './TopicPage';
import { Customs } from './dota2/customs';
import { TopicDetail } from './TopicDetail';
import { Dotabugs } from './dota2/dotabugs';
import { Dotaskins } from './dota2/dotaskins';
import { EditTopicPage } from './EditTopicPage';
import { Dotatournaments } from './dota2/dotatournaments';
import { ErrorPage404 } from './ErrorPage404'; // Импортируем страницу ошибки
import { DotaMeta } from './dota2/meta';
import { DotaTeamFinder } from './dota2/team-finder';
import { DotaUpdates } from './dota2/updates';
import { Csbugs } from './cs2/csbugs';
import { AntiCheat } from './cs2/AntiCheat';
import { Throws } from './cs2/Throws';
import { Workshop } from './cs2/Workshop';
import { CsUpdates } from './cs2/CsUpdates';
import { CsKins } from './cs2/CsKins';
import { CsTeamFinder } from './cs2/CsTeamFinder';
import { CsTournaments } from './cs2/CsTournaments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage404 />,
  },
  {
    path: '/dota2/builds',
    element: <Dotabuild />,
  },
  {
    path: '/create-topic',
    element: <TopicPage />,
  },
  {
    path: '/dota2/customs',
    element: <Customs />,
  },
  {
    path: '/details/:type/:id',
    element: <TopicDetail />,
  },
  {
    path: '/dota2/bugs',
    element: <Dotabugs />,
  },
  {
    path: '/dota2/skins',
    element: <Dotaskins />,
  },
  {
    path: '/edit/:type/:id',
    element: <EditTopicPage />,
  },
  {
    path: '/dota2/tournaments',
    element: <Dotatournaments />,
  },
  {
    path: '/dota2/meta',
    element: <DotaMeta />,
  },
  {
    path: '/dota2/team-finder',
    element: <DotaTeamFinder />,
  },
  {
    path: '/dota2/updates',
    element: <DotaUpdates />,
  },
  {
    path: '/cs2/csbugs',
    element: <Csbugs />,
  },
  {
    path: '/cs2/antiCheat',
    element: <AntiCheat />,
  },
  {
    path: '/cs2/throws',
    element: <Throws />,
  },
  {
    path: '/cs2/workshop',
    element: <Workshop />,
  },
  {
    path: '/cs2/csupdates',
    element: <CsUpdates />,
  },
  {
    path: '/cs2/cskins',
    element: <CsKins />,
  },
  {
    path: '/cs2/csteam-finder',
    element: <CsTeamFinder />,
  },
  {
    path: '/cs2/cstournaments',
    element: <CsTournaments />,
  },
]);

export const Rout: React.FC = () => {
  return <RouterProvider router={router} />;
};