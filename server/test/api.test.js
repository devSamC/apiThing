const request = require('supertest');
const app = require('../server');
const Sausage = require('../models/sausage')
// global.fetch = require('jest-fetch-mock');
describe('API server', () => {
    // boilerplate stuff?
    let api;



    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('test server running on port 5000')
        });
    });


    afterAll((done) => {
        console.log('test server stopped')
        api.close(done);
    });
    describe('requests', () => {

        it('responds to GET / with status 404', (done) => {
            request(api).get(`/`).expect(404, done);
        })
        it('responds to GET /sausages with status 200', (done) => {
            request(api).get(`/sausages`).expect(200, done);
        })

        it('responds to GET /sausages/:id with status 200', (done) => {
            request(api).get(`/sausages/:id`).expect(200, done);
        })

        it('responds to GET /notaworkinglink with status 404', (done) => {
            request(api).get(`/notaworkinglink`).expect(404, done);
        })


        it('responds to GET /sausages/chorizo with that sausage', (done) => {
            request(api)
                .get(`/sausages/chorizo`)
                .expect({
                    "id": 3,
                    "name": "chorizo",
                    "numberOfLinks": 2,
                    "spiciness": 4,
                    "curvature": 4,
                    "deliciousness": 5,
                    "smoked": false
                }, done)
        })

        it('responds to GET /sausages/mostcurvy with that sausage', (done) => {
            request(api)
                .get(`/sausages/mostcurvy`)
                .expect({
                    id: 1,
                    name: 'cumberland',
                    numberOfLinks: 0,
                    spiciness: 2,
                    curvature: 5,
                    deliciousness: 4,
                    smoked: false,
                }, done)
        })

        it('responds to GET /sausages/mostdelicious with that sausage', (done) => {
            request(api)
                .get(`/sausages/mostdelicious`)
                .expect({
                    id: 3,
                    name: 'chorizo',
                    numberOfLinks: 2,
                    spiciness: 4,
                    curvature: 4,
                    deliciousness: 5,
                    smoked: false,
                }, done)
        })






    })


    describe('Sausage test', () => {
        const testSausage = {
            "name": 'BigSausage',
            "numberOfLinks": 2
        };

        it('should create a sausage', () => {
            const sausagesData = Sausage.all
            const newSausageId = sausagesData.length + 1;
            const newSausage = Sausage.create(testSausage);

            expect(newSausage).toEqual({
                id: newSausageId,
                ...testSausage
            });
        });



    });

});