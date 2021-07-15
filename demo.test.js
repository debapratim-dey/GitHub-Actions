const { sum, sub, prod, digital_root, sum42, sayHelloTo, anomalyCode } = require('./demo');

test('Sum function exists', () => {
  expect(sum).toBeDefined();
});

test('adds 1 + 2 to equal 3', sumTest);

function sumTest() {
  expect(sum(1, 2)).toBe(3);
}

function helloTest() {
  expect(sayHelloTo("Dan")).toBe("Hello, Dan!");
}

test('sayHelloTo function exists', () => {
  expect(sayHelloTo).toBeDefined();
});

test('sayHelloTo Dan should be Hello, Dan!', () => {
  helloTest();
});

test('Prod function exists',()=>{
  expect(prod).toBeDefined();
});

test('prod calculates 2 * 10 = 20', () => {
  expect(prod(2, 10)).toBe(20);
});

 test('digital_root function exists', ()=>{
  expect('digital_root').toBeDefined();
 });

test('digital root of 265 should equal 4', () => {
  expect(digital_root(265)).toBe(4);
})

test('Sum42 function exists', () => {
  expect(sum42).toBeDefined();
});

test('Sum42 3 + 1 should be 46', () => {
  expect(sum42(3, 1)).toBe(46);
});

test('Sub function exists', () => {
  expect(sub).toBeDefined();
})

test('Sub 10 - 3 should be 7', () => {
  expect(sub(10,3)).toBe(7);
})

test('anomalyCode function exists', () => {
  expect(anomalyCode(1)).toBeDefined();
})

test('anomalyCode one should be 50', () => {
  expect(anomalyCode(7)).toBe(50);
})