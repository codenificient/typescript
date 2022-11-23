type Points = 20 | 30 | 40 | 50
let score: Points = 20

console.log( score )

type ComplexPerson = {
	name: string
	age: number
	birthday: Date
	married: boolean
	address: string
}

let bey: ComplexPerson = {
	name: "Beyonce Knowles",
	age: 44,
	birthday: new Date( "01/13/1980" ),
	married: true,
	address: "123 Beyonce Avenue, CA"
}

console.log( bey )
