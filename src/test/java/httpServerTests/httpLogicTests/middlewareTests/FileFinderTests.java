package httpServerTests.httpLogicTests.middlewareTests;

import httpServer.httpLogic.constants.HTTPMethods;
import httpServer.httpLogic.constants.HTTPStatusCodes;
import httpServer.httpLogic.middleware.FileFinder;
import httpServer.httpLogic.requests.Request;
import httpServer.httpLogic.requests.RequestBuilder;
import httpServer.httpLogic.responses.Response;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

import java.io.IOException;

import static org.junit.Assert.*;

public class FileFinderTests {

    private Request request;
    private Response response;
    private FileFinder fileFinder;

    @Before
    public void testInit() {
        request = new RequestBuilder().addPath("/index.html").addMethod(HTTPMethods.GET).build();
        response = new Response();
    }

    @Rule
    public TemporaryFolder tempFolder = new TemporaryFolder();

    @Test
    public void handleAssignsAFileToAResponse_sFileFieldIfAPathMatchesAFileWithAGetRequest() throws IOException {
        tempFolder.newFile("index.html");
        String basePath = tempFolder.getRoot().getPath();

        assertNull(response.file);
        fileFinder = new FileFinder(basePath);
        fileFinder.handle(request, response);

        assertEquals("index.html", response.file.getName());
    }

    @Test
    public void handleDoesNotAssignAFileToAResponse_sFileFieldIfTheRequestIsNotAGETRequest() throws IOException {
        request = new RequestBuilder().addPath("/index.html").addMethod(HTTPMethods.POST).build();
        tempFolder.newFile("index.html");
        String basePath = tempFolder.getRoot().getPath();

        assertNull(response.file);
        fileFinder = new FileFinder(basePath);
        fileFinder.handle(request, response);

        assertNull(response.file);
    }

    @Test
    public void handle_sDefaultBasePathIsTheProjectRootDirectory() {
        fileFinder = new FileFinder();

        assertEquals(System.getProperty("user.dir"), fileFinder.getBasePath());
    }

    @Test
    public void handleAddsA200StatusCodeToResponseIfAFileCorrespondingToThePathExists() throws IOException {
        tempFolder.newFile("index.html");
        String basePath = tempFolder.getRoot().getPath();

        assertNull(response.getStatusCode());
        fileFinder = new FileFinder(basePath);
        fileFinder.handle(request, response);

        assertEquals(HTTPStatusCodes.OK, response.statusCode);
    }

    @Test
    public void handleDoesNotChangeTheStatusCodeIfTheFileDoesNotExists() throws IOException {
        request = new RequestBuilder().addPath("/index.html").addMethod(HTTPMethods.GET).build();
        String basePath = tempFolder.getRoot().getPath();

        assertNull(response.statusCode);
        fileFinder = new FileFinder(basePath);
        fileFinder.handle(request, response);

        assertNull(response.statusCode);
    }
}