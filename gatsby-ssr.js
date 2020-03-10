/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { getRenderedNodeIdCollector } from './src/lib/effects';
import { Root } from './src/components/Root/Root';
import { Layout } from './src/components/Layout';
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([getRenderedNodeIdCollector()]);
};

export const wrapRootElement = Root;
export const wrapPageElement = ({ element, props }) => {
    return <Layout props={props}>{element}</Layout>;
};
