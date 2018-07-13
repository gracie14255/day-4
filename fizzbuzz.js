var points = new Array(100);
for (var i = 0; i < 100; i++) {
	points[i] = i + 1;
}

for (var i = 0; i < points.length; i++) {
   console.log(points[i]); 
 if ((i % 3) === 0&& (i%5)===0){
	console.log ('Fizzbuzz');
} else if (i%3===0){
	console.log('fizz');
}else if (i%5===0){
	console.log ('buzz');
}
}
