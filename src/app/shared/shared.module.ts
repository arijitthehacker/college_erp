import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Directives
import { AmountDirective } from './directives/amount.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NoRecordComponent } from '../layout/common/no-record/no-record.component';
import { ReplaceUnderscorePipe } from './pipe/remove-underscore';
import { LightboxModule } from 'ngx-lightbox';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SeeMoreComponent } from './components/see-more/see-more.component';
import { CapitalizeFirstDirective } from './directives/first.character.capital.directive';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HHMMSSPipe } from './pipe/hhmmss/hhmmss.pipe';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TagInputModule } from 'ngx-chips';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TextMaskModule } from 'angular2-text-mask';

const directives = [NumberOnlyDirective, AmountDirective, NoRecordComponent, ReplaceUnderscorePipe,
  SeeMoreComponent, HHMMSSPipe, CapitalizeFirstDirective];

const imports = [LightboxModule, ReactiveFormsModule, HttpClientModule, NgxPaginationModule,
  NgSelectModule, FormsModule, NgxIntlTelInputModule, AutocompleteLibModule,
  TagInputModule, TooltipModule, TextMaskModule
];

@NgModule({
  declarations: [
    ...directives
  ],
  imports: [
    CommonModule, NgMultiSelectDropDownModule.forRoot(),
    ...imports,
    BsDatepickerModule.forRoot(), AccordionModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  exports: [
    ...directives,
    ...imports,
    BsDatepickerModule, NgMultiSelectDropDownModule, AccordionModule,
    ModalModule, PaginationModule, BsDropdownModule
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {
}
