import test from "@playwright/test";

test('TestCase1',async()=>{
console.log("Executing Test1")
})
test('TestCase2',async()=>{
    console.log("Executing Test2")
})
test('TestCase3',async()=>{
    console.log("Executing Test3")
})
test.beforeAll(async()=>{
    console.log("Running in before All")
})
test.afterAll(async()=>{
    console.log("Running in after All")
})
test.beforeEach(async()=>{
    console.log("Running in beforeeach")
})
test.afterEach(async()=>{
    console.log("Running in aftereach")
})