// document.addEventListener('DOMContentLoaded', () => {
//     // Event delegation: Attach a single event listener to the parent element
//     document.getElementById('parentElement').addEventListener('click', function(event) {
//       if (event.target && event.target.matches('button.myButton')) {
//         // Handle the button click event
//         console.log('Button clicked:', event.target);
//         alert(`Button clicked: ${event.target.innerText}`);
//       }
//     });

//     // Add new items dynamically
//     document.getElementById('addItemButton').addEventListener('click', () => {
//       const itemList = document.getElementById('itemList');
//       const newItem = document.createElement('li');
//       const newButton = document.createElement('button');
//       newButton.className = 'myButton';
//       newButton.innerText = `Button ${itemList.children.length + 1}`;
//       newItem.appendChild(newButton);
//       itemList.appendChild(newItem);
//     });
//   });

// function createCounter() {
//   let count = 0; // Variable within the lexical scope
//   return function () {
//     count++; // Increment the variable
//     return count; // Return the updated count
//   };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// const counter3 = createCounter();

// console.log(counter1()); // Output: 1
// console.log(counter1()); // Output: 2
// console.log(counter2()); // Output: 1
// console.log(counter2()); // Output: 2
// console.log(counter2())
// console.log(counter3())

// function outerFunction() {
//     let outerVariable = 'I am outside!';

//     function innerFunction() {
//         let innerVariable = 'I am inside!'; // Local variable
//         console.log(outerVariable); // Can access outerVariable
//         console.log(innerVariable); // Can access innerVariable
//     }

//     innerFunction();
// }

// // outerFunction(); // Output: I am outside!

const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(this.name);
        console.log(this.age)
    }
};
person.greet(); // Logs 'Alice'

// console.log(this)
// console.log(typeof(this))
