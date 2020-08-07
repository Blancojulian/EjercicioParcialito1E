/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let articulo;
	let categoria;
	let precio;
	let precioMaximo;
	let nombreArticulo;
	let precioMaximoLacteo;
	let nombreArticuloLacteo;
	let rCategoria;
	let respuesta;
	let bandera = 0;
	let banderaLacteo = 0;
	let cantidadBebidas = 0;


	do {
		articulo = prompt("Ingrese nombre del articulo");


		do {
			categoria = prompt("Ingrese categoria del articulo: almacen, lácteos, limpieza o bebidas").toLowerCase();
			switch (categoria) {
				case "almacen":
				case "lácteos":
				case "limpieza":
				case "bebidas":
					rCategoria = true;
					break;
				default:
					rCategoria = false
					alert("Categoria mal ingresada")
					break;
			}
		} while (rCategoria == false)

		precio = parseInt(prompt("Ingrese precio del articulo"));
		while (precio < 0 || precio > 1000) {
			precio = parseInt(prompt("Ingrese un precio entre 0 y 1000"));
		}

		/*
		do {
			precio = parseInt(prompt("Ingrese precio del articulo"));
		} while (precio < 0 || precio > 1000)
		*/

		if (categoria == "bebidas") {
			cantidadBebidas++
		}
		if (categoria == "lácteos" && (precio > precioMaximoLacteo || banderaLacteo == 0)) {
			precioMaximoLacteo = precio;
			nombreArticuloLacteo = articulo;
		}
		if (precio > precioMaximo || bandera == 0) {
			precioMaximo = precio;
			nombreArticulo = articulo
			bandera++
		}


		/*
			if(precio>precioMaximo||bandera==0){
				precioMaximo = precio;
				nombreArticulo = articulo
			}
			
			if(categoria=="bebidas"){
				if(precio>precioMaximoLacteo||bandera==0){
					precioMaximoLacteo = precio;
					nombreArticuloLacteo = articulo;
				}
				cantidadBebidas++
				//bandera++
			}
			bandera++
	*/

		/*
		if (categoria == "bebidas") {
			cantidadBebidas++
		}
		if (categoria == "bebidas" && (precio > precioMaximoLacteo || bandera == 0)) {
			precioMaximoLacteo = precio;
			nombreArticuloLacteo = articulo;
		}
		if (precio > precioMaximo || bandera == 0) {
			precioMaximo = precio;
			nombreArticulo = articulo
			bandera++
		}
*/



		respuesta = confirm("¿Desea seguir ingresando productos?")
	} while (respuesta == true)

	document.write("Nombre de artículo con mayor precio es " + nombreArticulo + " $" + precioMaximo + "<br>")
	document.write("Nombre de artículo con mayor precio de bebidas es " + nombreArticuloLacteo + " $" + precioMaximoLacteo + "<br>")
	document.write("Cantidad de artículos ingresados de categoría bebidas es " + cantidadBebidas + "<br>")

}