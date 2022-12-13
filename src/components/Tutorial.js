import { useFrontContext } from '../providers/frontContext';

function Tutorial() {
  const context = useFrontContext();

  const user = (context.teammate && context.teammate.name) ? context.teammate.name : 'NULL';
  const recipient = (context.conversation && context.conversation.recipient && context.conversation.recipient.name) ? context.conversation.recipient.name : 'Nobody';
  const subjectline = (context.conversation && context.conversation.subject ) ? context.conversation.subject : ' ';
//   max characters are 201 for blurb
  const blurb = (context.conversation && context.conversation.blurb ) ? context.conversation.blurb : ' ';

  return (
    <div className="App">
      <h1>Hello {user}!</h1>
      <hr></hr> 
      <h2>You are working with {recipient}</h2>
      <hr></hr>
      <p>Subject: {subjectline}!</p>
      <hr></hr>  {/* dont put space between <hr>elements</hr> */}
      <p>Blurb: {blurb}!</p>
    </div>

  );
}

export default Tutorial;