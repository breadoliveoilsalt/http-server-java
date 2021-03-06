package httpServer.serverSocketLogic.factory;

import httpServer.router.Router;
import httpServer.serverSocketLogic.HTTPServerLogicObject;
import httpServer.serverLogger.ServerLogger;
import httpServer.serverSocketLogic.wrappers.ServerSokket;
import httpServer.serverSocketLogic.wrappers.Sokket;

import java.io.IOException;

public interface AppFactory {

    ServerSokket createServerSokketListeningAtPort(int port) throws IOException;

    Thread createThreadFor(Runnable runnable);

    HTTPServerLogicObject createHTTPServerListeningLoop(ServerSokket serverSokket, Router router, AppFactory factory, ServerLogger logger);

    Runnable createClientHandlerRunnable(Sokket sokket, Router router, ServerLogger logger);

    Router createRouter();

}
