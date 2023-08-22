describe('Api test suit', ()=>{
 it('api test', () => {
    cy.request({
        method: 'GET',
        url: 'https://www.saucedemo.com/',
        headers: {
            Accept: `*/*`,
            'Content-Type': `application/json`,
            Authorization: `Bearer 09e6a117e9c018c96f076cc7740433b17da84295f1889ef844cfe813800a46a6`
        }
    }).then((response) =>{
        expect(response.status).to.equal(200);
    })
 });
})