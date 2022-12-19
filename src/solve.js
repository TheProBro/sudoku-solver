function checkRow(grid, x, y, val){
    for(let i=0; i<9; i++){
        if(i!==y && grid[x][i]===val)
            return false;
    }
    return true;
}
function checkCol(grid, x, y, val){
    for(let i=0; i<9; i++){
        if(i!==x && grid[i][y]===val)
            return false;
    }
    return true;
}
function checkBox(grid, x,y, val){
    let left=Math.floor(x/3)*3, right=left+3;
    let up=Math.floor(y/3)*3, down=up+3;
    for(let i=left; i<right; i++){
        for(let j=up; j<down; j++){
            if(i===x && j===y) continue;
            if(grid[i][j]===val)
                return false;
        }
    }
    return true;
}

function recurse(board){
    let count=0;
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j]===0){
                let none=true;
                for(let k=1; k<=9; k++){
                    if(checkBox(board, i,j,k) && checkCol(board, i, j, k) && checkRow(board, i, j, k)){
                        none=false;
                        board[i][j]=k;
                        if(recurse(board)===true)
                            return true;
                        else{
                            board[i][j]=0;
                            none=true;
                        }
                    }
                }
                if(none===true)
                    return false;
            }
            else count++;
        }
    }
    if(count===81) return true;
    return false;
}
export default recurse;
// grid=[
//     [0,0,0,4,7,0,0,0,9],
//     [0,2,0,0,0,0,0,0,0],
//     [1,0,0,0,3,0,0,0,2],
//     [6,0,8,1,0,0,0,0,0],
//     [0,4,0,0,8,0,0,0,0],
//     [0,0,1,0,0,6,0,8,0],
//     [4,3,0,0,0,0,0,1,0],
//     [0,0,2,0,0,7,0,5,0],
//     [0,0,0,0,9,0,0,6,0],
// ];

// recurse(grid);

// console.log(grid);