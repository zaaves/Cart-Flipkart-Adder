import { useState } from 'react'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
import './App.css'

import './App.css'

function App() {


  const data = [
    { image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Uphills", artist: "Mark duff", added: false },
    { image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljfGVufDB8fDB8fHww", name: "Drowning", artist: "Jamie Carter", added: false },
    { image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww", name: "Voyage", artist: "Charlie Puth", added: false },
    { image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljfGVufDB8fDB8fHww", name: "Head to West", artist: "lil Wayne", added: false },
    { image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D", name: "Heavens", artist: "Wiz Khalifa", added: false },
    { image: "https://images.unsplash.com/photo-1569926426428-471bfd09906a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8", name: "No One", artist: "Harry Styles", added: false },
    { image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D", name: "Neon Hour", artist: "Jacob rus", added: false },
    { image: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fHww", name: "Either me", artist: "Daniel bob", added: false },
  ]

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      })
    })
  }

  return (
    <>
      <div id='bg-img' className=" w-full h-screen bg-gray-500">
        <Navbar data={songData} />
        <div id='sos' className="max-mm:sos px-20 flex gap-10 mt-10 flex-wrap">

          {songData.map((obj, index) => (
            <Card 
              data={obj} 
              handleClick={handleClick} 
              index={index} 
              key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
