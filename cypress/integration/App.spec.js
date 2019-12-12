describe ('Test App', () => {
    it ('launches', () => {
        cy.visit ('/');
    });

    it ('creates button for correct courses', () => {
        cy.visit('/');
        cy.get('[data-cy=00]').should('contain', 'Algorithms - Assignment 1');
        cy.get('[data-cy=01]').should('contain', 'Algorithms - Assignment 2');
        cy.get('[data-cy=10]').should('contain', 'Intro to OOP - Lab 1');
        cy.get('[data-cy=20]').should('contain', 'Data Structures - HW 1').click();
        cy.get('[data-cy=modal]').should('contain', 'Enter hours spent to complete this assignment:')
    })
})