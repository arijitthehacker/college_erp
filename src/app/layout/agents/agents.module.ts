import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAgentComponent } from './add-agent/add-agent.component';

const routes: Routes = [
  {
    path: '', component: AgentsComponent
  }
];

@NgModule({
  declarations: [
    AgentsComponent,
    AddAgentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddAgentComponent
  ]
})
export class AgentsModule {
}
