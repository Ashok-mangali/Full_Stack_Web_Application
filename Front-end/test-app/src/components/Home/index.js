import React from 'react';
import './index.css'
function Home() {
  return (
    <div className='App'>
        <h1>Fullstack Project</h1>
        <h3>I'm create to a full-stack project using Python, MongoDB, and React,
             I  can follow a systematic approach to develop each part of the Task. 
        </h3>
        <div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '20px'}}>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                <li>Frontend: <span>React Js</span></li>
                <br></br>
                <li>Backend: <span>Python with Flask</span></li>
                <br></br>
                <li>Database: <span>MangoDB</span></li>
                <br></br>

            </ul>
        </div>
        <h3>Run Ours Applications</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
                <li>Back-End <span>  python server.py</span>  from our main project directory</li>
                <br></br>
                <li>Front-End <span>  npm start</span>  from within the client directory</li>
                <br></br>
                

            </ul>

    
        </div>

    
  )
  
}

export default Home;
