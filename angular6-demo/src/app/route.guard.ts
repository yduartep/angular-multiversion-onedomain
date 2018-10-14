import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {environment} from '../environments/environment';

@Injectable()
export class RouteGuard implements CanActivate {

    constructor() {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.redirectToOldUrl(state.url);

        return true;
    }

    /**
     * Redirect to the legacy screen until the migration of the specific page is completed
     * @param route the current route path
     */
    private redirectToOldUrl(route) {
        const hostByRequest = (environment.hostByRequest || {})[route.substring(1)];
        const routesToRedirect = environment.routesToRedirect || [];

        if (routesToRedirect.includes(route)) {
            location = hostByRequest + route;
        }
    }
}
