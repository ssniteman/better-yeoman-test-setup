// // console.log('\'Allo \'Allo!');

// // Collections spec
 
// // should make a new instance of a collection
// students = new Collection();
 
 
// // if given an array, it should store array
// // in a property called "models"
// var quarterOne2014 = [
//   {
//     name: 'Bower',
//     id: '1'
//   },
//   {
//     name: 'Jack',
//     id: '2'
//   }
// ]
// students = new Collection(quarterOne2014)
// // so this would return
// {
//   models: [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
// }
 
 
// // a Collection has a .find() method that searches by ID
// students.find('1') // should return {name: 'Bower', id: '1'}
 
// // a Collection has an .add() method that takes an object literal,
// // and adds it to the models array
// students.add({name: 'jimmy', id:'3'})
 
// // a Collection has a .remove() method that takes an id,
// // and removes it from the models array
// // students.remove('3')




function Collection (models) {
  this.models = models || [];
 
  this.find = function(id) {
    var result;
 
    if (typeof(id) != 'string') {
      throw new Error("Whoops!");
    }
 
    this.models.forEach(function(value, index){
      if (value.id == id) {
        result = value;
      }
    });
 
    if (result) {
      return result;
    };
  };

   this.add = function (obj) {
	var result;

	// if (obj.length > 1) {
	//   throw new Error("Can only have one object");
	// }; 
	if (_.isEmpty(obj)){
		throw new Error("Can't have an empty obj for argument");

	}

	if (!obj.hasOwnProperty('id')){
		throw new Error('id is empty');

	}	

	this.models.push(obj)
   
   };		

	
	this.remove = function (removeObj) {
	 var result;
	 
	 if (_.isString(removeObj) !=true) {
	 	throw new Error('not a string')
	 }

	this.models = _.reject(this.models, function(removeId){
	 	return removeId.id === removeObj;
	})

	return true;

	};

	this.empty = function () {

	 this.models = [];
	 return true;

	};

};























	// has an .empty() method 

	// has an .random() method

	// has a .length() method





