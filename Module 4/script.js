var nombre=new Array();
nombre[0]="Yenny";
nombre[1]="Juan";
nombre[2]="Julio";
nombre[3]="Jimena";
nombre[4]="pedro";
nombre[5]="tania";
nombre[6]="sara";
nombre[7]="javier";
nombre[8]="juanita";
nombre[9]="samanta";


for (var i = 0; i < nombre.length; i++) {
	if(nombre[i].charAt(0)==='J'|| nombre[i].charAt(0)==='j'){
        console.log("Goodbye "+ nombre[i])
	}
	else{
		console.log("Hello "+ nombre[i])
	}
}