describe('JanusVideoRoomService', function() {

  var videoRoom;

  beforeEach(angular.mock.module('frontend'));

  beforeEach(angular.mock.inject(function(_videoRoom_: any){
    videoRoom = _videoRoom_;
  }));

  it('should test test', () => {
    console.log(videoRoom);
    expect(1).toBe(1);
    expect(videoRoom).not.toBe(undefined);
  });

});
