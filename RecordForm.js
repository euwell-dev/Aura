({
    doInit: function(component, event, helper) {
        component.set("v.account", {'sobjectType': 'Account'});
    },
    
    handleSuccess: function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Sucesso!",
            "message": "Conta criada com sucesso."
        });
        toastEvent.fire();
        component.set("v.account", {'sobjectType': 'Account'});
    }
})
