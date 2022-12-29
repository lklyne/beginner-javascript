

function calculateBill(
    billAmount,
    tipRate = 0.2,
    taxRate = 0.08,
    numberOfPeople = 1
    ) 
    {
    total = (billAmount + taxRate * billAmount + billAmount * tipRate)
    totalPerPerson = total / numberOfPeople
    console.log(`total bill cost is ${total}`)
    console.log(`total per person is ${totalPerPerson}`)

    return totalPerPerson
}

function splitBill(numberOfPeople, billTotal) {
    totalPerPerson = billTotal / numberOfPeople
    return totalPerPerson
}