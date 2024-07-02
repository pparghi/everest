import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MembersComponent } from './components/members/members.component';
import { TableOverviewExampleComponent } from './components/table-overview-example/table-overview-example.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsInvoicesComponent } from './components/clients-invoices/clients-invoices.component';
import { MsalGuard } from '@azure/msal-angular';
import { ClientRiskComponent } from './components/client-risk/client-risk.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

const routes: Routes = [  
  { path: 'master-debtors', component: MainContentComponent, canActivate:[MsalGuard] },  
  { path: 'members', component: MembersComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'invoices', component: ClientsInvoicesComponent },
  { path: 'risk', component: ClientRiskComponent },
  { path: 'page', component: InvoicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
