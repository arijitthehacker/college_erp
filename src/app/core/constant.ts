export const CONSTANT = {
  SITE_NAME: 'College Erp',
  tokenKey: 'College_token',
  // email_pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  email_pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  no_image: '/assets/images/no-img.webp'
};

export const PROPERTY_TYPES = [
  {name: 'Apartment', id: 'APARTMENT'},
  {name: 'Bungalow / Villa', id: 'BUNGALOW_VILLA'},
  {name: 'Terrace / Link House', id: 'TERRACE_LINK_HOUSE'},
  {name: 'Semi-D', id: 'SEMI_D'},
  {name: 'Condominium', id: 'CONDOMINIUM'},
  {name: 'Service Residence', id: 'SERVICE_RESIDENCE'},
  {name: 'Office', id: 'OFFICE'},
  {name: 'Sofo/Soho/Sovo', id: 'SOFO_SOHO_SOVO'},
  {name: 'Factory', id: 'FACTORY'},
  {name: 'Retail / Shop Lot', id: 'RETAIL_SHOP_LOT'},
  {name: 'Residential Land', id: 'RESIDENTIAL_LAND'},
  {name: 'Agricultural Land', id: 'AGRICULTURAL_LAND'},
  {name: 'Other', id: 'OTHER'},
]

export const SIDEBAR = [
  {
    path: '', name: 'User\'s Profile', icon: 'fa-users', children: [
      {path: 'owners', name: 'student-listing', icon: 'fa fa-connectdevelop'},
      // {path: 'agents', name: 'Agents', icon: 'fa fa-user'},
      // {path: 'members', name: 'Members', icon: 'fa fa-user-o'},
      // {path: 'developers', name: 'Developers', icon: 'fa fa-gavel'}
    ]
  },
  {
    path: '', name: 'Property Management', icon: 'fa-building', children: [
      {path: 'property-categories', name: 'Property Categories', icon: 'fa fa-rocket'},
      {path: 'properties', name: 'Property List', icon: 'fa fa-building'},
      {path: 'add-new-property', name: 'Create Property', icon: 'fa fa-plus-square-o'},
      {path: 'commissions', name: 'Commissions', icon: 'fa fa-money'},
      {path: 'banners', name: 'Banners', icon: 'fa fa-image'}
    ]
  },

  {
    path: '', name: 'Customer Management', icon: 'fa-bar-chart', children: [
      {path: 'customer-leads', name: 'Customer Leads', icon: 'fa fa-windows'}
    ]
  },

  {
    path: 'recycle-bin', name: 'Recycle Bin', icon: 'fa-recycle'
  },

  {
    path: '', name: 'Control Management', icon: 'fa-sliders', children: [
      {path: 'settings', name: 'Settings', icon: 'fa fa-cog'},
      {path: 'admins', name: 'Admins', icon: 'fa fa-user'},
      {path: 'purposes', name: 'Property Purposes', icon: 'fa fa-user-secret'},
      {path: 'reasons', name: 'Reject Reasons', icon: 'fa fa-usb'},
      {path: 'budgets', name: 'Property Budgets', icon: 'fa fa-h-square'}

    ]
  },

  {
    path: '', name: 'Accounts', icon: 'fa-money', children: [
      {path: 'advance-request', name: 'Advance request', icon: 'fa fa-shopping-cart'},
      {path: 'pending-payment', name: 'Pending payment', icon: 'fa fa-money'},
      {path: 'transaction-history', name: 'History transactions', icon: 'fa fa-history'}
    ]
  },

  {
    path: 'info-pages', name: 'Content Management', icon: 'fa-info-circle', children: [
      {path: 'privacy', name: 'Privacy Policy'},
      {path: 'terms', name: 'Terms & Conditions'},
      {path: 'about', name: 'About Us'}
      // {path: 'info-pages/privacy-settings', name: 'Privacy Settings'}
    ]
  }, {
    path: '', name: 'Profile', icon: 'fa-id-card-o', children: [
      {path: 'profile', name: 'Update Profile', icon: 'fa-id-card-o'},
      {path: 'change-password', name: 'Change Password', icon: 'fa-key'},
      {path: '', name: 'Logout', icon: 'fa-sign-out'}
    ]
  }
];

