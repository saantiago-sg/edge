import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// declaro rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PisosYMurosComponent } from './components/categories/pisos-y-muros/pisos-y-muros.component';
import { AdhesivoComponent } from './components/categories/adhesivo/adhesivo.component';
import { AccesoriosParaBanoComponent } from './components/categories/accesorios-para-bano/accesorios-para-bano.component';
import { AccesoriosParaCocinaComponent } from './components/categories/accesorios-para-cocina/accesorios-para-cocina.component';
import { SanitariosYMueblesParaBanoComponent } from './components/categories/sanitarios-y-muebles-para-bano/sanitarios-y-muebles-para-bano.component';
import { CalentadoresYTinacosComponent } from './components/categories/calentadores-y-tinacos/calentadores-y-tinacos.component';
import { ComplementosYOtrosComponent } from './components/categories/complementos-y-otros/complementos-y-otros.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
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

// pipes


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PisosYMurosComponent,
    AdhesivoComponent,
    AccesoriosParaBanoComponent,
    AccesoriosParaCocinaComponent,
    SanitariosYMueblesParaBanoComponent,
    CalentadoresYTinacosComponent,
    ComplementosYOtrosComponent,
    DashboardComponent,
    CatalogItemComponent,
    ProductComponent,
    CartComponent,
    QuienesSomosComponent,
    EnviosComponent,
    SucursalesComponent,
    ContactoComponent,
    FaqComponent,
    TerminosComponent,
    MayoreoComponent,
    RecoverComponent,
    SearchComponent,
    CartItemsComponent,
    SubcategoriesComponent,
    AddressComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    DashboardLoggedComponent,
    WishlistComponent,
    NewAddressComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
