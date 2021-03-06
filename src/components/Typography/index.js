import React from 'react';
import { string, func, oneOfType, oneOf, any, node } from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { variables, colors, utils } from '../../global/helpers';

const { fontSize, fontFamily, marginSize } = variables;
const { media } = utils;

const Typography = ({
  component: Component,
  headingVariant,
  onClick,
  children,
  textColor,
  ...props
}) => {
  const mobileHeading = css`
    font-size: ${rem(fontSize.mediumHeading)};
    margin: 0 auto ${rem(marginSize.regular)};
  `;

  const isHero = css`
    max-width: ${rem(560)};
    ${mobileHeading}

    ${media.greaterThan('landscape')`
      font-size: ${rem(fontSize.heroHeading)};
      line-height: 1.27;
      margin: 0 auto ${rem(marginSize.small)};
    `}
  `;

  const isHeading = css`
    margin-bottom: ${rem(marginSize.small)};
    font-size: ${rem(fontSize.mediumHeading)};

    ${media.greaterThan('landscape')`
      font-size: ${rem(fontSize.largeHeading)};
      line-height: 1.5;
    `}
  `;

  const isStaticHeading = css`
    font-size: ${rem(fontSize.smallHeading)};
    margin-bottom: ${rem(marginSize.small)};
  `;

  const YupiTypography = styled(Component)`
    font-family: ${fontFamily.secondaryFont};
    font-weight: 600;
    color: ${({ textColor }) => textColor};
    text-align: ${({ align }) => align};
    line-height: 1.29;
    max-width: ${({ maxWidth }) => maxWidth};

    ${({ headingVariant }) => headingVariant === 'hero' && isHero}
    ${({ headingVariant }) => headingVariant === 'heading' && isHeading}
    ${({ headingVariant }) =>
      headingVariant === 'staticHeading' && isStaticHeading}
  `;

  return (
    <YupiTypography
      headingVariant={headingVariant}
      textColor={textColor}
      onClick={e => {
        onClick(e);
      }}
      {...props}
    >
      {children}
    </YupiTypography>
  );
};

Typography.defaultProps = {
  component: 'h5',
  align: 'center',
  maxWidth: 'none',
  textColor: colors.darkBlue,
};

Typography.propTypes = {
  onClick: func,
  component: oneOfType([string, func]).isRequired,
  children: any.isRequired,
  headingVariant: oneOf(['hero', 'heading', 'staticHeading']).isRequired,
  align: oneOf(['center', 'left', 'right']),
  maxWidth: any,
  textColor: oneOfType([string, node]),
};

export default Typography;
