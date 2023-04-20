({
	sum : function(component, event, helper) {
	    var n1= component.find("txt1").get("v.value");
        var n2= component.find("txt2").get("v.value");
        var v = parseInt(n1)+parseInt(n2);
        component.set("v.acao", "Adição");
        component.set("v.resultado", v);
	},
    
    sub : function(component, event, helper) {
	    var n1= component.find("txt1").get("v.value");
        var n2= component.find("txt2").get("v.value");
        var v = parseInt(n1)-parseInt(n2);
        component.set("v.acao", "Subtração");
        component.set("v.resultado", v);
	},
    
    mul : function(component, event, helper) {
	    var n1= component.find("txt1").get("v.value");
        var n2= component.find("txt2").get("v.value");
        var v = parseInt(n1)*parseInt(n2);
        component.set("v.acao", "Multiplicação");
        component.set("v.resultado", v);
	},
    
    div : function(component, event, helper) {
	    var n1= component.find("txt1").get("v.value");
        var n2= component.find("txt2").get("v.value");
        var v = parseInt(n1)/parseInt(n2);
        component.set("v.acao", "Divisão");
        component.set("v.resultado", v);
	}
    
})
    
    
