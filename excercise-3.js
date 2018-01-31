/*jshint esversion: 6 */

/* What is this? Does it have an equivalent in Ruby?

The 'this' keyword doesn't really have a short answer. But it kindof
relates to the function or scope where it is called. So in the
example below, if we crete a new Person like "david", insted of
writing david.first we can write this.first.

It's equivalent in Ruby would be the 'self' keyword. Even though it's
not exactly the same.

*/

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;

    const privateFn = (first, last) => {
      // private function
    };

    this.setName = (first, last) => {
        // public function
        this.first = first;
        this.last = last;
    };
  }
}

fullName = () => {
    // extend prototype
    return `${this.first} ${this.last}`;
    // even at runtime!
};

const bob = new Person("Thomas", "Ochman");
    // "new" creates an object
bob.fullName();
    // "Thomas Ochman"
