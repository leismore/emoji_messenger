import { FormEvent }  from 'react';
import SupportedLangs from '../../lib/ts/type/SupportedLangs';

export type Props = {
    lang:          SupportedLangs,
    value:         string,
    valid:         (boolean | null),
    valueUpdater:  (event:FormEvent<HTMLTextAreaElement>) => void
};
