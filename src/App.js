import './App.css';

function App() {
  return (
    <div>
      <div id="header">
      </div>
      <div className="left"></div>
      <div className="stuff">
        <br /><br />
        <img id='logo-img'src='mehran.jpeg'></img>
        <h1>Faizan Ahmad</h1>
        <h5>Mehranhamza8@gmail.com</h5>
        
        <hr />
        <br />
        <p className="head">Interests</p>
        <ul>
          <li>Drawing</li>
          <li>Photography</li>
          <li>Design</li>
          <li>Programming</li>
          <li>Computer Science</li>
        </ul>
        <p className="head">Skills</p>
        <ul>
          <li>Django developer</li>
        </ul>
        <p className="head">Education</p>
        <ul>
          <a href="/">
            <li>kamal Grammer School</li>
          </a>
          
          <a href="/">
            <li>Punjab College</li>
          </a>
        </ul>
        <p className="head">Experience</p>
        <ul>
          <li>Covid-19 Vaccination System: Data structure project in C++</li>
          <li>Job Portal web application in PHP</li>
        </ul>
        <p className="head">Extracurriculars</p>
        <ul>
          <li>Recycling Club</li>
          <li>Gardening Club</li>
          <li>Book Club</li>
        </ul>
      </div>
      <div className="right"></div>
      <div id="footer">
        <h2 id="name">Mehran Hamza</h2>
      </div>
    </div>
  );
}

export default App;
