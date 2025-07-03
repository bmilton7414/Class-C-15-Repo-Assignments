// test/variables.test.js
var expect = chai.expect;

describe('Variables', function() {
  it('myVar should be a string equal to "apple"', function() {
    expect(myVar).to.be.a('string');
    expect(myVar).to.equal('apple');
  });

  it('myNum should be a number equal to 5', function() {
    expect(myNum).to.be.a('number');
    expect(myNum).to.equal(5);
  });

  it('myBool should be a boolean equal to true', function() {
    expect(myBool).to.be.a('boolean');
    expect(myBool).to.equal(true);
  });

  it('myArr should be an array equal to ["apple",5,true]', function() {
    expect(myArr).to.be.an('array');
    expect(myArr).to.deep.equal(['apple', 5, true]);
  });

  it('myObj should be an object with name "Alice" and age 30', function() {
    expect(myObj).to.be.an('object');
    expect(myObj).to.have.property('name', 'Alice');
    expect(myObj).to.have.property('age', 30);
  });
});
