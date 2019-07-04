class Silla{
	constructor(c, al, an, x, y, rr, h,vel){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
        this.Velocidad = vel;
}
	Dibujar(contextoDeDibujo){

	contextoDeDibujo.strokeStyle = this.Color; 
	contextoDeDibujo.fillStyle  = this.Color;
      ///     
        
 
        
        ///
     
        ////si funciona 
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (79/3)*this.RadioCopa;
        var y_esi = yc - (38/3)*this.RadioCopa;

        var ancho_rect =this.Ancho +(5/3)*this.RadioCopa;
        var altura_rect = this.Altura + (9/3)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();
        ///si funciona 
          
           
          
        
        contextoDeDibujo.closePath();
         contextoDeDibujo.beginPath();
        
        
        contextoDeDibujo.stroke();
    
       
    }
}





class Plano{
	constructor(c, al, an, x, y, rr, h,ed){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.Edad = ed;
	}

	Dibujar(contextoDeDibujo){

	contextoDeDibujo.strokeStyle = this.Color; 
	contextoDeDibujo.fillStyle  = this.Color;
           
         //lineas
          var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (47/3)*this.RadioCopa;
        var y_esi = yc - (60/3)*this.RadioCopa;

        var ancho_rect =this.Ancho -(22/8)*this.RadioCopa;
        var altura_rect = this.Altura + (120/3)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();
           
      
         var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (60/4)*this.RadioCopa;
        var y_esi = yc - (60/3)*this.RadioCopa;

        var ancho_rect = this.Ancho -(145/3)*this.RadioCopa;
        var altura_rect = this.Altura - (20/3)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();
          //lineas


       
         ////punto de salida
           var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (52/4)*this.RadioCopa;
        var y_esi = yc - (62/3)*this.RadioCopa;

        var ancho_rect = this.Ancho +(5/3)*this.RadioCopa;
        var altura_rect = this.Altura - (12/3)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();

         ///punto de salida 
        
        contextoDeDibujo.closePath();
         contextoDeDibujo.beginPath();
        
        
        contextoDeDibujo.stroke();
    
       
    }
}

class Silla2{
    constructor(c, al, an, x, y, rr, h,vel){
        this.Color = c;
        this.Altura = al;
        this.Ancho = an;
        this.X = x;
        this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
        this.Velocidad = vel;
}
    Dibujar(contextoDeDibujo){

    contextoDeDibujo.strokeStyle = this.Color; 
    contextoDeDibujo.fillStyle  = this.Color;
     
           
           var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;

        var x_esi = xc + (35/3)*this.RadioCopa;
        var y_esi = yc - (28/3)*this.RadioCopa;

        var ancho_rect =this.Ancho +(14/3)*this.RadioCopa;
        var altura_rect = this.Altura - (4/8)*this.RadioCopa;

        contextoDeDibujo.fillRect(x_esi,y_esi,ancho_rect,altura_rect);

        contextoDeDibujo.fill();
         
          
        
        contextoDeDibujo.closePath();
         contextoDeDibujo.beginPath();
        
        
        contextoDeDibujo.stroke();
    
       
    }
}

