package httpServer.httpLogic.responses;

import java.util.Map;

public class Response {
    protected final String httpVersion;
    protected final String statusCode;
    protected final String statusMessage;
    protected final Map<String, String> headers;
    protected final String body;

    public Response(String httpVersion,
                    String statusCode,
                    String statusMessage,
                    Map<String, String> headers,
                    String body) {
        this.httpVersion = httpVersion;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.headers = headers;
        this.body = body;
    }

    public String getHttpVersion() {
        return httpVersion;
    }

    public String getStatusCode() {
        return statusCode;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public Map<String, String> getHeaders() {
        return headers;
    }

    public boolean hasHeader(String key, String value) {
        return headers.get(key).equals(value);
    }

    public String getHeaderValueFor(String key) {
        return headers.get(key);
    }

    public String getBody() {
        return body;
    }



}
