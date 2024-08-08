class furniture{
    async furnitureselect(){
        cy.contains('span','Furniture').click();
        cy.contains('a', 'VIEW ALL').click();
    }
}
module.exports=new furniture();