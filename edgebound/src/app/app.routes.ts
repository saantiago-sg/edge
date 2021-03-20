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
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { QuienesSomosComponent } from './components/footer-links/quienes-somos/quienes-somos.component';
import { EnviosComponent } from './components/footer-links/envios/envios.component';
import { SucursalesComponent } from './components/footer-links/sucursales/sucursales.component';
import { ContactoComponent } from './components/footer-links/contacto/contacto.component';
import { FaqComponent } from './components/footer-links/faq/faq.component';
import { TerminosComponent } from './components/footer-links/terminos/terminos.component';
import { MayoreoComponent } from './components/footer-links/mayoreo/mayoreo.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SearchComponent } from './components/search/search.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories.component';
import { AddressComponent } from './components/checkout/address/address.component';
import { PaymentComponent } from './components/checkout/payment/payment.component';
import { PaymentSuccessComponent } from './components/checkout/payment-success/payment-success.component';
import { DashboardLoggedComponent } from './components/dashboard-logged/dashboard-logged.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NewAddressComponent } from './components/new-address/new-address.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: CartComponent },
    { path: 'cart/items', component: CartItemsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard-logged', component: DashboardLoggedComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'new-addres', component: NewAddressComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'search', component: SearchComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'envios', component: EnviosComponent },
    { path: 'sucursales', component: SucursalesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'terminos-y-condiciones', component: TerminosComponent },
    { path: 'mayoreo', component: MayoreoComponent },
    { path: 'product/name-product', component: ProductComponent },
    { path: 'category/pisos-y-muros', component: PisosYMurosComponent },
    { path: 'category/adhesivo', component: AdhesivoComponent },
    { path: 'category/accesorios-para-bano', component: AccesoriosParaBanoComponent },
    { path: 'category/accesorios-para-cocina', component: AccesoriosParaCocinaComponent },
    { path: 'category/sanitarios-y-muebles-para-bano', component: SanitariosYMueblesParaBanoComponent },
    { path: 'category/calentadores-y-tinacos', component: CalentadoresYTinacosComponent },
    { path: 'category/complementos-y-otros', component: ComplementosYOtrosComponent },
    { path: 'catalog/category/subcategory', component: SubcategoriesComponent },
    { path: 'checkout/address', component: AddressComponent },
    { path: 'checkout/payment', component: PaymentComponent },
    { path: 'checkout/payment-successful', component: PaymentSuccessComponent },

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
