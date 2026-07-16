const {checknm}= require("../src/main")

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
