import SupportedLangs from '../../lib/ts/type/SupportedLangs';

export type Props = {
    lang: SupportedLangs
};

export type States = {
    textValue:               string,
    textValid:               (boolean | null),
    pwValue:                 string,
    pwValid:                 (boolean | null),
    appendURL:               boolean,
    submittedEncrypt:        boolean,
    submittedDecrypt:        boolean,
    copiedToClipboard:       boolean,
    copiedFromClipboard:     boolean,
    formReady:               boolean,
    wrongPW:                 boolean
};
