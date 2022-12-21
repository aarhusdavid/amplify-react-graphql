// import {} from '@frontapp/ui-kit';
import { useFrontContext } from '../providers/frontContext';
import React, {useEffect} from 'react';

// VisualSizesEnum  for avatar size

function Tutorial() {
  const context = useFrontContext();
  // var words = "";
  // var notice =  ""
  // const keyClaimsterms = ["Return","damaged","lost","broken","trashed","bad","awful","pallets","pallet","pictures"];
  // const user = (context.teammate && context.teammate.name) ? context.teammate.name : 'NULL';
  const subjectline = (context.conversation && context.conversation.subject ) ? context.conversation.subject : ' ';
  const blurb = (context.conversation && context.conversation.blurb ) ? context.conversation.blurb : ' ';
  // if (blurb.length === 0) {
  //   words = "No message";
  // } else {
  //   words = blurb.split(' ');
  // }
  // for (var i = 0; i < words; i++) {
  //   switch(true) {
  //     case keyClaimsterms.includes(words[i]):
  //       notice = "Reach out to Claims Team!";
  //       break;
  //     default:
  //       notice = "Not a Claims inquiry";
  //   }
  // };
   

  // var inboxes = (context.conversation && context.conversation.inboxes) ? context.conversation.inboxes : '';

  useEffect(() => {
    // Pseudo-code for fetching data from an external API or database
    // setCompanyStats(
    //   {
    //     'company': 'Blue Rose Labs',
    //     'accountNumber': 54968483,
    //     'activeOrder': 8347
    //   }
    // );
  }, []);


  return (
    <div className="App">
      <h1 className='App-h1'>Latest Message</h1>

      <p className='App-h1'>Subject: {subjectline}</p>
      <p className='App-h1'>Message: {blurb}</p>
      <hr></hr>

      <h1 className='App-h1'>Tags</h1>
      <ol>{context.conversation.tags.map((tag) => (
        <li className='App-h1'>{tag.name}</li>
      ))}</ol>
      <hr></hr>

      <h1 className='App-h1'>Inboxes</h1>
      <ol>{context.conversation.inboxes.map((inbox) => (
        <li className='App-h1'>{inbox.name}</li>
        ))}</ol>
      <hr></hr>

      <h1 className='App-h1'>Links</h1>
      <ol>{context.conversation.links.map((link) => (
        <li className='App-h1'><a target="_blank" href={link.externalUrl} rel="noopener noreferrer">Link</a></li>
        ))}</ol>
      <hr></hr>

      {/* {context.comment.content.map((content) => (
        <li>{content.body}</li>))} */}
    </div>

        

  );
}



export default Tutorial;