export const ROLES = [
  {
    path: '', id: 'users_profiles', name: 'User\'s Profile', isSelected: false, icon: 'fa-users', children: [
      {path: 'owners', id: 'users_profiles_owners', name: 'Student-Listing', icon: 'fa fa-connectdevelop', isSelected: false},
      {path: 'agents', id: 'users_profiles_agents', name: 'Approvals', icon: 'fa fa-user', isSelected: false},
      {path: 'members', id: 'users_profiles_members', name: 'Courses', icon: 'fa fa-user-o', isSelected: false},
      {path: 'developers', id: 'users_profiles_developers', name: 'Session', icon: 'fa fa-gavel', isSelected: false}
    ]
  },
  // // {
  // //   path: '', id: 'properties', name: 'Property Management', icon: 'fa-building', isSelected: false, children: [
  // //     {
  // //       path: 'property-categories',
  // //       id: 'property_category',
  // //       name: 'Property Categories',
  // //       icon: 'fa fa-rocket',
  // //       isSelected: false
  // //     },
  // //     {path: 'properties', id: 'property_list', name: 'Property List', icon: 'fa fa-building', isSelected: false},
  // //     {
  // //       path: 'add-new-property',
  // //       id: 'property_create',
  // //       name: 'Create Property',
  // //       icon: 'fa fa-plus-square-o',
  // //       isSelected: false
  // //     },
  // //     {path: 'commissions', id: 'property_commission', name: 'Commissions', icon: 'fa fa-money', isSelected: false},
  // //     {path: 'banners', id: 'property_banners', name: 'Banners', icon: 'fa fa-image', isSelected: false}
  // //   ]
  // // },
  // // {
  // //   path: '',
  // //   id: 'customer_management',
  // //   name: 'Customer Management',
  // //   icon: 'fa-bar-chart',
  // //   isSelected: false,
  // //   children: [
  // //     {
  // //       path: 'customer-leads',
  // //       id: 'customer_management_leads',
  // //       name: 'Customer Leads',
  // //       icon: 'fa fa-windows',
  // //       isSelected: false
  // //     }
  // //   ]
  // // },
  // // {
  // //   path: '',
  // //   id: 'location_managemant',
  // //   name: 'Location Management',
  // //   icon: 'fa-map-marker',
  // //   isSelected: false,
  // //   children: [
  // //     {
  // //       path: 'location/states',
  // //       id: 'location_managemant_states',
  // //       name: 'States',
  // //       icon: 'fa fa-location-arrow',
  // //       isSelected: false
  // //     },
  // //     {
  // //       path: 'location/cities',
  // //       id: 'location_managemant_cities',
  // //       name: 'Cities',
  // //       icon: 'fa fa-database',
  // //       isSelected: false
  // //     }
  // //   ]
  // // },

  // {
  //   path: 'recycle-bin', id: 'recycle_bin', name: 'Recycle Bin', icon: 'fa-recycle', isSelected: false
  // },

  // {
  //   path: '', id: 'controle_management', name: 'Control Management', icon: 'fa-sliders', isSelected: false, children: [
  //     {path: 'settings', id: 'controle_management_settings', name: 'Settings', icon: 'fa fa-cog', isSelected: false},
  //     {path: 'admins', id: 'admins', name: 'Admins', icon: 'fa fa-user', isSelected: false, notShowInAdd: true},
  //     {
  //       path: 'purposes', id: 'controle_management_peroperty_pupose', name: 'Property Purposes',
  //       icon: 'fa fa-user-secret', isSelected: false
  //     },
  //     {
  //       path: 'reasons', id: 'controle_management_reject_reason', name: 'Reject Reasons',
  //       icon: 'fa fa-usb', isSelected: false
  //     },
  //     {
  //       path: 'budgets', id: 'controle_management_property_budgets',
  //       name: 'Property Budgets', icon: 'fa fa-h-square', isSelected: false
  //     }

  //   ]
  // },

  // {
  //   path: '', id: 'accounts', name: 'Accounts', icon: 'fa-money', isSelected: false, children: [
  //     {
  //       path: 'advance-request', id: 'accounts_advanced', name: 'Advance request',
  //       icon: 'fa fa-shopping-cart', isSelected: false
  //     },
  //     {
  //       path: 'pending-payment', id: 'accounts_pending', name: 'Pending payment',
  //       icon: 'fa fa-money', isSelected: false
  //     },
  //     {
  //       path: 'transaction-history', id: 'accounts_history',
  //       name: 'History transactions', icon: 'fa fa-history', isSelected: false
  //     }
  //   ]
  // },

  // {
  //   path: 'info-pages', id: 'content_management', name: 'Content Management',
  //   icon: 'fa-info-circle', isSelected: false, children: [
  //     {path: 'privacy', id: 'content_management_privacy', name: 'Privacy Policy', isSelected: false},
  //     {path: 'terms', id: 'content_management_terms_condition', name: 'Terms & Conditions', isSelected: false},
  //     {path: 'about', id: 'content_management_about', name: 'About Us', isSelected: false}
  //     // {path: 'info-pages/privacy-settings', name: 'Privacy Settings'}
  //   ]
  // }, {
  //   path: '', id: 'profile', name: 'Profile', icon: 'fa-id-card-o', isSelected: false, children: [
  //     {path: 'profile', id: 'profile_update', name: 'Update Profile', icon: 'fa-id-card-o', isSelected: false},
  //     {
  //       path: 'change-password',
  //       id: 'profile_change_password',
  //       name: 'Change Password',
  //       icon: 'fa-key',
  //       isSelected: false
  //     },
  //     {path: '', id: 'profile_logout', name: 'Logout', icon: 'fa-sign-out', isSelected: false}
  //   ]
  // }
];

