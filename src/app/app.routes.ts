import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShoesComponent} from './components/product/shoes/shoes.component';
import {ClothingComponent} from './components/product/clothing/clothing.component';
import {MenComponent} from './components/men/men.component';
import {AccessoriesComponent} from './components/product/accessories/accessories.component';
import {WomenComponent} from './components/women/women.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'men', component: MenComponent, children: [
      {path: 'shoes', component: ShoesComponent},
      {path: 'clothing', component: ClothingComponent},
      {path: 'accessories', component: AccessoriesComponent}
    ]
  },
  {
    path: 'men', component: MenComponent, children: [
      {path: 'shoes', component: ShoesComponent},
      {path: 'clothing', component: ClothingComponent},
      {path: 'accessories', component: AccessoriesComponent}
    ]
  },
  {
    path: 'women', component: WomenComponent, children: [
      {path: 'shoes', component: ShoesComponent},
      {path: 'clothing', component: ClothingComponent},
      {path: 'accessories', component: AccessoriesComponent}
    ]
  }
];
