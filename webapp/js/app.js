  //Buscar Matricula

//   $('#btn-consultar').on('click', function () {

//   (function () {
//     $('input[name="matricula"]').blur(function (e) {

//         var cep = $('input[name="matricula"]').val() || ''

//         if (!cep) {
//             return
//         }

//         var url = 'http://localhost:3000/api/efetivos?filter[where][matricula]=' + cep 
//         $.getJSON(url, function (data) {
//             if ("error" in data) {
//                 return
//             }
//             $('input[name="name"]').val(data.nome)
//             $('input[name="nguerra"]').val(data.nome_de_guerra)
//             $('input[name="contato"]').val(data.telefone)
//             $('input[name="graduacao"]').val(data.graduacao)

//         })
//     })

// })();



//   //Consultar CEP
//   (function () {
//     $('input[name="cep"]').blur(function (e) {

//         var cep = $('input[name="cep"]').val() || ''

//         if (!cep) {
//             return
//         }

//         var url = 'http://viacep.com.br/ws/' + cep + '/json'
//         $.getJSON(url, function (data) {
//             if ("error" in data) {
//                 return
//             }
//             $('input[name="street"]').val(data.logradouro)
//             $('input[name="neighborhood"]').val(data.bairro)
//             $('input[name="city"]').val(data.localidade)
//             $('input[name="uf"]').val(data.uf)

//         })
//     })

// })();