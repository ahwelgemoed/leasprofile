import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import createHistory from 'history/createBrowserHistory';
import { List } from 'react-content-loader';
const locationHelper = locationHelperBuilder({});
const history = createHistory();

export const UserIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: List,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/leaslogin',
  authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: List,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/leaslogin',
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty
});
