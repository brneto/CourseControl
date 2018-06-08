describe('Objects properties write into quotes', () => {
  const obj1 = {
    user: {
      'firstname': 'Paulo',
      lastname: 'Silva'
    }
  };

  const obj2 = {
    user: {
      firstname: 'Paulo',
      lastname: 'Silva'
    }
  };

  it('should be equal to objects properties not write into quotes', () => {
    expect(obj1).toEqual(obj2);
  });
});
