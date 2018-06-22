import Tram from 'tram-one'
const html = Tram.html()

export default (attrs) => {
  const style= `
    color: ${attrs.color}; background: black;
    cursor: pointer; text-align: center;
    padding: 1em; user-select: none;
    margin: -8px -8px 8px -8px;
  `
  return html`
    <h1 style=${style} onclick=${attrs.onclick} >
      tram-one-stackblitz
    </h1>
  `
}
