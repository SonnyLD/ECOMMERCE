
// Se simplifico codigo con DOM 
function CalcularPromedio(){
    let dia = document.getElementById("e1").value
    let p1 = document.getElementById("n1").value
    let p2 = document.getElementById("n2").value
    let p3 = document.getElementById("n3").value

    let pro = (parseFloat(p1) + parseFloat(p2) + parseFloat(p3))/3
    document.getElementById("promedio").value = Math.ceil(pro)
    
    // Operador avanzado
    pro >= 100 ? swal("Aprobado!", "Por favor click en el boton!", "success") : swal("Desaprobado!", "Por favor click en el boton!", "error")
    
    //Se almacena todo en el localstorage y se agrega tabla.
    localStorage.setItem("e1", dia);
    localStorage.setItem("n1", p1);
    localStorage.setItem("n2", p2);
    localStorage.setItem("n3", p3);
    localStorage.setItem("promedio", Math.ceil(pro));
    document.getElementById("e1").value = "";
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n3").value = "";
    document.getElementById("promedio").value = "";

    localStorage.getItem("e1");
    localStorage.getItem("n1");
    localStorage.getItem("n2");
    localStorage.getItem("n3");
    localStorage.getItem("promedio");
    let fila="<tr><td>"+ dia +"</td><td>"+ p1 +"</td><td>"+ p2 +"</td><td>"+ p3 +"</td><td>"+ Math.ceil(pro)+"</td></tr>";
    let btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);

   }
   
   let contenido = document.querySelector('#contenido')

function traer() {
    fetch('semana.json')
        .then(res => res.json())
        .then(datos => {
            // console.log(datos)
            tabla(datos)
        })
}

function tabla(datos) {
    // console.log(datos)
    contenido.innerHTML = ''
    for(let valor of datos){
        //console.log(valor.dia)
        contenido.innerHTML += `
        
        <tr>
            <th scope="row">${ valor.id }</th>
            <td>${ valor.dia }</td>
            <td>${ valor.promedio }</td>
            <td>${ valor.estado ? "Aprobado" : "Desaprobado" }</td>
        </tr>
        
        `
    }
}
