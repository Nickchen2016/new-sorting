describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an array of one element', function(){
        expect( bubbleSort([7])).toEqual( [7] );
    });
    it('sorts an array of many elements', function(){
        expect( bubbleSort([5,2,3,1,4,6]) ).toEqual([1,2,3,4,5,6]);
    })
});