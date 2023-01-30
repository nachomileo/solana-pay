import React, { FC } from 'react';
import { SolanaPayLogo } from '../images/SolanaPayLogo';
import { SalmonLogo } from '../images/salmonlogo';
import * as css from './PoweredBy.module.pcss';

export const PoweredBy: FC = () => {
    return (
        <div className={css.root}>
            Powered by <SolanaPayLogo /> & <SalmonLogo />
        </div>
    );
};
