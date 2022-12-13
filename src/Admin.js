// import { useSyncExternalStore } from 'react';
import './Admin.css';
import Manage from './components/Manage';
import { useFrontContext } from './providers/frontContext';

// list of admin users

function Admin() {
  const context = useFrontContext();
  const admins = ["Trevor Marioni", "Mike Lahey", "John Mebane","David Aarhus"];

  if (!context)
      return (
        <div className="Admin">
          {/* <p>Waiting to connect to the Front context.</p> */}
        </div>
      )
  switch(true) {
      case admins.includes(context.teammate.name):
        return (
          <div className="Admin">
              <Manage />
          </div>
        );
      default:
        return (
        <div className="Admin">
            <p>Not a registered Admin</p>
        </div>
        )
  };
}
export default Admin;