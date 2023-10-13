//Imports principales
import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule,ExtraOptions } from "@angular/router";

//Imports de componentes
import {HomeComponent} from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { DetalleProductoComponent } from "./components/detalle-producto/detalle-producto.component";

//Definir Rutas
const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'detalle-producto/:id',
        component: DetalleProductoComponent
    },
    {
        path:'busqueda/:nombre',
        component: HomeComponent
    },
    {
        path:'categoria/:categoria',
        component: HomeComponent
    },
    {
        path:'**',
        component: ErrorComponent
    }
];

//Exportar configuracion
const extraOptions: ExtraOptions = {
    onSameUrlNavigation: 'reload',
};

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);