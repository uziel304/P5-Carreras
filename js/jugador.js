let pista
const carro=[]
let i=1
 

let jugador1={
	x1:300,
	y1:150,
	vuel1:1,
	vuelta1:0,
	tamCar1:40
}
var izq1 = new Boolean(false);
var abj1 = new Boolean(false);

 

let jugador2={
	x2:300,
	y2:200,
	vuel2:1,
	vuelta2:0,
	tamCar2:40
}

var izq2 = new Boolean(false);
var abj2 = new Boolean(false);

let jugador3={
	x3:300,
	y3:220,
	vuel3:1,
	vuelta3:0,
	tamCar3:40
}


var izq3 = new Boolean(false);
var abj3 = new Boolean(false);

var ganador = new Boolean(false);


function preload()
{	
	pista= loadImage(`img/pista3.png`)
	for (let i=1; i<4; i++) 
	{
		carro[i] = loadImage(`img/car${i}.png`) 
	}
}

const jugador = function (){

	const draw = function(){
		image(pista,0,0, windowWidth, windowHeight)
		if(ganador!=true){

			jugador1.vuel1= random(15)
			jugador2.vuel2= random(15)
			jugador3.vuel3= random(15)
			
			/* jugador 1 */
			
			if(jugador1.x1<width-200 && izq1!=true){
				push()
				translate(jugador1.x1+=jugador1.vuel1,jugador1.y1)
				rotate(205.8) 
				image(carro[1],0,0, jugador1.tamCar1, jugador1.tamCar1)
				pop()
			}else{
				if(jugador1.y1<height-100 && abj1!=true){
					image(carro[1],jugador1.x1,jugador1.y1+=jugador1.vuel1, jugador1.tamCar1, jugador1.tamCar1)
				}else{
					if(jugador1.x1>100){
						push()
						translate(jugador1.x1-=jugador1.vuel1,jugador1.y1)
						rotate(89.5)

						image(carro[1],0,0, jugador1.tamCar1, jugador1.tamCar1)
						pop()
						izq1=true
					}else{
						if(jugador1.y1>100){
							push()
							translate(jugador1.x1,jugador1.y1-=jugador1.vuel1)
							rotate(9.5)

							image(carro[1],0,0, jugador1.tamCar1, jugador1.tamCar1)
							pop()
							abj1=true
						}else{
							jugador1.vuelta1++
							abj1=false
							izq1=false
						}
					}
				}			
			}

			/* Jugador2 */
			
			if(jugador2.x2<width-180 && izq2!=true){
				push()
				translate(jugador2.x2+=jugador2.vuel2,jugador2.y2)
				rotate(205.8)

				image(carro[2],0,0, jugador2.tamCar2, jugador2.tamCar2)
				pop()
			}else{
				if(jugador2.y2<height-100 && abj2!=true){
					image(carro[2],jugador2.x2,jugador2.y2+=jugador2.vuel2, jugador2.tamCar2, jugador2.tamCar2)
				}else{
					if(jugador2.x2>100){
						push()
						translate(jugador2.x2-=jugador2.vuel2,jugador2.y2)
						rotate(89.5)

						image(carro[2],0,0, jugador2.tamCar2, jugador2.tamCar2)
						pop()
						
						izq2=true
					}else{
						if(jugador2.y2>100){
							push()
							translate(jugador2.x2,jugador2.y2-=jugador2.vuel2)
							rotate(9.5)

							image(carro[2],0,0, jugador2.tamCar2, jugador2.tamCar2)
							pop()
							abj2=true
						}else{
							jugador2.vuelta2++
							abj2=false
							izq2=false
						}
					}
				}			
			}

			/* jugado3 */
			
			if(jugador3.x3<width-170 && izq3!=true){
				push()
				translate(jugador3.x3+=jugador3.vuel3,jugador3.y3)
				rotate(205.8)

				image(carro[3],0,0, jugador3.tamCar3, jugador3.tamCar3)
				pop()
			}else{
				if(jugador3.y3<height-100 && abj3!=true){
					image(carro[3],jugador3.x3,jugador3.y3+=jugador3.vuel3, jugador3.tamCar3, jugador3.tamCar3)
				}else{
					if(jugador3.x3>100){
						push()
						translate(jugador3.x3-=jugador3.vuel3,jugador3.y3)
						rotate(89.5)

						image(carro[3],0,0, jugador3.tamCar3, jugador3.tamCar3)
						pop()
						izq3=true
					}else{
						if(jugador3.y3>100){
							push()
							translate(jugador3.x3,jugador3.y3-=jugador3.vuel3)
							rotate(9.5)

							image(carro[3],0,0, jugador3.tamCar3, jugador3.tamCar3)
							pop()
							abj3=true
						}else{
							jugador3.vuelta3++
							abj3=false
							izq3=false
						}
					}
				}			
			}
				

		}		

		
		if(jugador1.vuelta1==3){
			ganador=true;
			textSize(32);
			text('GANA CARRO Naranja', (width/2)-120, height/2);

		}
		if (jugador2.vuelta2==3) {
			ganador=true;
			textSize(32);
			text('GANA CARRO ROjo', (width/2)-120, height/2);
		}
		if(jugador3.vuelta3==3){
			ganador=true;
			textSize(32);
			text('GANA CARRO Verde', (width/2)-120, height/2);
		}

 

		
	}

	return{
		draw
		
	}


}