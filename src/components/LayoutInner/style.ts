import styled from 'styled-components';
import { Link } from 'gatsby';

export const Body = styled.div<{ displayTitle: boolean }>`
    flex-grow: 2;
    margin-top: ${props => (props.displayTitle ? '4rem' : '0')};
    margin-bottom: 5rem;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    font-size: ${props => props.theme.font.small};
`;
