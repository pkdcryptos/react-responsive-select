// import { action } from '@storybook/addon-actions';
import { /* boolean, text, */withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import ReactResponsiveSelect from '../../ReactResponsiveSelect';
import { wInfo } from '../../utils/wInfo';
import { CaretIcon } from '../components/CaretIcon';

import '../../ReactResponsiveSelect.css';
import '../stories.css';

const stories = storiesOf('Single Select', module);
stories.addDecorator(withKnobs);

stories.add(
    'No selection label (noSelectionLabel)',
    wInfo()(() => (
        <ReactResponsiveSelect
            noSelectionLabel="Please select"
            name="make2"
            options={[{
                value: 'null',
                text: 'Any',
                markup: <span>Any</span>,
            }, {
                value: 'bmw',
                text: 'BMW',
                markup: <span><span className="badge" aria-hidden="true">B</span>{' '}BMW</span>,
            }, {
                value: 'fiat',
                text: 'Fiat',
                markup: <span><span className="badge" aria-hidden="true">F</span>{' '}Fiat</span>,
            }, {
                value: 'subaru',
                text: 'Subaru',
                markup: <span><span className="badge" aria-hidden="true">S</span>{' '}Subaru</span>,
            },
            {
                value: 'tesla',
                text: 'Tesla',
                markup: <span><span className="badge" aria-hidden="true">T</span>{' '}Tesla</span>,
            },
            ]}
            onSubmit={(): void => {
                this.form.submit();
            }}
            caretIcon={<CaretIcon />}
            selectedValue=""
            onChange={this.reportChange}
        />
    )),
);
