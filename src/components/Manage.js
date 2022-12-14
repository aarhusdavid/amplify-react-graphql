import { useFrontContext } from '../providers/frontContext';

function Manage() {
  const context = useFrontContext();
  //   max characters are 201 for blurb

  // teammate data models
  const user = (context.teammate && context.teammate.name) ? context.teammate.name : 'NULL';

  return (
    <div className="Admin">
      <h2>GCL Admin Portal</h2>
      <h3>Welcome {user} to your admin portal!</h3>  {/* dont put space between <hr>elements</hr> */}
      <p>Here you will be able to access all of GCL infomation via API.</p>
    </div>
  );
}
export default Manage;