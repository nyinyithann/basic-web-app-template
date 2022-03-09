import './style.css';
import '../node_modules/modern-normalize/modern-normalize.css';

function render() {
  const appRoot: HTMLElement | null = document.getElementById('root');
  if (appRoot) {
    appRoot.innerHTML = '<p>🤠&nbspHowdy, World!&nbsp🤠</p>';
    appRoot.classList.add('center');
    document.body.appendChild(appRoot);
  }
}
render();
