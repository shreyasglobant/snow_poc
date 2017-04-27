describe('login service', function() {

  beforeEach(module('app'));

  var HelloWorldController,httpBackend,
  loginService;

  beforeEach(inject(function ($httpBackend, _loginService_) {
     loginService = _loginService_;
     httpBackend = $httpBackend;
   })
 );

 it('loginService to be defined', function () {
   expect(loginService).toBeDefined();
 });

  it('says hello world!', function () {
    expect("Hello world!").toEqual("Hello world!");
  });

});
