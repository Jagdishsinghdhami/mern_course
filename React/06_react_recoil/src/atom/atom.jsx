import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificatonAtom = atom({
  key: "notificatonAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificatonAtom);
    const messagingAtomCount = get(messagingAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});
