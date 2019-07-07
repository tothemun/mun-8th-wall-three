import * as tf from '@tensorflow/tfjs';

async function detect(model) {
	const zeros = tf.zeros([1, 300, 300, 3]);
	
	console.log("executing model");
	output = await model.executeAsync(zeros);
	console.log(output);
}

async function init() {
	const LOCAL_MODEL_PATH = 'web_model/model.json'; // currently an example model - very quick and dirty to confirm loading js while model trains
	
	let model; 
	try {
		model = await tf.loadGraphModel(LOCAL_MODEL_PATH);
		detect(model)
	} catch (err) {
		console.log(err);
	}
}