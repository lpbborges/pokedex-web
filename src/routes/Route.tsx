import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) {

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === false ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
