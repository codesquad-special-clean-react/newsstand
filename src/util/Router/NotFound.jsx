import { Link } from './Link';
import { routes } from './routes';

export const NotFound = () => {
  return (
    <div>
      <p>404 - NotFound</p>
      <Link to={routes.home.path}>Back to home</Link>
    </div>
  );
};
