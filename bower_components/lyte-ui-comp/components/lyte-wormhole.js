Lyte.Component.register("lyte-wormhole",{_template:'<template tag-name="lyte-wormhole">\n\t<lyte-yield yield-name="lyte-content"></lyte-yield>\t\n</template>',_dynamicNodes:[{type:"insertYield",position:[1]}],_observedAttributes:["ltPropQuery"],data:function(){return{ltPropQuery:Lyte.attr("string")}},didConnectFunc:function(){var e=this.data.ltPropQuery?document.querySelector(this.data.ltPropQuery):document.body;e?this.getMethods("onBeforeAppend")&&0==this.executeMethod("onBeforeAppend",this.$node,e)||(_lyteUiUtils.appendChild(e,this.$node),this.appended=!0,this.getMethods("onAppend")&&this.executeMethod("onAppend",this.$node,e)):console.error("Provide valid outlet to append")}.observes("ltPropQuery").on("didConnect")});