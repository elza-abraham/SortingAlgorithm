describe('Split Array function', function() {
  it('splits an array', function(){
    expect( split([1,2,3,4,5]) ).toEqual( [[1,2],[3,4,5]] );
  });
});
describe('Merge function', function(){
  beforeAll(function () {
    spyOn(window,'merge').and.callThrough();
  });
  it('calling merge method n number of times', function () {
    mergeSort([3,2,1,4]);
    expect(merge.calls.count()).toEqual(3);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([2,4],[1,3,5]) ).toEqual( [1,2,3,4,5] );
  });
});
describe('Merge function', function(){
  it('result array is merged', function(){
    expect( mergeSort([3, 2, 5, 1, 4]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});
