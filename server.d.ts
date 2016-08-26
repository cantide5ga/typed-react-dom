import { ReactElement } from 'react';

declare namespace ReactDomServer {
     function renderToString(element: ReactElement<any>): string;
     function renderToStaticMarkup(element: ReactElement<any>): string;
     var version: string;
}

export = ReactDomServer;