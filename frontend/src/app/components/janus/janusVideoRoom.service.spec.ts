// declare var Janus: any;
// declare var jasmin: any;

describe('JanusVideoRoomService', function() {

  var videoRoom;
  // var log;

  beforeEach(angular.mock.module('frontend'));
  beforeEach(angular.mock.inject(function(/*_$log_: any,*/ _videoRoom_: any) {
    videoRoom = _videoRoom_;
  //   spyOn(videoRoom, '$timeout').and.callThrough();
  //   spyOn(videoRoom.authService, 'can').and.returnValue(true);
  //   log = _$log_;
  //   log.reset();
  //   spyOn(_$log_, 'info').and.callFake((l: any) => {
  //     console.log('This is angular info:' + l);
  //   });
  //   spyOn(_$log_, 'error').and.callFake((l: any) => {
  //     console.log('This is angular error:' + l);
  //   });
  //   Janus.init({
  //     debug: ['log', 'warn', 'error'],
  //     callback: () => {
  //       // Add Janus mocks here.
  //       spyOn(Janus, 'isWebrtcSupported').and.returnValue(true);
  //     }
  //   });
  }));

  xit('should sent specific http request to change title', () => {
    console.log('should sent specific http request to change title');
    spyOn(videoRoom.$http, 'get').and.callThrough();
    videoRoom.changeRemoteFeedTitle('Some Title', 1234);
    expect(videoRoom.$http.get).toHaveBeenCalledWith('https://not.existing.v4g.kbb1.com:8080/title.php?title=Some%20Title&port=1234');
  });

  xit('should call user joined when when user logs in and left when logs out/disconnected', () => {
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
      publishers: [ { id: 'id1', display: 'user1' }, { id: 'id2', display: 'user2' } ]
    }, {});
    videoRoom.$timeout.flush();

    expect(channel.joinedCallback).toHaveBeenCalledWith('user1');
    expect(channel.joinedCallback).toHaveBeenCalledWith('user2');

    videoRoom.onLocalHandleMessage({
      videoroom: 'event',
      leaving: 'id1'
    }, {});
    videoRoom.onLocalHandleMessage({
      videoroom: 'event',
      leaving: 'id_not_existing'
    }, {});
    videoRoom.$timeout.flush();

    expect(channel.leftCallback).toHaveBeenCalledWith('user1');
  });

  xit('should create handle when subscribed to channel', (done: any) => {
    videoRoom.subscribeForStream('login').then(() => {
      done();
    });
    expect(Object.keys(videoRoom.remoteHandles)).toEqual(['login', 'asdf']);
  });

  xit('should delete handle when unsubsribing from channel', () => {
    expect(true);
  });

  it('should not delete handle after unsubscription if was subscribed more than once', () => {
    expect(true);
  });
});
