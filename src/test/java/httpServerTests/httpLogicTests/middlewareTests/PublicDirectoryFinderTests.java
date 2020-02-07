package httpServerTests.httpLogicTests.middlewareTests;

import httpServer.httpLogic.constants.HTTPContentTypes;
import httpServer.httpLogic.constants.HTTPHeaders;
import httpServer.httpLogic.constants.HTTPMethods;
import httpServer.httpLogic.constants.HTTPStatusCodes;
import httpServer.httpLogic.middleware.PublicDirectoryFinder;
import httpServer.httpLogic.middleware.PublicFileFinder;
import httpServer.httpLogic.requests.Request;
import httpServer.httpLogic.requests.RequestBuilder;
import httpServer.httpLogic.responses.Response;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

import java.io.File;
import java.io.IOException;

import static org.junit.Assert.*;

public class PublicDirectoryFinderTests {

    private Request request;
    private Response response;
    private PublicDirectoryFinder publicDirectoryFinder;

    @Before
    public void testInit() {
        response = new Response();
    }

    @Rule
    public TemporaryFolder tempFolder = new TemporaryFolder();

    @Test
    public void handle_sDefaultPublicRootPathIsAPublicSubDirectoryInTheProjectRootDirectory() {
        publicDirectoryFinder = new PublicDirectoryFinder();

        assertEquals(System.getProperty("user.dir") + "/public", publicDirectoryFinder.getPublicRootPath());
    }

    @Test
    public void handleCallsTheNextMiddlewareInTheChainIfOneExists() {
        request = new RequestBuilder().addPath("/").addMethod(HTTPMethods.GET).build();
        MockMiddleware nextMiddleware = new MockMiddleware();
        publicDirectoryFinder = new PublicDirectoryFinder();
        publicDirectoryFinder.setNext(nextMiddleware);

        publicDirectoryFinder.handle(request, response);

        assertTrue(nextMiddleware.handleWasCalled);
    }

    private void setUpForIndexDotHTMLTests() throws IOException {
        request = new RequestBuilder().addPath("/").addMethod(HTTPMethods.GET).build();
        tempFolder.newFile("index.html");
        String basePath = tempFolder.getRoot().getPath();
        publicDirectoryFinder = new PublicDirectoryFinder(basePath);
    }

    @Test
    public void handleAssignsAnIndexDotHTMLFileToTheResponseIfAnIndexDotHTMLFileIsInThePathOfAGETRequest() throws IOException {
        setUpForIndexDotHTMLTests();

        assertNull(response.file);
        publicDirectoryFinder.handle(request, response);

        assertEquals("index.html", response.file.getName());
    }

    @Test
    public void handleAssignsAnOKStatusCodeToTheResponseIfAnIndexDotHTMLFileIsInThePathOfAGETRequest() throws IOException {
        setUpForIndexDotHTMLTests();

        assertNull(response.statusCode);
        publicDirectoryFinder.handle(request, response);

        assertEquals(HTTPStatusCodes.OK, response.statusCode);
    }

    @Test
    public void handleAssignsAnHTMLContentTypeHeaderToTheResponseIfAnIndexDotHTMLFileIsAssignedToTheResponse() throws IOException {
        setUpForIndexDotHTMLTests();

        assertFalse(response.hasHeader(HTTPHeaders.ContentType, HTTPContentTypes.TextHTML));
        publicDirectoryFinder.handle(request, response);

        assertTrue(response.hasHeader(HTTPHeaders.ContentType, HTTPContentTypes.TextHTML));
    }

    @Test
    public void handleAssignsAnOKStatusCodeToTheResponseIfThePathRequestedMatchesAPublicFolder() throws IOException {
        tempFolder.newFolder("tempSubDirectory");
        request = new RequestBuilder().addPath("/tempSubDirectory").addMethod(HTTPMethods.GET).build();
        String basePath = tempFolder.getRoot().getPath();
        publicDirectoryFinder = new PublicDirectoryFinder(basePath);

        assertNull(response.statusCode);
        publicDirectoryFinder.handle(request, response);

        assertEquals(HTTPStatusCodes.OK, response.statusCode);
    }

    // Add test that content type added when string body attached

    // Add tests about calling render on a viewer, and then one about the default view
}
