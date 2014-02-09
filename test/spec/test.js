/* global describe, it */
 
(function () {
    'use strict';
 
    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
 
    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should return an object when given an id that is present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'});	
        });
 
        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.equal(undefined);
        });
 
        it("should throw an error when given an argument other than a string", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });
      });
 
      describe("has an .add() method",function(){
        it("should add the object it's given to the models property",function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
            students.add({name: 'Josh', id: '4'});

            expect(students.models[1]).to.deep.equal({name: 'Josh', id: '4'});
        });


        it("should increase the models property's length by 1",function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
            students.add({name: 'Josh', id: '4'});
          
            expect(students.models.length).to.equal(2);
        });

        // it("should only accept a single object as an argument",function(){
        //   var students = new Collection([{name: 'Jim', id: '99'}]);
        //     expect(function(){students.add({name: 'Josh', id: '4'}, {name: 'Maurice', id: '5'})}).to.throw(Error);
        // });

        it("should not accept an empty object as an argument",function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
            expect(function(){students.add({})}).to.throw(Error);
        });



        it("should throw an error when given an object without and id property",function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
           expect(function(){students.add({name: 'Josh', blah: ''})}).to.throw(Error);
        });

      });
 
      describe("has a .remove() method",function(){
        it("should, when given an id, remove the corresponding object from the models property",function(){
          var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Hector', id: '12'}]);
           students.remove('99');

           expect(students.models[0]).to.deep.equal({name: 'Hector', id: '12'});
        });

        it("should decrease the models property's length by 1",function(){
         var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Hector', id: '12'}]);
          students.remove('99');

          expect(students.models.length).to.equal(1);
        });

        it("should only accept a single string as an id argument",function(){
          var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Hector', id: '12'}]);
          	expect(function(){students.remove(1)}).to.throw(Error);
          	expect(function(){students.remove({})}).to.throw(Error);
          	expect(function(){students.remove([])}).to.throw(Error);
        });

        it("should return true on successful removal",function(){
          var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Hector', id: '12'}]);
           expect(students.remove('99')).to.equal(true);
        });
      });
    
      describe("has an .empty() method",function(){
        it("should clear out the models array",function(){
          var students = new Collection([{name: 'Will', id: '43'}, {name: 'Peter', id: '15'}]);
           students.empty();

           expect(students.models).to.deep.equal([]);
        });

        it("should return the models array length to zero",function(){
          var students = new Collection([{name: 'Will', id: '43'}, {name: 'Peter', id: '15'}]);
           students.empty();

           expect(students.models.length).to.equal(0);
        });

        it("should return true if models array is empty",function(){
          var students = new Collection([{name: 'Will', id: '43'}, {name: 'Peter', id: '15'}]);
           expect(students.empty()).to.equal(true);

        });



      });

      describe("has an .random() method",function(){
        it("should return a random object from the models array",function(){
         var students = new Collection([{name: 'Kate', id: '46'}, {name: 'Mark', id: '54'}, {name: 'Ed', id: '76'}]);

          expect(students.models).to.include(students.random());

        });

        // it("should accept only a number as an argument",function(){
          

        // });

        // it("should return true if a random object is returned",function(){
          


        // });



      // describe("has a .random() method", function(){
      //   it('should return a random object from the models array', function(){
      //     var fallStudents = [{name: 'Eddie', id: '5'},{name: 'Grandpa', id:'6'}, {name: 'Marylin', id:'7'}, {name: 'Herman', id: '8'}];
      //     var students = new Collection(fallStudents);
      //     var randomSample = students.random();
      //     var itsThere = true;
      //     _.each(randomSample, function(eachObject) {
      //       if (!_.contains(students.models, eachObject))
      //       {
      //         itsThere = false;
      //       };
      //     })
      //     expect(itsThere).to.equal(true); 
      //   });



      });



      describe("has an .length() method",function(){
        it("should return the length of the models array",function(){
          var students = new Collection([{name: 'Matt', id: '32'}, {name: 'Dan', id: '98'}]);
           students.length();

           expect(students.models.length).to.equal(2);
        });


      });










    })
})();

