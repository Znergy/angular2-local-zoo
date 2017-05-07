import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalComponent } from './animal/animal.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'new-animal',
    component: NewAnimalComponent
  },
  {
    path: 'animal',
    component: AnimalComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'albums/:id',
    component: AlbumDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
