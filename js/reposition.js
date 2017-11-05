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
    'Total Liabilities & Equity',
    'Int Inc: FFS, IB Balances, Other',
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
    'Additional Income',
    'yld'
]

boldFieldNames = [
'Total Assets',
'Net Income'
]

$(document).ready(function() {

    console.log('success')

    let fieldArr = $(".fieldNames")

    $.each(fieldArr, function(index, value) {

        //fieldArr[index].text(respositionRowNames[index])
        fieldArr[index].append(respositionRowNames[index])

        //console.log(boldFieldNames.indexOf(respositionRowNames[index]))

        //apply condition formatting
        if (boldFieldNames.indexOf(respositionRowNames[index]) != -1) {

        	console.log(fieldArr[index] + ' will be bold')
        	//fieldArr[index].css('color: red; font-weight: bold')

        }

    });

})