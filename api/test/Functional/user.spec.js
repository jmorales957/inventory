const request = require( 'supertest' );
const expect = require( 'chai' ).expect;
const app = require( '../../app' );

describe( 'Tests for user endpoints', function () {
    this.timeout( 0 );
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
        .send( userRequest )
        .expect( 200 )
        .end( ( err, res ) => {
            expect( res.body ).to.have.property( 'success' );
            expect( res.body.success ).to.be.false;
        } )
    } );
} );