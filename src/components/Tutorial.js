import { useFrontContext } from '../providers/frontContext';

function Tutorial() {
  const context = useFrontContext();

  const user = (context.teammate && context.teammate.name) ? context.teammate.name : '';
  const recipient = (context.conversation && context.conversation.recipient && context.conversation.recipient.name) ? context.conversation.recipient.name : '';

  return (
    <div className="App">
      <p>Hello {user}!</p>
      <p>You are working with {recipient}!</p>
    </div>
  );
}

export default Tutorial;