import './App.css';
import Btn from './btn';
function App({name}){
  let nums=[0,1,2,3,4,5,6,7,8];
  let nums2=[0,1,2];
  let arr=nums.map((num)=><td key={num}><input type="text" pattern="[0-9]{1}" className='cell'/></td>);
  let arr2=nums.map(num=><tr key={num}>{arr}</tr>);
  return(
    <div>
      <div className='title'>
        <h1>Sudoku Solver</h1>
      </div>
      <div className='table'>
        <table className='t1'>
          {arr2}
        </table>
        <Btn/>
      </div>
    </div>
  );
}
export default App;
