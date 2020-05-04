import { FormEvent }  from 'react';
import SupportedLangs from '../../lib/ts/type/SupportedLangs';

export type Props = {
    lang:     SupportedLangs,
    updater:  (event:FormEvent<HTMLButtonElement>) => void
};
