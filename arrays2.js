/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
    // Your code here
    let odd = [1, 2, 3, 4, 5];
    let even = [1, 2, 3, 4];
    function isArrayLengthOdd(numbers) {
      let solve;
      if (numbers.length % 2) {
        solve = " true";
      } else {
        solve = "fulse";
      }
      return solve;
    }

console.log(isArrayLengthOdd(even));
console.log(isArrayLengthOdd(odd));










  /**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
    // Your code here

    let even2 = [1, 2, 3, 4, 5, 6];
    let odd2 = [1, 2, 3];
    function isArrayLengthEven(numbers) {
      let solve2;
      if (numbers.length % 2) {
         solve2= "true";
      } else {
        solve2 = "false";
      }
      return solve2;
    }
    console.log(isArrayLengthEven(even2));
    console.log(isArrayLengthEven(odd2));
    





  /**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */

    // Your code here


  

 let array = ["Moudhi", "Meshary", "Fahad", "Anwar", "Salman", "Ayah"];
     function addLailatoArray(instructors) {
  instructors.push("Laila");
  return instructors;
}
console.log(addLailatoArray(array));





  /**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */

    // Your code here
    let teams = ["Brazil", "Germany", "Italy"];
    function eliminateTeam(team) {
      team.pop();
      return team;
    }
    console.log(eliminateTeam(teams));



