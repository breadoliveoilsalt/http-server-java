package httpServer.httpLogic.router;

import httpServer.httpLogic.responses.ResponseFactory;

public class ControllerFactory {

    public Handler buildHTTPServerController() {
        ControllerBuilder builder = new ControllerBuilder();

        builder
            .createPath("/simple_get")
            .addMethodAndAction("GET", () -> ResponseFactory.buildSimpleResponse());

        builder.createPath("/get_with_body")
                .addMethodAndAction("GET", () -> ResponseFactory.buildSimpleResponseWithBody());

        return builder.build();
    }

}
