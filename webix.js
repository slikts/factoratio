/**
 * Created by synopia on 27.06.2014.
 */
var ui_scheme = {
    rows : [
        {
            view: "label", label: "<strong>Factoratio</strong>"
        },
        {
            cols : [
                {
                    view: "select", label: "Recipe", options:selectRecipes,
                    id: "selected_recipe"
                },
                {
                    view: "slider", min:1, max:120,
                    id: "selected_recipe_speed",
                    title:webix.template("#value# u/m"),
                    on: {
                        onChange: function(newv, oldv) {
                            logic.updateTargetSpeed(newv);
                        },
                        onSliderDrag: function () {
                            logic.updateTargetSpeed(this.getValue());
                        }
                    }
                }
            ]
        },
        {
            cols : [
                {
                    view : "button", value: "+", click:function() {
                        logic.addRecipe($$("selected_recipe").getValue());
                    }
                },
                {
                    view : "button", value: "-", click:function() {
                        logic.removeRecipe($$("selected_recipe").getValue());
                    }
                },
                {
                    view : "button", value: "Reset", click : function () {
                        logic.reset();
                    }
                },
                {
                    view : "button", value: "Setup"
                }
            ]
        },
        {
            view: "tabview",
            id:"tabs",
            animate: false,
            cells: [
                {
                    header: "Recipe view",
                    body: {
                        view: "treetable",
                        id: "recipe_tree",
                        editable: true,
                        editaction: 'click',
                        tooltip: true,
                        columns: [
                            {id: "targetSpeed", header: "u/m", format: helpers.speedFormat, width: 100, tooltip: function(line){
                                return "X"
                            }},
                            {id: "name", header: "Item", template: "{common.treetable()} #value#", width: 300},
                            {id: "count", header: "Count", template: logic.renderCount, width: 100 },
                            {id: "factorySpeed", header: "u/m/factory",  format: helpers.speedFormat, width: 100},
                            {id: "factoryModified", header: "",  editor: 'checkbox', width: 50, template:"{common.checkbox()}" },
                            {id: "factory", header: "Factory",  editor: 'myselect', width: 300, template: helpers.renderFactory, options:logic.selectFactories},
                            {id: "inputInserters", header: "Input inserters",  editor: 'myselect', width: 300, template: helpers.renderInputInserters, options:logic.selectInserters},
                            {id: "outputInserters", header: "Output inserters",  editor: 'myselect', width: 300, template: helpers.renderOutputInserters, options:logic.selectInserters}
                        ]
                    }
                },
                {
                    header: "Ratio view",
                    body: {
                        view: "treetable",
                        id: "ratio_tree",
                        editable: true,
                        editaction: 'click',
                        columns: [
                            {id: "targetSpeed", header: "u/m", format: helpers.speedFormat, width: 100},
                            {id: "name", header: "Item", template: "{common.treetable()} #value#", width: 300},
                            {id: "count", header: "Count", template: logic.renderCount, width: 100 },
                            {id: "factorySpeed", header: "u/m/factory",  format: helpers.speedFormat, width: 100},
                            {id: "factory", header: "Factory",  editor: 'myselect', width: 300, template: helpers.renderFactory, options:logic.selectFactories},
                            {id: "inputInserters", header: "Input inserters",  editor: 'myselect', width: 300, template: helpers.renderInputInserters, options:logic.selectInserters},
                            {id: "outputInserters", header: "Output inserters",  editor: 'myselect', width: 300, template: helpers.renderOutputInserters, options:logic.selectInserters}
                        ]
                    }
                }
            ]
        }
    ]
};