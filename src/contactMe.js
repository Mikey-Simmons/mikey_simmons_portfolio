import link from "./imgs/link.png"
import github from "./imgs/github.png"
const aboutMe =  <div>
    <div className="contact_me">
      
      <h2 className="header" >
        <a className="contact" href="tel:206-468-1060">(206)-468-1060</a>
        </h2>
      <br></br>
      <h2 className="header"><a className="contact" href="mailto: mikeysimmons425@gmail.com">mikeysimmons425@gmail.com </a> </h2>
      <br></br>
      
      <a href="https://www.linkedin.com/in/michael-a-simmons/"><img className="tech" src={link}></img></a>
      <a href="https://github.com/Mikey-Simmons"><img className="tech" src={github}></img></a>
    </div>
</div>;

export default aboutMe;