import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import getInventors from './services/inventors';
import getProjects from './services/projects';

import './App.css';


function App() {
  const [ inventors, setInventors ] = useState([])
  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const inventorsData = await getInventors()
      const projectsData = await getProjects()

      setInventors(inventorsData)
      setProjects(projectsData)
    }

    fetchData()
  }, [setProjects, setInventors])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>Same API Project</h2>

        <h3>Inventors</h3>
        {!inventors.length && (<small>No inventors registered</small>)}
        {inventors.map(item => <Item item={item} key={item.id} />)}

        <h3>Projects</h3>
        {!projects.length && (<small>No projects registered</small>)}
        {projects.map(item => <Item item={item} key={item.id} />)}
      </header>
    </div>
  )

}

const Item = (props) => {
  const {item} = props;
  return (
    <li>{item.name}</li>
  )
}


export default App;
