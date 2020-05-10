console.log("test")
import wip from "../img/working.svg";

const WIP = () => `
  <section id="wip">
    <div class="c0">
      <h1>Work is being done!</h1>
      <img src=${wip} alt="Work in progress" />
    </div>
  </section>
  
`

document.querySelector("body").insertAdjacentHTML("beforeend",WIP());