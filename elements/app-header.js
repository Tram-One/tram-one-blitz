import Tram from 'tram-one'
const html = Tram.html()

export default (attrs) => {
  const style= `
    color: ${attrs.color}; background: black;
    cursor: hand; text-align: center;
    padding: 1em; user-select: none;
  `
  return html`
    <h1 style=${style} onclick=${attrs.onclick} >
      tram-one-stackblitz
    </h1>
  `
}
