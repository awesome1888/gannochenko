import React, { FunctionComponent } from 'react';
import { Body, Title, BackContainer, BackLink } from './style';
import { Props } from './type';
import { Container, SEO } from '../';

export const LayoutInner: FunctionComponent<Props> = props => {
    const {
        children,
        location: { pathname = '' } = {},
        pageContext: {
            frontmatter: {
                title = '',
                backUrl = '',
                keywords = [],
                description = '',
            } = {},
        },
    } = props;

    const isRoot = pathname === '/';

    return (
        <>
            <SEO title={title} keywords={keywords} description={description} />
            {!!(title && !isRoot) && (
                <Container type="standard">
                    <Title>{title}</Title>
                </Container>
            )}
            <Body>{children}</Body>
            {!!backUrl && (
                <BackContainer>
                    <BackLink to={backUrl}>&larr; Go back</BackLink>
                </BackContainer>
            )}
        </>
    );
};

export default LayoutInner;
