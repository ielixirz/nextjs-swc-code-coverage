describe("Lets do sometin", () => {
  it("try click", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
    
    cy.get("button").click();
    cy.get(".clickkkkk").contains("100");
  });
});

export {};
