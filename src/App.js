import './App.css';
import { useState } from 'react';

function Index1Display({index1}){

  if (index1 >0 ) {
    return (
      <div>
      <p className="X-IndexDisplay" style={{ color: 'green' }}>X:</p>
      <p className="X-IndexDisplay"  style={{ color: 'white' }}> {index1};</p>
    </div>
    )
  }
  else if (index1 == 0){
    return(
      <div>
      <p className="X-IndexDisplay"  style={{ color: 'white' }}>X:</p>
      <p className="X-IndexDisplay"  style={{ color: 'white' }}> {index1} ;</p>
      </div>    
      )
  }
  else if (index1 < 0){
    return(
      <div>
      <p className="X-IndexDisplay"  style={{ color: 'red' }}>X:</p>
      <p className="X-IndexDisplay"  style={{ color: 'white' }}> {index1};</p>
      </div>    
      )
  }
}

function Index0Display({index0}){
  if (index0 >0 ) {
    return (
      <div>
      <p className="Y-IndexDisplay"  style={{ color: 'green' }}> Y:</p>
      <p className="Y-IndexDisplay"  style={{ color: 'white' }}> {index0}</p>
      </div>
    )
  }
  else if (index0 == 0){
    return(
      <div>
      <p className="Y-IndexDisplay"  style={{ color: 'white' }}> Y:</p>
      <p className="Y-IndexDisplay"  style={{ color: 'white' }}> {index0}</p>
      </div>
    )
  }
  else if (index0 < 0){
    return(
      <div>
      <p className="Y-IndexDisplay"  style={{ color: 'red' }}> Y:</p>
      <p className="Y-IndexDisplay"  style={{ color: 'white' }}> {index0}</p>
      </div>
    )
  }
}

function CombinedIndexs({ setIndex0, index0, setIndex1, index1 }) {
  return (
    <div>
        <div> <button className="btn-up" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex0(index0 + 1)} disabled={index0 < -16 || index0 > 16}>︿</button></div>
          <div>
            <button className="btn-left" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex1(index1 - 1)} disabled={index1 < -16 || index1 > 16}>﹤</button>
            <button className="btn-reset" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => {setIndex1(index1 = 0);setIndex0(index0 = 0)}}>R</button>
            <button className="btn-right" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex1(index1 + 1)} disabled={index1 < -16 || index1 > 16}>﹥</button>
          </div>
            <div><button className="btn-down" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex0(index0 - 1)} disabled={index0 < -16 || index0 > 16}>﹀</button></div>
    </div>
  )
}

function IndexState({ index0, index1 }) {
  if (index0 > 0 && index1 > 0) {
    return (
      <div>
        <p className='text-pozitiv'>Spatiu complet pozitiv!</p>
        </div>
    )
  }
  else if (index0<0 && index1<0) {
    return (
        <p className='text-negativ'>Spatiu complet negativ!</p>
    )
  }

  else {
    return (
        <p className='text-echilibrat'>Spatiul de intre!</p>
    )
  }
}

function App() {
  const [index1, setIndex1] = useState(0);
  const [index0, setIndex0] = useState(0);

  return (
    <div className="Aplicatie">
      <CombinedIndexs setIndex0={setIndex0} index0={index0} setIndex1={setIndex1} index1={index1}/>
      <Index1Display index1={index1}/>
      <Index0Display index0={index0}/>
      <IndexState index1={index1} index0={index0}/>
    </div>
  );
}
export default App; 
