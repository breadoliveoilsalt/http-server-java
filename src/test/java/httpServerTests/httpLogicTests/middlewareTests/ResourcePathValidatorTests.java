package httpServerTests.httpLogicTests.middlewareTests;

import httpServer.httpLogic.constants.HTTPMethods;
import httpServer.httpLogic.constants.HTTPStatusCodes;
import httpServer.httpLogic.middleware.ResourcePathValidator;
import httpServer.httpLogic.requests.Request;
import httpServer.httpLogic.requests.RequestBuilder;
import httpServer.httpLogic.responses.Response;
import httpServer.router.Router;
import httpServerTests.httpLogicTests.testRouterAndControllers.TestRouterFactory;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ResourcePathValidatorTests {

    private ResourcePathValidator resourcePathValidator;
    private Request request;
    private Response response;

    @Before
    public void testInit() {
        Router testRouter = TestRouterFactory.buildWithPathOneAndPathTwoTestControllers();
        resourcePathValidator = new ResourcePathValidator(testRouter);
        response = new Response();
    }

    @Test
    public void handleAddsANotFoundStatusCodeWhenTheResourceRequestedDoesNotExist() {
        request = new RequestBuilder().addPath("/non_existent_path").addMethod(HTTPMethods.GET).build();

        assertNull(response.statusCode);
        resourcePathValidator.handle(request, response);

        assertEquals(HTTPStatusCodes.NotFound, response.statusCode);
    }

    @Test
    public void handleCallsTheNextMiddlewareInTheChainIfOneExists() {
        MockMiddleware nextMiddleware = new MockMiddleware();
        resourcePathValidator.setNext(nextMiddleware);
        request = new RequestBuilder().build();

        resourcePathValidator.handle(request, response);

        assertTrue(nextMiddleware.handleWasCalled);
    }

}
