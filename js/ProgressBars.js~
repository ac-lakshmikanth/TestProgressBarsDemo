
// This template can be set to be accessed by ractive in 2 ways: 
// 1. Using <script></script> template 
// 2. Using partials like below with the use of a string and partials: {} setting
// 3. Here method (2) is used to support the test cases execution using karma-jasmine

var templateString = "{{#each progressBars:index}}"+
		     "<div class='divPosition divMain'>"+
		"<div class='divPosition divProgressBar' style='width:{{width}}%;background-color:{{bgColor}};'>&nbsp;</div>"+			
		"<div class='divPosition divProgressState'>{{width}}%</div>"+
		"</div>"+
		"{{/each}}"+
		"<div class='ProgressBarActions'>"+
		"<select class='SelectProgressBar' value='{{selectedProgressBar}}'>"+
			"{{#each progressBars:index}}"+
			"<option value='{{name}}'>{{name}}</option>"+
			"{{/each}}"+
		"</select>"+
		"{{#each progressBarActions:index}}"+
			"<button class='btn' type='button' on-click='onChangeProgress:{{this}}'>{{this}}</button>"+
		"{{/each}}"+
		"</div>";


var progressBars = new Ractive({

	// container element where ractive creates the interactive UI
	el: '.ProgressBarDisplay',

	// This config is required to refer the template from the string or other ways of templating with partials
	partials: {templateString: templateString},

	// set the template to be used for this ractive component
	template: templateString,//'#ProgressBarTemplate',

	// animation duration in milliseconds
	progressAnimDuration: 3000,

	// colors to be used with progress bar for valid and invalid progress range value
	colors: {
		'validState': 'lightblue',
		'invalidState': 'red'
	},

	// data to be used to make the component interactive
	data: {
		progressBars: {
			'ProgressBar1': {name:'ProgressBar1',width:'70',bgColor:'lightblue'},	
			'ProgressBar2': {name:'ProgressBar2',width:'30',bgColor:'lightblue'},	
			'ProgressBar3': {name:'ProgressBar3',width:'70',bgColor:'lightblue'}	
		},
		progressBarActions: ['-25','-10','+10','+25'],
		selectedProgressBar: 'ProgressBar2'
	},

	// this method is called firstime when ractive initiates this component 
	oninit: function(){
		this.on('onChangeProgress',this.onChangeProgress);
	},

	// this is the event called with click of each button that changes state of progress bar
	onChangeProgress: function(event,changeByValue){
		changeByValue = parseInt(changeByValue,10);
		var currentProgressBar = this.get('selectedProgressBar');
		var currentValue = parseInt(this.get('progressBars')[currentProgressBar].width,10);
		var updateObj = this.getProgressBarNewState(changeByValue,currentValue);
		this.animate('progressBars.'+currentProgressBar+'.width',updateObj.newValue,{duration:this.progressAnimDuration});
		this.animate('progressBars.'+currentProgressBar+'.bgColor', updateObj.isExceeded ? this.colors.invalidState : this.colors.validState,{duration:this.progressAnimDuration});
	},

	// calculation logic is seperated to ensure that test cases can be tested without depending on DOM
	getProgressBarNewState: function(changeByValue,currentValue) {
		var newValue = 0,
		calcValue = parseInt((currentValue+changeByValue),10),
		isExceeded = false;
		if(calcValue>100) {
			newValue = 100;
			isExceeded = true;
		} else if(calcValue<=0) {
			newValue = 0;
		} else {
			newValue = calcValue;
		}
		return {newValue:newValue, isExceeded:isExceeded};
	}
});
