import './App.css';
import { useState } from 'react';

function Index1Display({index1}){
  if (index1 >0 ) {
    return (
      <div>
      <p className="p1" style={{ color: 'green' }}>X:</p>
      <p className="p1"  style={{ color: 'white' }}> {index1}</p>
    </div>
    )
  }
  else if (index1 == 0){
    return(
      <div>
      <p className="p1"  style={{ color: 'white' }}>X:</p>
      <p className="p1"  style={{ color: 'white' }}> {index1}</p>
      </div>    
      )
  }
  else if (index1 < 0){
    return(
      <div>
      <p className="p1"  style={{ color: 'red' }}>X:</p>
      <p className="p1"  style={{ color: 'white' }}> {index1}</p>
      </div>    
      )
  }
}

function Index0Display({index0}){
  if (index0 >0 ) {
    return (
      <div>
      <p className="p2"  style={{ color: 'green' }}> Y:</p>
      <p className="p2"  style={{ color: 'white' }}> {index0}</p>
      </div>
    )
  }
  else if (index0 == 0){
    return(
      <div>
      <p className="p2"  style={{ color: 'white' }}> Y:</p>
      <p className="p2"  style={{ color: 'white' }}> {index0}</p>
      </div>
    )
  }
  else if (index0 < 0){
    return(
      <div>
      <p className="p2"  style={{ color: 'red' }}> Y:</p>
      <p className="p2"  style={{ color: 'white' }}> {index0}</p>
      </div>
    )
  }
}

function CombinedIndexs({ setIndex0, index0, setIndex1, index1 }) {
  return (
    <div >
      <p className="p3">Esti la: </p>
      <button className="button0" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex0(index0 + 1)} disabled={index0 < -16 || index0 > 16}>︿</button>
      <button className="button4" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex1(index1 - 1)} disabled={index1 < -16 || index1 > 16}>﹤</button>
      <button className="button2" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => {setIndex1(index1 = 0);setIndex0(index0 = 0)}}>R</button>
      <button className="button3" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex1(index1 + 1)} disabled={index1 < -16 || index1 > 16}>﹥</button>
      <button className="button1" style={{color:'black',padding:'10px 10px 0'}}  onClick={() => setIndex0(index0 - 1)} disabled={index0 < -16 || index0 > 16}>﹀</button>
  </div>
  )
}

function IndexState({ index0, index1 }) {
  if (index0 > 0 && index1 > 0) {
    return (
      <div style={{color:'green'}}>
        <p className='ceva'>Spatiu complet pozitiv!</p>
      </div>
    )
  }
  else if (index0<0 && index1<0) {
    return (
      <div style={{color:'red'}}>
        <p className='ceva1'>Spatiu complet negativ!</p>
      </div>
    )
  }

  else {
    return (
      <div style={{color:'white'}}>
        <p className='ceva2'>Spatiul de intre!</p>
      </div>
    )
  }
}

function App() {
  const [index1, setIndex1] = useState(0);
  const [index0, setIndex0] = useState(0);

  return (
    <div className="Aplicatie">
      <CombinedIndexs setIndex0={setIndex0} index0={index0} setIndex1={setIndex1} index1={index1}/>
      <Index1Display index1={index1}  />
      <Index0Display index0={index0}/>
      <IndexState index1={index1} index0={index0}/>
    </div>
  );
}
export default App; 
