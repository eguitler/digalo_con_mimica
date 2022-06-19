import { useState } from 'react'
import './App.css'
import { secToMinStr } from '@utils'

const MODE = {
  individual: 'INDIVIDUAL',
  partners: 'EN PAREJAS',
}

function App() {
  const [mode, setMode] = useState()
  const [countdown, setCountdown] = useState()
  const [teams, setTeams] = useState([])

  return (
    <div className="App">
      Modo de juego:
      <button
        style={{backgroundColor: mode === MODE.individual ? 'red': ''}}
        onClick={() => setMode(MODE.individual)}
      >
        {MODE.individual}
      </button>
      <button
        style={{backgroundColor: mode === MODE.partners ? 'red': ''}}
        onClick={() => setMode(MODE.partners)}
      >
        {MODE.partners}
      </button>

      { mode && (
        <>
          {mode === MODE.individual ? <p>Cantidad de jugadores</p> : <p>Cantidad de equipos</p>}
          {[2,3,4].map( num => (
            <button
              key={num}
              style={{backgroundColor: teams.length === num ? 'red': ''}}
              onClick={() => setTeams(Array(num).fill({}))}
            >
              {num}
            </button>
          ))}

          {teams.map( (team, i) => <><br/><input placeholder={`Name ${i+1}`} /></>)}
        </>
      )}


      <br />
      <br />
      <br />

      Tiempo por turno:
      <button
        style={{ backgroundColor: countdown === 20 ? 'red': '' }}
        onClick={() => setCountdown(20)}
      >
        {secToMinStr(20)}
      </button>
      <button
        style={{ backgroundColor: countdown === 30 ? 'red': '' }}
        onClick={() => setCountdown(30)}
      >
        {secToMinStr(30)}
      </button>
      <button
        style={{ backgroundColor: countdown === 40 ? 'red': '' }}
        onClick={() => setCountdown(40)}
      >
        {secToMinStr(40)}
      </button>
      <button
        style={{ backgroundColor: countdown === 60 ? 'red': '' }}
        onClick={() => setCountdown(60)}
      >
        {secToMinStr(60)}
      </button>
      <button
        style={{ backgroundColor: countdown === 90 ? 'red': '' }}
        onClick={() => setCountdown(90)}
      >
        {secToMinStr(90)}
      </button>
      <button
        style={{ backgroundColor: countdown === 120 ? 'red': '' }}
        onClick={() => setCountdown(120)}
      >
        {secToMinStr(120)}
      </button>

      <br />
      <br />
      <br />

      <input type='checkbox' />
      Bonus por acertar en mitad de tiempo

      <br />

      <input type='checkbox' />
      Bonus por año de estreno

      <br />

      <input type='checkbox' />
      Bonus por direccion

      <br />

      <input type='checkbox' />
      Bonus por protagonistas

      <br />

      <input type='checkbox' />
      Bonus por pais de origen

    </div>
  )
}

export default App
