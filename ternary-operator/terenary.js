let person = {
	name: 'aleks',
	age: 33, 
	driver: false,
	city: 'LA'
};


let hello = 'apple';


if (person.age >= 18) {
	person.driver = true
} else {
	person.driver = false
}


const a = person.driver = person.age >= 18 ? true : false
console.log(a);

function discount(value) {
	return (value) ? '200$' : '100$' 
}
console.log(discount('100'))
