const {connectToDb,getBook}=require("../src/script")
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

describe("getBook",()=>{
    it("should return name if user id is 1",async()=>{
        const res= await getBook(1);
        expect(res).toMatchObject({name:"Ali"})
         
        // await expect(getBook(1)).resolve.toMatchObject({name:"Ali"})
    })

    it("should fail with an error object",async()=>{
        try {
            await getBook(0);
        } catch (error) {
            expect({errorMessage:"inavlid id"})
        }
    })
})