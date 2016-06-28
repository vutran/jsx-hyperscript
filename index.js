import h from 'hyperscript';

const App = (
  <div>
    <h1>JSX + Hyperscript</h1>
    <p>It is pretty simple.</p>
  </div>
);

const rootNode = document.querySelector('#app');

rootNode.appendChild(App);
