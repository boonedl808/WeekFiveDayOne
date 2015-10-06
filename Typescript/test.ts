interface Name {
	firstName: string;
	lastName: string;
}


function greeter(n: Name) : string {
	return "Hi" + n.firstName;
}

var n= {
	firstName: 'Matt',
	lastName: "Landers"
};

console.log(greeter(n));

