import { FormEvent }  from 'react';
import SupportedLangs from '../../lib/ts/type/SupportedLangs';

export type Props = {
    lang:                 SupportedLangs,
    encryptUpdater:       (event:FormEvent<HTMLButtonElement>) => void,
    decryptUpdater:       (event:FormEvent<HTMLButtonElement>) => void,
    clipboardToUpdater:   (event:FormEvent<HTMLButtonElement>) => void,
    clipboardFromUpdater: (event:FormEvent<HTMLButtonElement>) => void,
};
