const {connectToDb}=require("../src/script")
describe("Mock function practice",()=>{
    test("should return greeting message",()=>{
        const greetfn=jest.fn((username)=>`greetings ${username}`);

        
        expect(greetfn("Tarek")).toContain("Tarek");
        expect(greetfn("Ali")).toContain("Ali");

        expect(greetfn).toHaveBeenCalled()
        expect(greetfn).toHaveBeenCalledTimes(2)
        expect(greetfn).toHaveBeenCalledWith("Ali")
        expect(greetfn).toHaveBeenCalledWith("Tarek")
    })
})


describe("connectToDb",()=>{
    it("should run connect if number is 1",()=>{
        const connectMock=jest.fn(()=>true)
        connectToDb(1,connectMock)
        expect(connectMock).toHaveBeenCalled()
    })
})