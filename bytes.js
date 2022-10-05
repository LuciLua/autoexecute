function convert(b64data, type) {

    if (type == 'toText') {
        var binary_values = atob(b64data)
    }
    if (type == 'toBase') {
        var binary_values = btoa(b64data)
    }
    if (type == 'toBin') {
        var binary_values = bin(b64data)
    }

    var output = document.getElementById('output')
    output.value = binary_values
}

var text = document.getElementById('textToConvert')


text.addEventListener('input', () => {
    
    var typeB64 = document.getElementById('ToBase64').checked
    var typeString = document.getElementById('ToString').checked
    var typeBinary = document.getElementById('ToBinary').checked

    if(typeB64){
        convert(text.value, 'toBase')
    }
    if(typeString){
        convert(text.value, 'toText')
    }
    if(typeBinary){
        convert(text.value, 'toBin')
    }
})


var btncopy = document.getElementById('copy')

btncopy.addEventListener('click', ()=> {
    var output = document.getElementById('output').value
    navigator.clipboard.writeText(output)
    alert('Copiado com sucesso: ' + output)
})
























// function base64tobytes(b64data){
//     var binary_values = atob(b64data);
//     var binary_length = binary_values.length;
//     var bytes_data = new Uint8Array(binary_length);

//     for(i = 0; i < binary_length; i++){
//         bytes_data[i] = binary_values.charAt(i)
//     }

//     return bytes_data.buffer;
// }

// // var filebytes = base64tobytes(filedata)
// var filebytes = filedata
//  var blob = new Blob([filebytes], {"type": "octet/stream"})

// var anchor = document.createElement("a")
// document.body.append(anchor)
// anchor.style = "display: none;"

// var url = window.URL.createObjectURL(blob)
// anchor.href = url;
// anchor.download = filename;

// anchor.click()
// window.URL.revokeObjectURL(url)