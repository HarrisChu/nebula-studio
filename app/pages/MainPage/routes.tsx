import { lazy } from 'react';

const Schema = lazy(() => import('@app/pages/Schema'));
const Console = lazy(() => import('@app/pages/Console'));
const SpaceCreate = lazy(() => import('@app/pages/Schema/SpaceCreate'));
const SchemaConfig = lazy(() => import('@app/pages/Schema/SchemaConfig'));
const Import = lazy(() => import('@app/pages/Import'));
const TaskCreate = lazy(() => import('@app/pages/Import/TaskCreate'));
const SketchModeling = lazy(() => import('@app/pages/SketchModeling'));
const Welcome = lazy(() => import('@app/pages/Welcome'));


export const RoutesList = [
  {
    path: '/schema',
    component: Schema,
    exact: true,
  },
  {
    path: '/console',
    component: Console,
    exact: true,
  },
  {
    path: '/schema/space/create',
    component: SpaceCreate,
    exact: true,
  },
  {
    path: '/schema/:type?/:action?/:module?',
    component: SchemaConfig,
  },
  {
    path: '/import/create',
    component: TaskCreate,
    exact: true,
  },
  {
    path: '/import/:type?',
    component: Import,
  },
  {
    path: '/sketch',
    component: SketchModeling,
    exact: true,
  },
  {
    path: '/welcome',
    component: Welcome,
    exact: true,
  },
];

export const MENU_LIST = [
  {
    key: 'schema',
    path: '/schema',
    track: {
      category: 'navigation',
      action: 'view_schema',
      label: 'from_navigation'
    },
    icon: 'icon-studio-nav-schema',
    intlKey: 'common.schema'
  },
  {
    key: 'import',
    path: '/import/files',
    track: {
      category: 'navigation',
      action: 'view_import',
      label: 'from_navigation'
    },
    icon: 'icon-studio-nav-import',
    intlKey: 'common.import'
  },
  {
    key: 'console',
    path: '/console',
    track: {
      category: 'navigation',
      action: 'view_console',
      label: 'from_navigation'
    },
    icon: 'icon-studio-nav-console',
    intlKey: 'common.console'
  },
  {
    key: 'sketch',
    path: '/sketch',
    track: {
      category: 'navigation',
      action: 'view_sketch',
      label: 'from_navigation'
    },
    icon: 'icon-navbar-sketch',
    intlKey: 'common.sketch'
  },
];