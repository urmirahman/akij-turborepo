import styled from '@emotion/styled'

import { GridColumn as GridColumnComponent } from 'ui/components/elements/GridColumn'

export const IMAGE_ASPECT_RATIO = '1:1'
const IMAGE_HORIZONTAL_OFFSET_ON_LARGE = '13%'
const IMAGE_HORIZONTAL_OFFSET_ON_MEDIUM = '23%'

const Hero = styled('div')(
  ({ theme }) => `
    position: relative;
    z-index: 0;
    margin-bottom: ${theme.spacing(5)};
    height: 100%;
  `,
)

const GridColumn = styled(GridColumnComponent)`
  position: relative;
`

const ImagePositionWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(4)} -${({ theme }) => theme.spacing(4)} 0 ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin: ${({ theme }) => theme.spacing(4)} 0 0;
    padding-left: ${IMAGE_HORIZONTAL_OFFSET_ON_MEDIUM};
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    margin: -${({ theme }) => theme.spacing(1)} 0 0;
    padding-left: ${IMAGE_HORIZONTAL_OFFSET_ON_LARGE};
  }
`

const ImageWrapper = styled.div`
  aspect-ratio: 0;
  position: relative;
`

const Heading = styled('h2')`
  span {
    display: block;
  }
`

export const Styled = {
  Hero,
  Heading,
  GridColumn,
  ImagePositionWrapper,
  ImageWrapper,
}
