import { mount } from 'svelte';
import App from './App.svelte';
// import App from './App.svelte';
const app = mount(App, { target: document.body });

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

export default app;
