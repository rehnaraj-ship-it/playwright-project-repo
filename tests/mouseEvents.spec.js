/*MouseEvents in playwright are used to perform actions that a user normally performs with 
a mouse such as click,double-click,right-click,mouse over,drag and drop. */
import{test,expect}from '@playwright/test'
test('right-click',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    const rightClick=await page.locator("//span[text()='Draggable n°1']").click({button:'right'})
})

test('mouse-over',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    const mouseOver=await page.locator("#others").hover()
})

test('double-click',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    await page.locator('//h4[text()="Draggable Items List"]').dblclick()
})

test.only('drag & drop',async({page})=>{
    await page.goto('https://selenium.qabible.in/drag-drop.php')
    await page.locator('//span[text()="Draggable n°3"]').dragTo(page.locator('#mydropzone'))

})