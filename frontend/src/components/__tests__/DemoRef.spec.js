import DemoRef from "@/components/DemoRef.vue"
import { mount } from '@vue/test-utils'

test("Gros Test Fourre-Tout", async ()=>{
	expect(true).toBe(true);
	const wrapper = mount(DemoRef);

	const h1Ref = wrapper.findAll('h1').at(0)
	const h1PasRef = wrapper.findAll('h1').at(1)

	const [buttonRef, buttonPasRef] = wrapper.findAll('button');
	//const inputPasRef = wrapper.findAll('input').at(1)


	expect(h1Ref.text()).toMatch(/1/);
	expect(h1PasRef.text()).toMatch(/1/);
	await buttonPasRef.trigger('click');
	await buttonPasRef.trigger('click');
	expect(h1PasRef.text()).toMatch(/1/);
	await buttonRef.trigger('click');
	expect(h1Ref.text()).toMatch(/2/);
	expect(h1PasRef.text()).toMatch(/3/);
})
