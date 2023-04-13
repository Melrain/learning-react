
import './App.css';
import { Planet } from "./Planet";

function App() {

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ]


  return(
    planets.map((planet,key)=>{
      return<Planet isGasPlanet={planet.isGasPlanet} name={planet.name} />
    })
  )
}

export default App;
