import recurse from './solve';
import './btn.css';
function hehe(){
    
    const cells=document.getElementsByClassName('cell');
    // const arr=cells.map(x=>x.value);
    let grid=[];
    let idx=0;
    for(let i=0; i<9; i++){
        let columns=[];
        for(let j=0; j<9; j++){
            let data=cells[idx].value;
            if(data==='')
                columns.push(0);
            else 
                columns.push(parseInt(data));
            idx++;
        }
        grid.push(columns);
    }
    
    recurse(grid);
    console.log(grid);
    idx=0;
    for(let i=0; i<9; i++){
        let columns=[];
        for(let j=0; j<9; j++){
            cells[idx].value=(grid[i][j]);
            idx++;
        }
        grid.push(columns);
    }
}

function Btn(){
    return(
        <div>
            <button className="button-3" type="button" onClick={hehe}>Solve!</button>
        </div>
    );
}

export default Btn;