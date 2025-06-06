import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'

function new1 (){
    return (
      <a href='https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4'>
        you
      </a>
    );
}

const reactElement = React.createElement(
    'a',
    {
  href: 'https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4',target:"_blank"
    },
    'click'
);

createRoot(document.getElementById('root')).render(

    reactElement
)

