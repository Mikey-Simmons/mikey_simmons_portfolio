import Typical from 'react-typical';
import mikey1 from '../src/imgs/mikey.jpg'
const homePage =  <div><div className="animated_text">
<Typical
loop={Infinity}


steps={[
  'Hello!',
  500,
  'My name is Michael Simmons!',
  300,
  "I am a Full-Stack Web Developer,",
  300,
  "Who specializes in Python, Java, and M.E.R.N.",
  300,
  "Please continue scrolling to learn more about me...",
  3000
  
]}
>

</Typical>
</div> <div className="my_pic_and_cap">
    
    <img src= {mikey1} ></img>
    
    </div></div>;

export default homePage;