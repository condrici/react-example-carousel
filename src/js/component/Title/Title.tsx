import './Title.scss';
import * as React from 'react';

export type TitleItems = string;

export interface TitleProps
{
    text: TitleItems;
}

const Title: React.FunctionComponent<TitleProps> = props =>
{
    function renderTitle(title: string): JSX.Element
    {
        return <span
            className="title__container"
        >{title}</span>
    }

    return <h2 className="title">
        {renderTitle(props.text)}
    </h2>
};

export default Title;