let respositionRowNames = ['Cash & Non-IB Balances',
    'FFS & IB Balances',
    'Investments',
    'Net Loans',
    'OREO',
    'Intangible Assets',
    'Other Assets',
    'Total Assets',
    'Total Deposits',
    'Non-Core Funding',
    'Other Liabilities',
    'Total Liabilities',
    'Total Equity',
    'Total Liabs & Equity',
    'Int Inc: FFS, IB Bal, Other',
    'Investment Income',
    'Tax. Equiv. Adjustment',
    'Int. Inc: Loans',
    'Total Interest Income',
    'Total Interest Expense',
    'Net Interest Income',
    'Loan Loss Provision',
    'Non-Interest Income',
    'Non-Interest Expense',
    'Pre-Tax Operating Income',
    'Realized Gains',
    'Pre-Tax Income',
    'Provision for Taxes',
    'Net Income',
    'Additional Revenue',
    'Additional Income'
    //'yld'
]

boldFieldNames = [
    'Total Assets',
    'Total Liabs & Equity',
    'Net Income',
]

singleUnderLine = [
    'Other Assets',
    'Other Liabilities',
    'Int. Inc: Loans',
    'Total Interest Expense',
    'Non-Interest Expense',
    'Realized Gains',
    'Provision for Taxes'

]

doubleUnderLine = [
    'Total Assets',
    'Total Liabs & Equity',
    'Net Income',
]

$(document).ready(function() {

    //add field names to left hand column of tables
    let fieldArr = $(".fieldNames")

    $.each(fieldArr, function(index, value) {

        fieldArr[index].append(respositionRowNames[index])

        //apply condition formatting
        if (boldFieldNames.indexOf(respositionRowNames[index]) != -1) {

            $(this).addClass('boldText') //ensure that they show up bold
            $(".LTM").slice(index, index+3).addClass('boldOnly')
            $(".restructured").slice(index, index+3).addClass('boldOnly')

        }

    });

    //color miscellaneous cells
    $(".percentLTM").slice(1, 5).addClass("colorCells")
    $(".percentRestructured").slice(1, 5).addClass("colorCells")

    //single underline cells
    singleUnderLine.forEach(function(val) {

        let cur = respositionRowNames.indexOf(val) //index that we will then underline in various columns

        //console.log($(".LTM").slice(cur))
        $(".fieldNames").slice(cur + 1, cur + 2).addClass("singleUnderline")

    });

    //double underline cells
    doubleUnderLine.forEach(function(val) {

        let cur = respositionRowNames.indexOf(val) //index that we will then underline in various columns

        //console.log($(".LTM").slice(cur))
        $(".fieldNames").slice(cur, cur+1).addClass("dblUnderlined")

    });

    //	watch item...........need to also drop in yield #
    $('.yield').text('Yield:')

    //handle form submission
    $('.runModel').on('click', function() {

    	let id = $('#bankIDinput').val();
    	//id = pasrseInt(id);
    	let yld = parseFloat($('#yieldInput').val());
    	let cash = parseFloat($('#cashInput').val());


    	//error handling...data type
    	if (typeof(yld) != "number" || typeof(cash) != "number") {

    		//alert("Numeric Inputs Only");

    	}

    	//error handle the ID input to accept numbers only
    	let idRegEx = /^\d+$/
    	if (!id.match(idRegEx)) {

    		console.log('Input Numbers Only, Please')

    		$('#bankIDinput').val(123456)

    	}

    	//FOR FUN
    	alert('Time to load in your fancy R code, Joe')


    });

})