export const Currencies = [
  {'cc': 'AED', 'symbol': '\u062f.\u0625;', 'name': 'UAE dirham'},
  {'cc': 'AFN', 'symbol': 'Afs', 'name': 'Afghan afghani'},
  {'cc': 'ALL', 'symbol': 'L', 'name': 'Albanian lek'},
  {'cc': 'AMD', 'symbol': 'AMD', 'name': 'Armenian dram'},
  {'cc': 'ANG', 'symbol': 'NA\u0192', 'name': 'Netherlands Antillean gulden'},
  {'cc': 'AOA', 'symbol': 'Kz', 'name': 'Angolan kwanza'},
  {'cc': 'ARS', 'symbol': '$', 'name': 'Argentine peso'},
  {'cc': 'AUD', 'symbol': '$', 'name': 'Australian dollar'},
  {'cc': 'AWG', 'symbol': '\u0192', 'name': 'Aruban florin'},
  {'cc': 'AZN', 'symbol': 'AZN', 'name': 'Azerbaijani manat'},
  {'cc': 'BAM', 'symbol': 'KM', 'name': 'Bosnia and Herzegovina konvertibilna marka'},
  {'cc': 'BBD', 'symbol': 'Bds$', 'name': 'Barbadian dollar'},
  {'cc': 'BDT', 'symbol': '\u09f3', 'name': 'Bangladeshi taka'},
  {'cc': 'BGN', 'symbol': 'BGN', 'name': 'Bulgarian lev'},
  {'cc': 'BHD', 'symbol': '.\u062f.\u0628', 'name': 'Bahraini dinar'},
  {'cc': 'BIF', 'symbol': 'FBu', 'name': 'Burundi franc'},
  {'cc': 'BMD', 'symbol': 'BD$', 'name': 'Bermudian dollar'},
  {'cc': 'BND', 'symbol': 'B$', 'name': 'Brunei dollar'},
  {'cc': 'BOB', 'symbol': 'Bs.', 'name': 'Bolivian boliviano'},
  {'cc': 'BRL', 'symbol': 'R$', 'name': 'Brazilian real'},
  {'cc': 'BSD', 'symbol': 'B$', 'name': 'Bahamian dollar'},
  {'cc': 'BTN', 'symbol': 'Nu.', 'name': 'Bhutanese ngultrum'},
  {'cc': 'BWP', 'symbol': 'P', 'name': 'Botswana pula'},
  {'cc': 'BYR', 'symbol': 'Br', 'name': 'Belarusian ruble'},
  {'cc': 'BZD', 'symbol': 'BZ$', 'name': 'Belize dollar'},
  {'cc': 'CAD', 'symbol': '$', 'name': 'Canadian dollar'},
  {'cc': 'CDF', 'symbol': 'F', 'name': 'Congolese franc'},
  {'cc': 'CHF', 'symbol': 'Fr.', 'name': 'Swiss franc'},
  {'cc': 'CLP', 'symbol': '$', 'name': 'Chilean peso'},
  {'cc': 'CNY', 'symbol': '\u00a5', 'name': 'Chinese/Yuan renminbi'},
  {'cc': 'COP', 'symbol': 'Col$', 'name': 'Colombian peso'},
  {'cc': 'CRC', 'symbol': '\u20a1', 'name': 'Costa Rican colon'},
  {'cc': 'CUC', 'symbol': '$', 'name': 'Cuban peso'},
  {'cc': 'CVE', 'symbol': 'Esc', 'name': 'Cape Verdean escudo'},
  {'cc': 'CZK', 'symbol': 'K\u010d', 'name': 'Czech koruna'},
  {'cc': 'DJF', 'symbol': 'Fdj', 'name': 'Djiboutian franc'},
  {'cc': 'DKK', 'symbol': 'Kr', 'name': 'Danish krone'},
  {'cc': 'DOP', 'symbol': 'RD$', 'name': 'Dominican peso'},
  {'cc': 'DZD', 'symbol': '\u062f.\u062c', 'name': 'Algerian dinar'},
  {'cc': 'EEK', 'symbol': 'KR', 'name': 'Estonian kroon'},
  {'cc': 'EGP', 'symbol': '\u00a3', 'name': 'Egyptian pound'},
  {'cc': 'ERN', 'symbol': 'Nfa', 'name': 'Eritrean nakfa'},
  {'cc': 'ETB', 'symbol': 'Br', 'name': 'Ethiopian birr'},
  {'cc': 'EUR', 'symbol': '\u20ac', 'name': 'European Euro'},
  {'cc': 'FJD', 'symbol': 'FJ$', 'name': 'Fijian dollar'},
  {'cc': 'FKP', 'symbol': '\u00a3', 'name': 'Falkland Islands pound'},
  {'cc': 'GBP', 'symbol': '\u00a3', 'name': 'British pound'},
  {'cc': 'GEL', 'symbol': 'GEL', 'name': 'Georgian lari'},
  {'cc': 'GHS', 'symbol': 'GH\u20b5', 'name': 'Ghanaian cedi'},
  {'cc': 'GIP', 'symbol': '\u00a3', 'name': 'Gibraltar pound'},
  {'cc': 'GMD', 'symbol': 'D', 'name': 'Gambian dalasi'},
  {'cc': 'GNF', 'symbol': 'FG', 'name': 'Guinean franc'},
  {'cc': 'GQE', 'symbol': 'CFA', 'name': 'Central African CFA franc'},
  {'cc': 'GTQ', 'symbol': 'Q', 'name': 'Guatemalan quetzal'},
  {'cc': 'GYD', 'symbol': 'GY$', 'name': 'Guyanese dollar'},
  {'cc': 'HKD', 'symbol': 'HK$', 'name': 'Hong Kong dollar'},
  {'cc': 'HNL', 'symbol': 'L', 'name': 'Honduran lempira'},
  {'cc': 'HRK', 'symbol': 'kn', 'name': 'Croatian kuna'},
  {'cc': 'HTG', 'symbol': 'G', 'name': 'Haitian gourde'},
  {'cc': 'HUF', 'symbol': 'Ft', 'name': 'Hungarian forint'},
  {'cc': 'IDR', 'symbol': 'Rp', 'name': 'Indonesian rupiah'},
  {'cc': 'ILS', 'symbol': '\u20aa', 'name': 'Israeli new sheqel'},
  {'cc': 'INR', 'symbol': '\u20B9', 'name': 'Indian rupee'},
  {'cc': 'IQD', 'symbol': '\u062f.\u0639', 'name': 'Iraqi dinar'},
  {'cc': 'IRR', 'symbol': 'IRR', 'name': 'Iranian rial'},
  {'cc': 'ISK', 'symbol': 'kr', 'name': 'Icelandic kr\u00f3na'},
  {'cc': 'JMD', 'symbol': 'J$', 'name': 'Jamaican dollar'},
  {'cc': 'JOD', 'symbol': 'JOD', 'name': 'Jordanian dinar'},
  {'cc': 'JPY', 'symbol': '\u00a5', 'name': 'Japanese yen'},
  {'cc': 'KES', 'symbol': 'KSh', 'name': 'Kenyan shilling'},
  {'cc': 'KGS', 'symbol': '\u0441\u043e\u043c', 'name': 'Kyrgyzstani som'},
  {'cc': 'KHR', 'symbol': '\u17db', 'name': 'Cambodian riel'},
  {'cc': 'KMF', 'symbol': 'KMF', 'name': 'Comorian franc'},
  {'cc': 'KPW', 'symbol': 'W', 'name': 'North Korean won'},
  {'cc': 'KRW', 'symbol': 'W', 'name': 'South Korean won'},
  {'cc': 'KWD', 'symbol': 'KWD', 'name': 'Kuwaiti dinar'},
  {'cc': 'KYD', 'symbol': 'KY$', 'name': 'Cayman Islands dollar'},
  {'cc': 'KZT', 'symbol': 'T', 'name': 'Kazakhstani tenge'},
  {'cc': 'LAK', 'symbol': 'KN', 'name': 'Lao kip'},
  {'cc': 'LBP', 'symbol': '\u00a3', 'name': 'Lebanese lira'},
  {'cc': 'LKR', 'symbol': 'Rs', 'name': 'Sri Lankan rupee'},
  {'cc': 'LRD', 'symbol': 'L$', 'name': 'Liberian dollar'},
  {'cc': 'LSL', 'symbol': 'M', 'name': 'Lesotho loti'},
  {'cc': 'LTL', 'symbol': 'Lt', 'name': 'Lithuanian litas'},
  {'cc': 'LVL', 'symbol': 'Ls', 'name': 'Latvian lats'},
  {'cc': 'LYD', 'symbol': 'LD', 'name': 'Libyan dinar'},
  {'cc': 'MAD', 'symbol': 'MAD', 'name': 'Moroccan dirham'},
  {'cc': 'MDL', 'symbol': 'MDL', 'name': 'Moldovan leu'},
  {'cc': 'MGA', 'symbol': 'FMG', 'name': 'Malagasy ariary'},
  {'cc': 'MKD', 'symbol': 'MKD', 'name': 'Macedonian denar'},
  {'cc': 'MMK', 'symbol': 'K', 'name': 'Myanma kyat'},
  {'cc': 'MNT', 'symbol': '\u20ae', 'name': 'Mongolian tugrik'},
  {'cc': 'MOP', 'symbol': 'P', 'name': 'Macanese pataca'},
  {'cc': 'MRO', 'symbol': 'UM', 'name': 'Mauritanian ouguiya'},
  {'cc': 'MUR', 'symbol': 'Rs', 'name': 'Mauritian rupee'},
  {'cc': 'MVR', 'symbol': 'Rf', 'name': 'Maldivian rufiyaa'},
  {'cc': 'MWK', 'symbol': 'MK', 'name': 'Malawian kwacha'},
  {'cc': 'MXN', 'symbol': '$', 'name': 'Mexican peso'},
  {'cc': 'MYR', 'symbol': 'RM', 'name': 'Malaysian ringgit'},
  {'cc': 'MZM', 'symbol': 'MTn', 'name': 'Mozambican metical'},
  {'cc': 'NAD', 'symbol': 'N$', 'name': 'Namibian dollar'},
  {'cc': 'NGN', 'symbol': '\u20a6', 'name': 'Nigerian naira'},
  {'cc': 'NIO', 'symbol': 'C$', 'name': 'Nicaraguan c\u00f3rdoba'},
  {'cc': 'NOK', 'symbol': 'kr', 'name': 'Norwegian krone'},
  {'cc': 'NPR', 'symbol': 'NRs', 'name': 'Nepalese rupee'},
  {'cc': 'NZD', 'symbol': 'NZ$', 'name': 'New Zealand dollar'},
  {'cc': 'OMR', 'symbol': 'OMR', 'name': 'Omani rial'},
  {'cc': 'PAB', 'symbol': 'B./', 'name': 'Panamanian balboa'},
  {'cc': 'PEN', 'symbol': 'S/.', 'name': 'Peruvian nuevo sol'},
  {'cc': 'PGK', 'symbol': 'K', 'name': 'Papua New Guinean kina'},
  {'cc': 'PHP', 'symbol': '\u20b1', 'name': 'Philippine peso'},
  {'cc': 'PKR', 'symbol': 'Rs.', 'name': 'Pakistani rupee'},
  {'cc': 'PLN', 'symbol': 'z\u0142', 'name': 'Polish zloty'},
  {'cc': 'PYG', 'symbol': '\u20b2', 'name': 'Paraguayan guarani'},
  {'cc': 'QAR', 'symbol': 'QR', 'name': 'Qatari riyal'},
  {'cc': 'RON', 'symbol': 'L', 'name': 'Romanian leu'},
  {'cc': 'RSD', 'symbol': 'din.', 'name': 'Serbian dinar'},
  {'cc': 'RUB', 'symbol': 'R', 'name': 'Russian ruble'},
  {'cc': 'SAR', 'symbol': 'SR', 'name': 'Saudi riyal'},
  {'cc': 'SBD', 'symbol': 'SI$', 'name': 'Solomon Islands dollar'},
  {'cc': 'SCR', 'symbol': 'SR', 'name': 'Seychellois rupee'},
  {'cc': 'SDG', 'symbol': 'SDG', 'name': 'Sudanese pound'},
  {'cc': 'SEK', 'symbol': 'kr', 'name': 'Swedish krona'},
  {'cc': 'SGD', 'symbol': 'S$', 'name': 'Singapore dollar'},
  {'cc': 'SHP', 'symbol': '\u00a3', 'name': 'Saint Helena pound'},
  {'cc': 'SLL', 'symbol': 'Le', 'name': 'Sierra Leonean leone'},
  {'cc': 'SOS', 'symbol': 'Sh.', 'name': 'Somali shilling'},
  {'cc': 'SRD', 'symbol': '$', 'name': 'Surinamese dollar'},
  {'cc': 'SYP', 'symbol': 'LS', 'name': 'Syrian pound'},
  {'cc': 'SZL', 'symbol': 'E', 'name': 'Swazi lilangeni'},
  {'cc': 'THB', 'symbol': '\u0e3f', 'name': 'Thai baht'},
  {'cc': 'TJS', 'symbol': 'TJS', 'name': 'Tajikistani somoni'},
  {'cc': 'TMT', 'symbol': 'm', 'name': 'Turkmen manat'},
  {'cc': 'TND', 'symbol': 'DT', 'name': 'Tunisian dinar'},
  {'cc': 'TRY', 'symbol': 'TRY', 'name': 'Turkish new lira'},
  {'cc': 'TTD', 'symbol': 'TT$', 'name': 'Trinidad and Tobago dollar'},
  {'cc': 'TWD', 'symbol': 'NT$', 'name': 'New Taiwan dollar'},
  {'cc': 'TZS', 'symbol': 'TZS', 'name': 'Tanzanian shilling'},
  {'cc': 'UAH', 'symbol': 'UAH', 'name': 'Ukrainian hryvnia'},
  {'cc': 'UGX', 'symbol': 'USh', 'name': 'Ugandan shilling'},
  {'cc': 'USD', 'symbol': 'US$', 'name': 'United States dollar'},
  {'cc': 'UYU', 'symbol': '$U', 'name': 'Uruguayan peso'},
  {'cc': 'UZS', 'symbol': 'UZS', 'name': 'Uzbekistani som'},
  {'cc': 'VEB', 'symbol': 'Bs', 'name': 'Venezuelan bolivar'},
  {'cc': 'VND', 'symbol': '\u20ab', 'name': 'Vietnamese dong'},
  {'cc': 'VUV', 'symbol': 'VT', 'name': 'Vanuatu vatu'},
  {'cc': 'WST', 'symbol': 'WS$', 'name': 'Samoan tala'},
  {'cc': 'XAF', 'symbol': 'CFA', 'name': 'Central African CFA franc'},
  {'cc': 'XCD', 'symbol': 'EC$', 'name': 'East Caribbean dollar'},
  {'cc': 'XDR', 'symbol': 'SDR', 'name': 'Special Drawing Rights'},
  {'cc': 'XOF', 'symbol': 'CFA', 'name': 'West African CFA franc'},
  {'cc': 'XPF', 'symbol': 'F', 'name': 'CFP franc'},
  {'cc': 'YER', 'symbol': 'YER', 'name': 'Yemeni rial'},
  {'cc': 'ZAR', 'symbol': 'R', 'name': 'South African rand'},
  {'cc': 'ZMK', 'symbol': 'ZK', 'name': 'Zambian kwacha'},
  {'cc': 'ZWR', 'symbol': 'Z$', 'name': 'Zimbabwean dollar'}
];
