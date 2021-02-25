import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PisosYMurosComponent } from './components/categories/pisos-y-muros/pisos-y-muros.component';
import { AdhesivoComponent } from './components/categories/adhesivo/adhesivo.component';
import { AccesoriosParaBanoComponent } from './components/categories/accesorios-para-bano/accesorios-para-bano.component';
import { AccesoriosParaCocinaComponent } from './components/categories/accesorios-para-cocina/accesorios-para-cocina.component';
import { SanitariosYMueblesParaBanoComponent } from './components/categories/sanitarios-y-muebles-para-bano/sanitarios-y-muebles-para-bano.component';
import { CalentadoresYTinacosComponent } from './components/categories/calentadores-y-tinacos/calentadores-y-tinacos.component';
import { ComplementosYOtrosComponent } from './components/categories/complementos-y-otros/complementos-y-otros.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'category/pisos-y-muros', component: PisosYMurosComponent },
    { path: 'category/adhesivo', component: AdhesivoComponent },
    { path: 'category/accesorios-para-bano', component: AccesoriosParaBanoComponent },
    { path: 'category/accesorios-para-cocina', component: AccesoriosParaCocinaComponent },
    { path: 'category/sanitarios-y-muebles-para-bano', component: SanitariosYMueblesParaBanoComponent },
    { path: 'category/calentadores-y-tinacos', component: CalentadoresYTinacosComponent },
    { path: 'category/complementos-y-otros', component: ComplementosYOtrosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
