export const CONSTANT = {
  SITE_NAME: 'Referly Admin',
  tokenKey: 'referly_token',
  // email_pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  email_pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
};

export const SIDEBAR = [
  {path: 'owners', name: 'Owners', icon: 'fa fa-connectdevelop'},
  {path: 'agents', name: 'Agents', icon: 'fa fa-user'},
  {path: 'members', name: 'Members', icon: 'fa fa-users'},
  {path: 'customer-leads', name: 'Customer Leads', icon: 'fa fa-windows'},
  {path: 'developers', name: 'Developers', icon: 'fa fa-graduation-cap'},
  {path: 'property-categories', name: 'Property Categories', icon: 'fa fa-rocket'},
  {path: 'properties', name: 'Properties', icon: 'fa fa-tachometer'},
  {path: 'reasons', name: 'Reject Reasons', icon: 'fa fa-usb'},
  {path: 'purposes', name: 'Property Purposes', icon: 'fa fa-user-secret'},
  {path: 'budgets', name: 'Property Budgets', icon: 'fa fa-h-square'},
  {path: 'settings', name: 'Settings', icon: 'fa fa-cog'},
  {path: 'info-pages/privacy-settings', name: 'Privacy Settings', icon: 'fa fa-info'}
];

// {path: 'building-material', name: 'Building Material', icon: 'fa fa-building'},
// {path: 'rooms', name: 'Rooms', icon: 'fa fa-rocket'},
