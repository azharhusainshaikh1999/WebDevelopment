import { Routes } from '@angular/router';
import { ServiceComponent } from './components/service-component/service-component';
import { VendorComponent } from './components/vendor-component/vendor-component';
import { SubContractorComponent } from './components/sub-contractor-component/sub-contractor-component';
import { VendorListComponent } from './components/vendor-list-component/vendor-list-component';
import { ServiceListComponent } from './components/service-list-component/service-list-component';
import { SubContractorListComponent } from './components/sub-contractor-list-component/sub-contractor-list-component';

export const routes: Routes = [
    {
        path: "service",
        component :ServiceComponent
    },
    {
        path: "vendor",
        component :VendorComponent
    },
    {
        path: "sub-contractor",
        component : SubContractorComponent
    },
    {
        path: "vendor/get-vendor-list",
        component : VendorListComponent
    },
    {
        path: "service/get-service-list",
        component : ServiceListComponent
    },
    {
        path: "sub-contractor/get-sub-contractor-list",
        component : SubContractorListComponent
    }
];
