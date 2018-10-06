import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

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
        if (route === '/dogs') {
            const newUrl = `${window.location.origin}`;
            location.href = newUrl;
        }
    }
}
