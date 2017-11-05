let respositionRowNames = [

"Asset1",
"Asset2",
"Asset3"

]

$(document).ready(function() {

    console.log('success')

    let fieldArr = $(".fieldNames")

    $.each(fieldArr, function(index, value) {
        
    	//fieldArr[index].text(respositionRowNames[index])
        fieldArr[index].append(respositionRowNames[index])

    });

})