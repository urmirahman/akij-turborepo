import styled from '@emotion/styled'

const Header = styled.header`
  position: relative;
  z-index: 1000;
`

const HeaderWrapper = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.grid.site.maxWidth}px;
`

const HeaderContent = styled.div`
  align-items: flex-start;
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
  position: relative;
  ${({ theme }) => theme.breakpoints.up('lg')} {
    align-items: center;
    height: 100%;
  }
`


export const Styled = {
    Header,
    HeaderWrapper,
    HeaderContent,
}
