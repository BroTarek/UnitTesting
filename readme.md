what is software testing:is the process of excuting a program to find errors or bugs

Types of testing
  Manual Testing: running app on broser and trying it
  Automated Testing: we write code that test the app , we write code on development env and test it on testing env

Beneifits of Automated TEsting
  Mush faster than manual tests
  catch bugs before deploying
  Refactor your code
  producing high quality software

Types of automated Testing
  Unit testing
  Integeration testing
  End-to-End tetsing

Unit test: tests a unit of an application without its external dependencies 
   example:
             function sum(n1,n2){
                return  n1+n2
             } // this does not depend on any other code

Intergeration tests: tests the application with its external dependencies
    exmple: 
            async function getBooksFromDatabase(){
                const books=books.find();
                return books;
            }// this depends on database

ENd-to-End test: drives an apllication through its UI

Unit => Integeration => E2E
        
----------------------------------------------------------------------------------------------------------------


