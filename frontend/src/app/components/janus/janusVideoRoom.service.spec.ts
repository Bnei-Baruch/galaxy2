describe('JanusVideoRoomService', function() {

  var videoRoom;

  beforeEach(angular.mock.module('frontend'));
  beforeEach(angular.mock.inject(function(_videoRoom_: any){
    videoRoom = _videoRoom_;

    spyOn(videoRoom, '$timeout').and.callThrough();
    spyOn(videoRoom.authService, 'can').and.returnValue(true);
  }));

  it('should sent specific http request to change title', () => {
    spyOn(videoRoom.$http, 'get').and.callThrough();
    videoRoom.changeRemoteFeedTitle('Some Title', 1234);
    expect(videoRoom.$http.get).toHaveBeenCalledWith('https://not.existing.v4g.kbb1.com:8080/title.php?title=Some%20Title&port=1234');
  });

  it('should call user joined when when user logs in', () => {
    var channel = {
      name: 'some channel name',
      users: ['user1', 'user2'],
      joinedCallback: (login: string) => { console.log('something happens here'); },
      leftCallback: (login: string) => { console.log('something happens here'); }
    };

    spyOn(channel, 'joinedCallback');
    spyOn(channel, 'leftCallback');

    videoRoom.registerChannel(channel);
    // someone joins
    videoRoom.onLocalHandleMessage({
      videoroom: 'joined',
      publishers: [ { display: 'user1' }, { display: 'user2' } ]
    }, {});
    videoRoom.$timeout.flush();

    expect(channel.joinedCallback).toHaveBeenCalledWith('user1');
    expect(channel.joinedCallback).toHaveBeenCalledWith('user2');
  });

});
