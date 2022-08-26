import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const allLangs = [
    {
      key: "ru",
      title: "Rusian"
    },
    {
      key: "en",
      title: "English"
    }
  ]
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en")
  const [isRu, setisRu] = useState(true)

  useEffect(() => {
    setLang(localStorage.getItem("lang"))
    if(lang == "ru"){
      setisRu(true)
    }else{
      setisRu(false)
    }
  }, [lang])

  return (
    <div className="App">
     <MainPage allLangs={allLangs} lang={lang} setLang={setLang} isRu={isRu} />
    </div>
  );
}

export default App;
