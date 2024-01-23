import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificatonAtom,
  totalNotificationSelector,
} from "../atom/atom";

function AtomStatic() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const [mesagingNotificationCount, setMessagingCount] =
    useRecoilState(messagingAtom);
  const notificationNotificationCount = useRecoilValue(notificatonAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 99 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Notification ({notificationNotificationCount})</button>

      <button>Messaging ({mesagingNotificationCount})</button>

      <button
        onClick={() => {
          setMessagingCount(mesagingNotificationCount + 1);
        }}
      >
        Me ({totalNotificationCount})
      </button>
    </>
  );
}

export default AtomStatic;
