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
    'Total Liabilities & Equity',
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

        }

    });

    //color miscellaneous cells
    $(".percentLTM").slice(1, 5).addClass("colorCells")
    $(".percentRestructured").slice(1, 5).addClass("colorCells")

    //single underline cells

})