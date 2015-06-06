describe('Frame', function() {

  var frame;


  beforeEach(function() {
    frame = new Frame();
  });

  it('Can have ten pins', function() {
    expect(frame.PinCount).toEqual(10);
  });

  it('knocking 3 pins down', function() {
    frame.PinDown(3);
    expect(frame.PinCount).toEqual(7);
    expect(frame.RollCount).toEqual(1);
  });

  it('knocking 4 pins down in same frame', function() {
    frame.PinDown(3);
    frame.PinDown(4);
    expect(frame.PinCount).toEqual(3);
    expect(frame.RollCount).toEqual(2);
  });

  it('does not allow more than 2 turns', function() {
    frame.PinDown(3);
    frame.PinDown(4);
    frame.PinDown(5);
    expect(frame.PinCount).toEqual(3);
    expect(frame.isOver).toEqual(true);
  });

  it('scores a spare',function(){
    frame.PinDown(5);
    frame.PinDown(5);
    expect(frame.PinCount).toEqual(0);
    expect(frame.RollCount).toEqual(2);
  });

  it('scores a strike',function(){
    frame.PinDown(10);
    frame.PinDown(0);
    expect(frame.PinCount).toEqual(0);
    expect(frame.RollCount).toEqual(2);
  });
});
