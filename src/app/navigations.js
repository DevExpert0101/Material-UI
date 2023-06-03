// export const navigations = [
//   { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
//   { label: 'PAGES', type: 'label' },
//   {
//     name: 'Session/Auth',
//     icon: 'security',
//     children: [
//       { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
//       { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
//       { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
//       { name: 'Error', iconText: '404', path: '/session/404' }
//     ]
//   },
//   { label: 'Components', type: 'label' },
//   {
//     name: 'Components',
//     icon: 'favorite',
//     badge: { value: '30+', color: 'secondary' },
//     children: [
//       { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
//       { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
//       { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
//       { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
//       { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
//       { name: 'Form', path: '/material/form', iconText: 'F' },
//       { name: 'Icons', path: '/material/icons', iconText: 'I' },
//       { name: 'Menu', path: '/material/menu', iconText: 'M' },
//       { name: 'Progress', path: '/material/progress', iconText: 'P' },
//       { name: 'Radio', path: '/material/radio', iconText: 'R' },
//       { name: 'Switch', path: '/material/switch', iconText: 'S' },
//       { name: 'Slider', path: '/material/slider', iconText: 'S' },
//       { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
//       { name: 'Table', path: '/material/table', iconText: 'T' }
//     ]
//   },
//   {
//     name: 'Charts',
//     icon: 'trending_up',
//     children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }]
//   },
//   {
//     name: 'Documentation',
//     icon: 'launch',
//     type: 'extLink',
//     path: 'http://demos.ui-lib.com/matx-react-doc/'
//   }
// ];


export const navigations = [
  { name: 'Chat', path: '/dashboard/chat', icon: 'chat' , col: '#3843D0'},
  { name: 'Bot', path: '/bots/general', icon: 'smart_toy' , col: "#6ECFBD"},
  { name: 'Knowledge Base', path: '/dashboard/knowledge/teamie', icon: 'folder' , col: "#8E5AFF"},
  { name: 'Team', path: '/dashboard/team', icon: 'people' , col: "#FFC366"},
  { name: 'New Chat', path: '/dashboard/chat', icon: 'add', col: "black", parent: "Chat"},  
  { name: 'General', path: '/bots/general', col: "black", parent: "Bot"},
  { name: 'Knowledge', path: '/bots/knowledge/teamie', col: "black", parent: "Bot"},
  { name: 'Personality', path: '/bots/personality', col: "black", parent: "Bot"},
  { name: 'Interface', path: '/bots/interface', col: "black", parent: "Bot"},
  { name: 'Members', path: '/dashboard/team', col: "black", parent: 'Team'},
  { name: 'Billing & Plan', path: '/dashboard/team/billing', col: 'black', parent: 'Team'},
  { name: 'Create Bot', path: '/dashboard/chat/create', parent: 'Chat'},
  { name: 'Teamie', path: '/dashboard/knowledge/teamie', parent: 'Knowledge Base'},
  // { name: 'Create Teamie', path: '/dashboard/knowledge/create', parent: 'Knowledge Base'}
];
