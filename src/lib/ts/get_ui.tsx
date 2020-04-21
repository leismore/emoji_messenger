import en_us          from '../ui/en-US.json';
import SupportedLangs from './type/SupportedLangs';
import UIType         from './type/UI';

const UI = {
    'en-US': en_us
}

function get_ui(lang:SupportedLangs):UIType
{
    return UI[lang];
}

export default get_ui;
