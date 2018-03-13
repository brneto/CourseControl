
describe('Array', () => {
  it('find() method should mutate the container when it\'s an object', () => {
    const arrayOfObjects = [
      { id: 1, name: 'Berchris' },
      { id: 2, name: 'Bruna' },
      { id: 3, name: 'Julia' },
    ];
    const obj = arrayOfObjects.find(obj => obj.id === 2);

    expect('name' in obj).toBe(true);
    expect(obj.name).toBe(arrayOfObjects[1].name);

    obj.name = 'Bruna Requiao';
    expect(obj.name).toBe(arrayOfObjects[1].name);
  });

});
