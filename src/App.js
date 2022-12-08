import React, { useEffect, useState } from 'react';
import './App.scss'
import CurrentWeather from './components/CurrentWeather';
import FutureWeather from './components/FutureWeather';
import Search from './components/Search';
import { FetchData} from './utils/FetchData';
import { getWeather } from './utils/getWeather';
import FakeWeatherData from './FakeWeatherData.json'

const App =()=> {
  
  const REACT_APP_API_KEY = '88b9ffbb25b4d7eedb65588edfdf020d' 
  const [img, setImg] = useState("")
  const [weather_, setWeather_] = useState([])
  const [bg, setBg] = useState("")

  useEffect(() => {
    setWeather_(FakeWeatherData?.list);
    setImg('unknown');
    setBg('#9ccef4');
  }, []);

  const searchClicked = async (city) => {

    const list = await FetchData(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${REACT_APP_API_KEY}`, "GET");
      if(list.status===200) {
      setWeather_(list?.data?.list);
      const details = getWeather(list.data?.list[0]?.weather[0]?.id);
      setImg(details?.name);
      setBg(details?.bg);
      }
      else {
        console.warn("Faild to load resources!");
        setWeather_([]); 
      }
  }


  return (
    <div className="app" style={{backgroundColor: bg}}>

      <header className="app__header">
        <Search searchClicked={searchClicked}/>
      </header>

      <main className="app__main">

              <CurrentWeather forcast={weather_[0]} img={img}/>
              <FutureWeather forcast={weather_}/>
      </main>

    </div>
  );
}


export default App;
