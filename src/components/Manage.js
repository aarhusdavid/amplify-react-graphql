import { useFrontContext } from '../providers/frontContext';

function Manage() {
  const context = useFrontContext();
  //   max characters are 201 for blurb

  const user = (context.teammate && context.teammate.name) ? context.teammate.name : 'NULL';
  const user_email = (context.teammate && context.teammate.email) ? context.teammate.email : 'NULL';

  return (
    <div className="Admin">
      <h2>{user_email}</h2>
      <h3>Hello Admin {user}!</h3>  {/* dont put space between <hr>elements</hr> */}
      <p>You are registered as an Admin for GCL SDK! Here you will be able to access all of GCL infomation via API.</p>
    </div>
  );
}

export default Manage;