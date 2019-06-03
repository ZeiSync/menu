
	//exercise
	//1.show all students
	//2.creat a new student
	//3.save & exit

//1. save to ./data.json -> fs.readfileSync( to read file data), JSON.parse
//2. 
// your name
// your age
// your class
//3. save and exit

var readlineSync = require('readline-sync');
var fs = require('fs');
var data = require('./data.json');

var option = ['show all students', 'creat a new student', 'save & exit'];
var choose = readlineSync.keyInSelect(option, 'please choose one of these option');
console.log((++choose)+'. '+option[--choose]);
choose++;

while(choose === 1) {
	var readFile = fs.readFileSync('./data.json', {encoding: 'utf8'});
	var fileParse = JSON.parse(readFile);
	console.log(fileParse);

	var option = ['show all students', 'creat a new student', 'save & exit'];
	var choose = readlineSync.keyInSelect(option, 'please choose one of these option');
	console.log((++choose)+'. '+option[--choose]);
	choose++;
	
}
var allStudent = [];
while(choose === 2) 
{
	var student = {};
	var name = readlineSync.question('please enter your name: ');
	student.name = name;

	var age = readlineSync.question('please enter your age: ');
	student.age = parseInt(age);

	var ID = readlineSync.question('please enter your ID: ');
	student.ID = parseInt(ID);

	allStudent.push(student);
	var convertStringify = JSON.stringify(allStudent);
	var writeFile = fs.writeFileSync('./data.json', convertStringify);
	

	var option = ['show all students', 'creat a new student', 'save & exit'];
	var choose = readlineSync.keyInSelect(option, 'please choose one of these option');
	console.log((++choose)+'. '+option[--choose]);
	choose++;

} 
if (choose === 3 ) {
	console.log('file saved');
} else {console.log('cancle');}
