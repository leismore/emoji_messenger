import { ChangeEvent }  from 'react';
import SupportedLangs   from '../../lib/ts/type/SupportedLangs';

export type Props = {
    lang:     SupportedLangs,
    checked:  boolean,
    updater:  (event:ChangeEvent<HTMLInputElement>) => void
};
