package httpServerTests.httpLogicTests.testRouterAndControllers;

import httpServer.httpLogic.constants.HTTPStatusCodes;
import httpServer.httpLogic.controllers.Controller;
import httpServer.httpLogic.requests.Request;
import httpServer.httpLogic.responses.Response;

public class PathOneTestController extends Controller {

    public static String stringBodyToAddForTest;

    public PathOneTestController(Request request, Response response) {
        super(request, response);
    }

    public Response get() {
        response.statusCode = HTTPStatusCodes.OK;
        response.stringBody = stringBodyToAddForTest;
        return response;
    }

}
