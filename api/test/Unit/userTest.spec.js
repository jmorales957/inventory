require( 'dotenv' ).config();
const userModel = require( '../../models/user' );
const { expect } = require( 'chai' ); 
describe(' TEST - compare password ', function() {
    this.timeout( 0 );
    beforeEach( async() => {
        await userModel.remove({}); 
    } )
    it( 'Returns a booolean value', async () => {
        const newUser = {
            name: 'gil', 
            last_name : 'mendez',
            mail : 'gmendez1@codeguys.com.mx',
            password: 'password',
            active : true,
            user_type: 1,
            address: 'cima del exito',
            phone: '3323323321',
            rfc: '12312312asdasda',
        }
        const user = await userModel.create(newUser);
        expect( user ).to.not.be.null;
        const result = await user.comparePassword('password');
        expect(  result ).to.be.true;
        
    } );
    after( async ( ) => {
        await userModel.remove({});
    })
})