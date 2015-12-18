/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({

  handleClickTrue: function(component,evt, helper) {
    var tt = component.find('advTrueTooltip');
    //console.log('h', helper.lib);
    console.log("Tooltip Visibility: " + tt.get('v.isVisible'));
    if(tt.get('v.isVisible')) {
      try {
      	tt.hide();
      }
      catch(e) {
    	  console.log("Error in hide()")
      }
    } else {
    	try {
    		tt.show();	
    	}
    	catch(e) {
    		console.log("Error in show()")
    	}
    }
  },
  
  handleClickFalse: function(component,evt, helper) {

	    var tt = component.find('advFalseTooltip');
		try {
			tt.show();
		}
		catch(e){
			console.log("Tooltip does not exist since Advanced=false \nError Message:" + e.message);
		}	   
  },
  
  handleClickEmpty: function(component,evt, helper) {

	    var tt = component.find('advFalseTooltip');
		try {
			tt.show();
		}
		catch(e){
			console.log("Tooltip does not exist since Advanced=\"\" \nError Message:" + e.message);
		}	   
  },
	  
	openPanel: function(cmp){

		var body = [];
	    body.push ($A.createComponentFromConfig({
		    componentDef : { descriptor: "markup://uitest:tooltipTestPosition"
		    	}
		}));
	
	    $A.get('e.ui:createPanel').setParams({
	        panelType: 'modal',
	        visible: true,
	        panelConfig: {     
	            body: body,
	            }
	        }).fire();
	},

})