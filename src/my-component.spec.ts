describe('my-component', () => {
  it("contains a child element that is deeper then one level", () => {
    const root = document.createElement('div');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    root.appendChild(span1);
    root.appendChild(span2);
    span1.appendChild(h1);
    span2.appendChild(h2);

    expect(root.contains(h1)).toEqual(true);
  });
});
