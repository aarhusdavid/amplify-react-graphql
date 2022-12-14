import {Avatar, VisualSizesEnum } from '@frontapp/ui-kit';
import { useFrontContext } from '../providers/frontContext';

function Tutorial() {
  const context = useFrontContext();

  //////////////// teammate data models
  const user = (context.teammate && context.teammate.name) ? context.teammate.name : 'NULL';
  const recipient = (context.conversation && context.conversation.recipient && context.conversation.recipient.name) ? context.conversation.recipient.name : '';
  const subjectline = (context.conversation && context.conversation.subject ) ? context.conversation.subject : ' ';
  // const id = (context.teammate && context.teammate.id) ? context.teammate.id : 'NULL';

  //////////////// conversation data models (max characters are 201 for blurb)
  const blurb = (context.conversation && context.conversation.blurb ) ? context.conversation.blurb : ' ';

  //////////////// contact data models
  // const desc = (context.contact && context.contact.description) ? context.contact.description : 'NULL';
  // <Avatar name={user}/>
  
  //////////////// inbox data models
  // var box = [ownerinbox].shift()

  return (
    <div className="App">
      <h1 class="App-Avatar"><Avatar name={user} size={VisualSizesEnum.EXTRA_LARGE}/></h1>
      <hr></hr>
      <h3>You are working with: {recipient}</h3>
      <hr></hr>
      <p>Subject: {subjectline}</p>
      <hr></hr>  {/* dont put space between <hr>elements</hr> */}
      <p>Message: {blurb}!</p>
    </div>

  );
}



export default Tutorial;