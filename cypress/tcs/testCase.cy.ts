describe('API Test connect (Docker)', () => {
    it('should respond with message', () => {
        cy.request('http://localhost:3000/hello').then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq('Hello from mock-api!');
        });
    });
});