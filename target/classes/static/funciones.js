/**
 * funciones para bicicleta
 */
function ConsultarDatos(){
    $.ajax({

        dataType: 'JSON',
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        
        type: 'GET',
        success: function(response){
            console.log(response);
            $("#resultadoBike").empty();
            respuestaBike(resultadoBike.items);
        }
    });
}
function respuestaBike(items){
    
            let myTable="<table border=1>";

            for(i=0; i<items.length; i++){
                myTable += "<tr>";
                myTable += "<td>"+items[i].id+"</td>";
                myTable += "<td>"+items[i].brand+"</td>";
                myTable += "<td>"+items[i].model+"</td>";
                myTable += "<td>"+items[i].category_id+"</td>";
                myTable += "<td>"+items[i].name+"</td>";
                myTable += "<td><button onclick='borrarDatos("+items[i].id+")'>Borrar</button></td>";
                myTable += "<td><button onclick='obtenerIdEspecifico("+items[i].id+")'>Cargar</button></td>";
                myTable += "</tr>";
            }
            myTable += "</table>";
            $("#resultadoBike").append(myTable);
}
function guardarDatos(){

    let misDatos={
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
    };

    let dataToSend=JSON.stringify(misDatos);
    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'POST',
        data:misDatos,
        dataType: 'JSON',      
        
        success:function(response) {
            $("#resultadoBike").empty();
            $("#miId").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            ConsultarDatos();
            alert("Datos Guardados Con Exito")
        }
    });
}
function borrarDatos(idItems){
    let misDatos={
        id:$("#miId").val(),
    }

    let dataToSend=JSON.stringify(misDatos);
    $.ajax({

        dataType: 'JSON',
        data:dataToSend,
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'DELETE',
        contentType: 'application/json',
        success:function(response) {
            ConsultarDatos();
            alert("Datos Borrados Con Exito")
        },
        
    });
}
function obtenerIdEspecifico(items){
    console.log("---- obtenerIdEspecifico items", items);
    $.ajax({

        dataType: 'JSON',
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike"+idItems ,
        type: 'GET',
        success:function(response) {
            console.log("---- obtenerIdEspecifico", response);
            var item=response.items[0];
            $("#miId").val(item.id),
            $("#brand").val(item.brand),
            $("#model").val(item.model),
            $("#category_id").val(item.category_id),
            $("#name").val(item.name)

        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}

function actualizarDatos(){

    let misDatos={
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
        }

    let dataToSend=JSON.stringify(misDatos);
    $.ajax({

        dataType: 'JSON',
        data:dataToSend,
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'PUT',
        contentType: 'application/json',
        success:function(response) {
            $("#resultadoBike").empty();
            $("#miId").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            ConsultarDatos();
            alert("Datos Actualizados Con Exito")
            
        },
    });
}

/**
 * funciones para cliente
 */

/**
 * funciones para mensaje
 */
