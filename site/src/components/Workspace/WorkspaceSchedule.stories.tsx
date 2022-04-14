import { Story } from "@storybook/react"
import React from "react"
import { MockWorkspaceAutostartEnabled } from "../../test_helpers"
import { WorkspaceSchedule, WorkspaceScheduleProps } from "./WorkspaceSchedule"

export default {
  title: "Workspaces/WorkspaceSchedule",
  component: WorkspaceSchedule,
}

const Template: Story<WorkspaceScheduleProps> = (args) => <WorkspaceSchedule {...args} />

export const Example = Template.bind({})
Example.args = {
  autostart: MockWorkspaceAutostartEnabled.schedule,
  autostop: "",
}
