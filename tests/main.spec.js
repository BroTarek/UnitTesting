const {checknm,sayHello,getNames}= require("../src/main")

describe("checknm",()=>{

test("should return number passed if input is positive",()=>{
  const res=checknm(2);
  expect(res).toBe(2);
})
test("should return the number in negative",()=>{
  const res=checknm(-2);
  expect(res).toBe(-2);
})
test("should return zero",()=>{
  const res=checknm(0);
  expect(res).toBe(0);
})
})

// i can use it() instead of test()

describe("sayHello",()=>{
test("should return hello message",()=>{
    //assertion
    expect(sayHello("Tarek")).toMatch(/Tarek/i)// used with regular expression
})
})


describe("getNames",()=>{
    test("should return an array of names",()=>{
        expect(getNames()).toEqual(expect.arrayContaining(["Ali"]))
        expect(getNames()).toHaveLength(3)
        expect(getNames()).toBeDefined();
        expect(getNames()).not.toBeNull()
        
    })
})
