const {checknm,sayHello,getNames,getUser,loginUser}= require("../src/main")

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

describe("getUser",()=>{// skips this test only 
    test("should return user",()=>{
        //expect(getUser(1,"Tarek")).toEqual({id:1,name:"Tarek"}) // this will fail because it has to be identical
        expect(getUser(1,"Tarek")).toMatchObject({id:1,name:"Tarek"})// this is  similar to toContain()
        expect(getUser(1,"Tarek")).toHaveProperty("id",1)//checks for only one properety
    })
})
