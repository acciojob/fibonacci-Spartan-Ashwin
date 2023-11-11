function fibonacci(num) {
// your code here
	let i=0,a=0,b=0,c=0;
	while(i<num){
		a=b;
		b=c;
		c=a+b;
	}
	return c;
}

module.exports = fibonacci;
