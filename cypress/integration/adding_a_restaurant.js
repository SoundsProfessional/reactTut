describe('adding a resto', () => {

    it('displays resto in list', () => {
        const rName='Sushi Place'
       cy.visit('http://localhost:3000');
        cy.get('[data-test="addRestaurantButton"]').click();
        cy.get('[data-test="addRestaurantName"]').type(rName);
        cy.get('[data-test="saveNewRestaurantButton"]').click();
        cy.contains(rName);
    });
});