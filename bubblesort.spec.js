describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

});


describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(window,'swap').and.callThrough();
  });
  it('calling swap method n number of times', function () {
    bubbleSort([3,2,1]);
    expect(swap.calls.count()).toEqual(3);
  });
});
