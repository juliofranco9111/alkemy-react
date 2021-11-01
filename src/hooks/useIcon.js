import { LockOn, Mention } from 'akar-icons';

export const useIcon = (name) => {
  let icon = null;
  switch (name) {
    case 'email':
      return <Mention key={name} />;
    case 'password':
      return <LockOn key={name} />;

    default:
      return icon;
  }
};
