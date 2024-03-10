import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleModChange = async () => {
    setDarkMode(!darkMode);
    if(darkMode === true){ 
      document.body.classList.add('light__mode');
      document.body.classList.remove('dark__mode');
      await localStorage.setItem('Theme','light__mode'); 
    }
    if(darkMode === false){ 
      document.body.classList.add('dark__mode');
      document.body.classList.remove('light__mode');
      await localStorage.setItem('Theme','dark__mode'); 
    }

  };
  
  useEffect(() => {
    if (localStorage.getItem('Theme') === 'light__mode') {
      document.body.classList.add('light__mode');

    } else if (localStorage.getItem('Theme') === 'dark__mode') {
      document.body.classList.add('dark__mode');
      setDarkMode(!darkMode);
    }

  }, []);
  return (
    <>
      <div className="content__main--section">
        <h1>Aktarujjaman</h1>
        {localStorage.getItem('Theme') === 'dark__mode' ?
          <button className="btnDesign" onClick={handleModChange}>LIGHT</button>
        :
          <button className="btnDesign" onClick={handleModChange}>DARK</button>
        }
      </div>
    </>
  )
}

export default App
