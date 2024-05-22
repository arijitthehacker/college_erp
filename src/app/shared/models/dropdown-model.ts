export const CurrencySettings = {
  singleSelection: true,
  idField: 'code',
  textField: 'showCurr',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 1,
  closeDropDownOnSelection: true,
  allowSearchFilter: true
};

export const TimezoneSettings = {
  singleSelection: true,
  idField: 'tzCode',
  textField: 'name',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 1,
  closeDropDownOnSelection: true,
  allowSearchFilter: true
};

export const LanguageSettings = {
  singleSelection: false,
  idField: '_id_lang',
  textField: 'lang',
  limitSelection: 2,
  // selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 2,
  closeDropDownOnSelection: true,
  allowSearchFilter: true
};

export const BusinessCatSettings = {
  singleSelection: false,
  idField: '_id',
  textField: 'name',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  itemsShowLimit: 2,
  closeDropDownOnSelection: true,
  allowSearchFilter: true
};
