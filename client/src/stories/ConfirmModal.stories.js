import { ConfirmModal } from '../components';

export default {
  title: 'ConfirmModal',
  component: ConfirmModal,
};

const Template = (args) => <ConfirmModal {...args} />

export const Primary = Template.bind({});

Primary.args = {
  open: true,
  title: 'My favorite movies',
  url: 'http://localhost:3000/recommend?title:"my movies"&ids=12,34,34',
  onclick: () => { }
}

