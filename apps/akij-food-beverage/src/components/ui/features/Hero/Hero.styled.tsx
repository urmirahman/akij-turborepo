import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { GridColumn as GridColumnComponent } from "../../elements/GridColumn";

export const IMAGE_ASPECT_RATIO = "1:1";
const IMAGE_HORIZONTAL_OFFSET_ON_LARGE = "13%";
const IMAGE_HORIZONTAL_OFFSET_ON_MEDIUM = "23%";

const RESERVED_BOTTOM_SPACING_FOR_LOWEST_LENTIL_ON_MOBILE = 2.5;
const RESERVED_BOTTOM_SPACING_FOR_LOWEST_LENTIL = 3;

const PSEUDO_CONTAINER_HEIGHT = "260px";

const Hero = styled("div")(
  ({ theme }) => `
    position: relative;
    z-index: 0;
    margin-bottom: ${theme.spacing(2)};
  `
);

const OverflowContainer = styled("div")(
  ({ theme }) => `
    overflow: hidden;
    padding-bottom: ${theme.spacing(
      RESERVED_BOTTOM_SPACING_FOR_LOWEST_LENTIL_ON_MOBILE
    )};
    ${theme.breakpoints.up("lg")} {
      padding-bottom: ${theme.spacing(
        RESERVED_BOTTOM_SPACING_FOR_LOWEST_LENTIL
      )};
    }
  `
);

const ContentWrapper = styled("div")(
  ({ theme }) => `
    padding-top: ${theme.spacing(2.5)};
    ${theme.breakpoints.up("lg")} {
      padding-top: ${theme.spacing(4)};
    }
    ${theme.breakpoints.up("xl")} {
      padding-top: ${theme.spacing(6)};
    }
  `
);

const Heading = styled("h2")`
  span {
    display: block;
  }
`;

const ButtonsWrapper = styled("div")(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: ${theme.spacing(2)};
    gap: ${theme.spacing(1)};
    ${theme.breakpoints.up("lg")} {
      flex-direction: row;
      margin-top: ${theme.spacing(2.5)};
    }
  `
);

const GridColumn = styled(GridColumnComponent)`
  position: relative;
`;

const ImagePositionWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(4)} -${({ theme }) => theme.spacing(4)}
    0 ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.up("md")} {
    margin: ${({ theme }) => theme.spacing(4)} 0 0;
    padding-left: ${IMAGE_HORIZONTAL_OFFSET_ON_MEDIUM};
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    margin: -${({ theme }) => theme.spacing(1)} 0 0;
    padding-left: ${IMAGE_HORIZONTAL_OFFSET_ON_LARGE};
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 0;
  position: relative;
`;

const LentilsScatter = styled.div`
  > * {
    &:nth-of-type(1) {
      top: 0%;
      left: 2%;
    }
    &:nth-of-type(2) {
      top: 15%;
      left: 14%;
    }
    &:nth-of-type(3) {
      top: 3%;
      left: 71%;
    }
    &:nth-of-type(4) {
      top: 23%;
      left: 83%;
    }
    &:nth-of-type(5) {
      top: 69%;
      left: 68%;
    }
    &:nth-of-type(6) {
      top: 86%;
      left: 83%;
    }
    &:nth-of-type(7) {
      top: 93%;
      left: 64%;
    }
  }
  ${({ theme }) => theme.breakpoints.up("lg")} {
    > * {
      &:nth-of-type(1) {
        top: 17%;
        left: -4%;
      }
      &:nth-of-type(2) {
        top: 30%;
        left: 7%;
      }
      &:nth-of-type(3) {
        top: 8%;
        left: 82%;
      }
      &:nth-of-type(4) {
        top: 41%;
        left: 104%;
      }
      &:nth-of-type(5) {
        top: 67%;
        left: 97%;
      }
      &:nth-of-type(6) {
        top: 81%;
        left: 119%;
      }
      &:nth-of-type(7) {
        top: 93%;
        left: 94%;
      }
      &:nth-of-type(n + 8) {
        display: none; // Note: In case there are more than eight lentils, don't show them.
      }
    }
  }
`;

const LentilOuterWrapper = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const LentilInnerWrapper = styled(motion.div)`
  position: relative;
`;

const PseudoContainer = styled("div")(
  ({ theme }) => `
  position: absolute;
  overflow-x: hidden;
  bottom: calc((${PSEUDO_CONTAINER_HEIGHT} - 2px - ${theme.spacing(
    RESERVED_BOTTOM_SPACING_FOR_LOWEST_LENTIL_ON_MOBILE
  )}) * -1);
  left: 0;
  width: 100%;
  height: ${PSEUDO_CONTAINER_HEIGHT};
  z-index: -1;
  ${theme.breakpoints.up("lg")} {
    bottom: calc((${PSEUDO_CONTAINER_HEIGHT} - 2px - ${theme.spacing(
    RESERVED_BOTTOM_SPACING_FOR_LOWEST_LENTIL
  )}) * -1);
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 0 0 50% 50%;
    height: 100%;
    width: max(116%, 1728px);
    background: ${theme.body.background.color};
    transform: translateX(-50%);
  }
`
);

export const Styled = {
  Hero,
  OverflowContainer,
  ContentWrapper,
  Heading,
  ButtonsWrapper,
  GridColumn,
  LentilsScatter,
  LentilOuterWrapper,
  LentilInnerWrapper,
  ImagePositionWrapper,
  ImageWrapper,
  PseudoContainer,
};
