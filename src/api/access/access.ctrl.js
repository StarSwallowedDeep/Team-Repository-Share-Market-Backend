import Accesslog from "../../models/accesslog";

export const logInformation = async (ctx) => {
    const { device, location } = ctx.request.body;
    const accesslog = new Accesslog({
    device,
    location,
    });
    try {
        await accesslog.save();
        ctx.body = accesslog;
    } catch (e) {
        ctx.throw(500, e);
    }
};
