const movimiento=function(player){

    
    const w = 30
    const h = 90
    const p = player
    let x = p === 1 ? 50 : (width - w)-50
    const speed = 8
    const UP = -1
    const DOWN = 1
    const LEFT = -2
    const RIGHT = 2 
    let y = (Math.floor(height / 2))-25
    let score = 0


    const move = function(dir){
        if(edge(dir))
        {
            if(dir==UP || dir==DOWN)
                y += (speed * dir)
            else
                x += (5 * dir)
        }
    }

    const edge = function(dir){
        switch(p)
        {
            case 1:
                return (dir === UP && y > 0 || dir === DOWN && y < height - h || dir === LEFT && x>0 || dir === RIGHT && x < width/2-w)
            break;

            case 2:
                return (dir === UP && y > 0 || dir === DOWN && y < height - h || dir === LEFT && x>width/2 || dir === RIGHT && x < width-w)
            break;
        }
    }


      return {
        draw,
        move,
        
    }

}