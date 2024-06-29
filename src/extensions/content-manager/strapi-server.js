const getService = (name) => {
    return strapi.plugin("content-manager").service(name);
};

module.exports = (plugin) => {
    const controller = plugin.controllers['collection-types'];
    const contentTypesController = plugin.controllers['content-types'];
    // Save the original create controller action
    controller.strapiCreate = controller.create;
    // Save the original update controller action
    controller.strapiUpdate = controller.update;
    controller.strapiFind = controller.find;
    controller.strapiFindOne = controller.findOne;

    // contentTypesController.findContentTypeConfiguration

    controller.find = async (ctx) => {
        // const { model } = ctx.params;
        // const modelSchema = strapi.getModel(model);
        // const configManager = await getService('content-types');
        // const conf = await configManager.findConfiguration(modelSchema)
        // conf.metadatas.admin_roles.edit.editable = !conf.metadatas.admin_roles.edit.editable;


        return controller.strapiFind(ctx);
    }

    controller.findOne = async (ctx) => {
        // console.log('body', JSON.stringify(ctx.request))
        // const { model } = ctx.params;
        // const { body } = ctx.request;
        // console.log('body', model)
        // const modelSchema = strapi.getModel(model);
        // const configManager = await getService('content-types');
        // const conf = await configManager.findConfiguration(modelSchema)
        // console.log(conf.metadatas.admin_roles, 'space', modelSchema);
        // conf.metadatas.admin_roles.edit.editable = !conf.metadatas.admin_roles.edit.editable;
        // const update = await configManager.updateConfiguration(modelSchema, conf);
        // // entityManager.updateConfiguration()
        // console.log('updatee', update.metadatas.admin_roles)
        // // setTimeout(() => {}, 20000)
        return controller.strapiFindOne(ctx);
    }

    // extend action create
    controller.create = async (ctx) => {
        const { model } = ctx.params;
        const { body } = ctx.request;

        const A_MODEL = "api::a.a";
        const B_MODEL = "api::b.b";

        const entityManager = getService('entity-manager');
        console.log('manager', entityManager);
        console.log('body', body)
        if ('admin_role' in body) {
            const { roles } = ctx.state.user
            const rolesToAdd = roles.map(element => {
                if (element.id !== 1) {}
            });
            // const test = entityManager.findOne()
            //console.log("EH")
            // business logic using entityManager.findOne, find...etc.
            // if (/* test if there is a functionnal error */) {
            //     return ctx.badRequest("An error message");
            // }
        }
        //console.log("ho")

        // Call to the saved create controller action
        return controller.strapiCreate(ctx);
    };

    controller.update = async (ctx) => {
        const entityManager = getService('entity-manager');
        console.log('user', ctx.state.user)
        console.log('controller', controller)
        console.log('manager', entityManager)
        const { model } = ctx.params;
        const { body } = ctx.request;
        console.log('model', model, JSON.stringify(body, null, 2))
        return controller.strapiUpdate(ctx);
    }

    return plugin;
};