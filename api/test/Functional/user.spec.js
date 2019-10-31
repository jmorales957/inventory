const request = require( 'supertest' );
const expect = require( 'chai' ).expect;
const userModel = require( '../../models/user' );
const app = require( '../../app' );
const { generateToken } = require( '../../services/auth.service' );
describe( 'Tests for user endpoints', function () {
    this.timeout( 0 );
    let token;
    beforeEach( async () => {
        await userModel.remove({});
        token = await generateToken( { _id: '1231asdasd123123' } );
    } )
    it( 'should return a success message creating one user', () => {
        const userRequest = {
            name: 'gil', 
            last_name : 'mendez',
            mail : 'gmendez@codeguys.com.mx',
            password: 'password',
            active : true,
            user_type: 1,
            address: 'cima del exito',
            phone: '3323323321',
            rfc: '12312312asdasda',
        }
        request( app )
        .post('/api/v1/users')
        .set({ 'auth-token': token })
        .send( userRequest )
        .expect( 200 )
        .end( ( err, res ) => {
            expect( res.body ).to.have.property( 'message' );
            expect( res.body.data ).to.have.property('_id');
        } )
    } );
    it( 'should return a failed message creating one repeated user', () => {
        const userRequest = {
            name: 'gil', 
            last_name : 'mendez',
            mail : 'gmendez@codeguys.com.mx',
            password: 'password',
            active : true,
            user_type: 1,
            address: 'cima del exito',
            phone: '3323323321',
            rfc: '12312312asdasda',
        }
        request( app )
        .post('/api/v1/users')
        .set({ 'auth-token': token })
        .send( userRequest )
        .expect( 200 )
        .end( ( err, res ) => {
            expect( res.body ).to.have.property( 'success' );
            expect( res.body.success ).to.be.false;
        } )
    } );
    after( async ( ) => {
        await userModel.remove({});
    })
} );