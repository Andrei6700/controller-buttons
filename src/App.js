import './App.css';
import { useState } from 'react';

function getCoordonatesColor(index1, index0) {
  if (index1 > 0 || index0 > 0) {
    return 'green';
  }
  else if (index1 < 0 || index0 < 0) {
    return 'red';
  }
  else if (index1 == 0 || index0 == 0) {
    return 'white';
  }
}

function IndexDisplay({index1,index0}){
    return (
      <div>
      <p className="XY-IndexDisplay"  style={{ color: getCoordonatesColor(index1) }}>X</p>
      <p className="XY-IndexDisplay">:{index1};</p>
      <p className="XY-IndexDisplay"  style={{ color: getCoordonatesColor(index0) }}>Y</p>
      <p className="XY-IndexDisplay">:{index0}</p>
    </div>
    )
  }



function CombinedIndexs({ setIndex0, index0, setIndex1, index1 }) {
  return (
    <><div>
        <button className="btn-up" onClick={() => setIndex0(index0 + 1)} disabled={ index0 > 16 }>︿</button>
    </div><><div>
      <div>
        <button className="btn-left" onClick={() => setIndex1(index1 - 1)} disabled={ index1 < -16 }>﹤</button>
        <button className="btn-reset" onClick={() => { setIndex1(index1 = 0); setIndex0( index0 = 0 );}}>R</button>
        <button className="btn-right" onClick={() => setIndex1(index1 + 1)} disabled={index1 > 16 }>﹥</button>
      </div>
    </div><div>
        <button className="btn-down"  onClick={() => setIndex0(index0 - 1)} disabled={index0 < -16 }>﹀</button>
        </div></></>
  )
}

function IndexState({ index0, index1 }) {
  if (index0 > 0 && index1 > 0) {
    return (
        <p className='text-pozitiv'>Spatiu complet pozitiv!</p>
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
        <div>
          <p className="top-text">Esti la: </p>
        </div>
      <IndexDisplay index1={index1} index0={index0}/>
      <CombinedIndexs setIndex0={setIndex0} index0={index0} setIndex1={setIndex1} index1={index1}/>
      <IndexState index1={index1} index0={index0}/>
    </div>
  );
}
export default App; 
