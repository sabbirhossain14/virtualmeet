import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const CallRoom = () => {
    const { roomCode } = useParams();

    const myMeeting = async (element) => {
        // Meeting logic here
        const appID = 884274931;
        const serverSecret = "180043de77633260dead4deaaeb0e88e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomCode, Date.now().toString(), "The Host");
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario : { mode : ZegoUIKitPrebuilt.VideoConference }
        });
    }
    
  return (
    <>
        <div ref={myMeeting} className="w-full h-full">

        </div>
    </>
  )
}

export default CallRoom