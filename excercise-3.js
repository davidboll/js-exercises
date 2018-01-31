/*jshint esversion: 6 */

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
