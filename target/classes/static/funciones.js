/**
 * funciones para bicicleta
 */
function guardarDatos(){

    var datos={
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
        }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'POST',
        data:datos,
        dataType: 'JSON',      
        
        success:function(response) {
            console.log(response);
            alert("Guardado Exitoso")
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}

function ConsultarDatos(){
    $.ajax({

        dataType: 'JSON',
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'GET',
        contentType: 'application/json',
        success:function(response) {

            var items=response.items;

            for(i=0;i<items.length;i++){
                $("#items").append("<td>");
                $("#items").append("<td>"+items[i].id+"</td>");
                $("#items").append("<td>"+items[i].brand+"</td>");
                $("#items").append("<td>"+items[i].model+"</td>");
                $("#items").append("<td>"+items[i].category_id+"</td>");
                $("#items").append("<td>"+items[i].name+"</td>");
                $("#items").append('<td><button onclick="borrarDatos('+items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="obtenerIdEspecifico('+items[i].id+')">Cargar</button></td>');
                $("#items").append("</td>");
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
                }
            });
}  

function borrarDatos(items){
    var datos={
        id:$("#miId").val(),
    }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        dataType: 'JSON',
        data:dataToSend,
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'DELETE',
        contentType: 'application/json',
        success:function(response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}
function obtenerIdEspecifico(idItem){

    $.ajax({

        dataType: 'JSON',
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike"+idItem ,
        type: 'GET',
        contentType: 'application/json',
        success:function(response) {
            console.log(response);
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

    var datos={
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
        }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        dataType: 'JSON',
        data:dataToSend,
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'POST',
        contentType: 'application/json',
        success:function(response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}boton
/**
 * funciones para cliente
 */
function guardarCliente(){

    var datos={
        id:$("#miId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
        }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" ,
        type: 'POST',
        data:datos,
        dataType: 'JSON',      
        
        success:function(response) {
            console.log(response);
            alert("Guardado Exitoso")
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}
function ConsultarCliente(){
    $.ajax({

        dataType: 'JSON',
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client" ,
        type: 'GET',
        contentType: 'application/json',
        success:function(response) {

            var items=response.items;

            for(i=0;i<items.length;i++){
                $("#items").append("<td>");
                $("#items").append("<td>"+items[i].id+"</td>");
                $("#items").append("<td>"+items[i].name+"</td>");
                $("#items").append("<td>"+items[i].email+"</td>");
                $("#items").append("<td>"+items[i].age+"</td>");
                $("#items").append('<td><button onclick="borrarDatos('+items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="obtenerIdEspecifico('+items[i].id+')">Cargar</button></td>');
                $("#items").append("</td>");
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
                }
            });
}  
function actualizarCliente(){

    var datos={
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
        }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        dataType: 'JSON',
        data:dataToSend,
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike" ,
        type: 'POST',
        contentType: 'application/json',
        success:function(response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}
/**
 * funciones para mensaje
 */
function guardarMensaje(){

    var datos={
        id:$("#miId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
        }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        type: 'POST',
        data:datos,
        dataType: 'JSON',      
        
        success:function(response) {
            console.log(response);
            alert("Guardado Exitoso")
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}
function ConsultarMensaje(){
    $.ajax({

        dataType: 'JSON',
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        type: 'GET',
        contentType: 'application/json',
        success:function(response) {

            var items=response.items;

            for(i=0;i<items.length;i++){
                $("#items").append("<td>");
                $("#items").append("<td>"+items[i].id+"</td>");
                $("#items").append("<td>"+items[i].name+"</td>");
                $("#items").append("<td>"+items[i].email+"</td>");
                $("#items").append("<td>"+items[i].age+"</td>");
                $("#items").append('<td><button onclick="borrarDatos('+items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="obtenerIdEspecifico('+items[i].id+')">Cargar</button></td>');
                $("#items").append("</td>");
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
                }
            });
}  
function actualizarMensaje(){

    var datos={
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val()
        }

    var dataToSend=JSON.stringify(datos);
    $.ajax({

        dataType: 'JSON',
        data:dataToSend,
        url: "https://g9b9523a5debfd4-dbreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message" ,
        type: 'POST',
        contentType: 'application/json',
        success:function(response) {
            console.log(response);
        },
        error: function(jqXHR, textStatus, errorThrown){
        }
    });
}
