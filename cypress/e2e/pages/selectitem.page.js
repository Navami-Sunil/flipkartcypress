class selecitem{
    async selecttable(){
        cy.contains('Office Study table').click();
        cy.contains('Table Top Material').click();
        cy.contains('Glass').click();
        cy.get('[title="Wakefit Nayena Engineered Wood Study Table"]').click();
    }
}
module.exports=new selecitem();