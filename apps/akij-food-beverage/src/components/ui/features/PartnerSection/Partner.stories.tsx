import type { Meta, Story } from "@storybook/react";

import { PartnerProps } from "./Partner";
import { Partner as Component } from "./Partner";
import { PartnerMock } from "./Partner.mocks";
import PartnerImages from "./PartnerImages";

export default {
    component: Component,
    title: "Features/Partner",
    parameters: {
        layout: "fullscreen",
    },
} as Meta

const Template: Story<PartnerProps> = (props) => <Component {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    title: PartnerMock.title,
};

export const WithoutSubTitle = Template.bind({});
WithoutSubTitle.args = {
    subTitle: PartnerMock.subTitle,
};
