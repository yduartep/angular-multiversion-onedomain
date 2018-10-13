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
        if (route === '/dogs') {
            const newUrl = `${window.location.origin}`;
            location.href = newUrl;
        }
        if (route === '/help') {
            let newUrl = '';
            if (!environment.production) {
                newUrl = `${window.location.hostname}:8000${route}`;
            } else {
                newUrl = `${window.location.origin}${route}`;
            }
            location.href = newUrl;
        }
    }
}
