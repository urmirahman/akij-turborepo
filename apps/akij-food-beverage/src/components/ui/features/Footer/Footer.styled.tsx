import styled from "@emotion/styled";

const Footer = styled.footer`
  overflow: hidden;
`;

const MiddleSection = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(2.5)};
  ${({ theme }) => theme.breakpoints.up("lg")} {
    border-top: ${({ theme }) => theme.borders.widths.sm} solid
      ${({ theme }) => theme.colors.neutrals.platinum};
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }
`;

export const Styled = {
  Footer,
  MiddleSection,
};
