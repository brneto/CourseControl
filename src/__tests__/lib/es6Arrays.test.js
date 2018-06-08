describe('Array with inside arrays', () => {
  const sourceArray = [
    {
      documento: 'PGR-1',
      arquivos: [
        {
          name: 'embargoDeclaracao.pdf',
          link: 'localhost:8080/arquivo/6481',
          pages: 30
        },
        {
          name: 'liminar.pdf',
          link: 'localhost:8080/arquivo/6482',
          pages: 50
        }
      ]
    },
    {
      documento: 'PGR-2',
      arquivos: [
        {
          name: 'apendice.pdf',
          link: 'localhost:8080/arquivo/6481',
          pages: 30
        },
        {
          name: 'anexo.pdf',
          link: 'localhost:8080/arquivo/6482',
          pages: 50
        }
      ]
    }
  ];
  const expectArray = [
    {
      name: 'embargoDeclaracao.pdf',
      link: 'localhost:8080/arquivo/6481',
      pages: 30
    },
    {
      name: 'liminar.pdf',
      link: 'localhost:8080/arquivo/6482',
      pages: 50
    },
    {
      name: 'apendice.pdf',
      link: 'localhost:8080/arquivo/6481',
      pages: 30
    },
    {
      name: 'anexo.pdf',
      link: 'localhost:8080/arquivo/6482',
      pages: 50
    }
  ];



  it('should be flatted with flatMap method', () => {
    const flattedArray = sourceArray.flatMap(e => e.arquivos);
    expect(flattedArray).toEqual(expectArray);
  });
});
