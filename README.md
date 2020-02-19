[![Build Status](https://travis-ci.com/breadoliveoilsalt/http-server-java.svg?branch=master)](https://travis-ci.com/breadoliveoilsalt/http-server-java)

# HTTP Server   

Welcome!

This HTTP server is written in Java 8.  Its build is handled by Gradle; the Gradle wrapper runs Gradle v5.6.2.  Tests are written with JUnit v4.12.

## Running the Server Locally 

To run the HTTP server locally:

### Option A: Download the Latest Release and Run the Jar File

Note: you will need to have Java installed to use this option.  You might run into problems if you do not have Java 8 installed. 

1. Go to the repository's releases page [here](https://github.com/breadoliveoilsalt/http-server-java/releases) and download the `.jar` file of the latest release.

2. To start the app's server, from your terminal, `cd` into the directory with the `.jar` file.  Run `java -jar <download-file-name>.jar` (replacing `<download-file-name>` with the name of the `.jar` file).

3. To stop the server, hit `ctrl+c`.

### Option B: Build the App with Gradle

Note: you will need to have Gradle installed to use this option.

1. Fork this repository in GitHub and download/clone the master branch to your computer.

2. [Install Gradle](https://gradle.org/install/) if you don't have it already.

3. `cd` into the app's root directory.

4. The Gradle build for this particular app relies on git commit information found in a `.git` directory.  Therefore, to build or even run the app with Gradle, you will have initialize git within the project's root directory. To do so, run the following from the root directory, in order: 
    - `git init .`
    - `git add .`
    - `git commit -m "Initial commit"`
    
5. To start the app's server, run: `./gradlew run`.

6. To stop the server, hit `ctrl+c`.

## Running the App's Tests

To run the unit tests for the app, complete steps 1 through 4 under "Option B" above.  Then, run the command `./gradlew test` from the app's root directory.  Running `./gradlew build` will also run the unit tests.

To run the acceptance tests, run `./scripts/acceptance_tests.sh` from the app's root directory.  

## Contributions and License

### Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/breadoliveoilsalt/http-server-java. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant (http://contributor-covenant.org) code of conduct.

### License:

The app is available as open pen source under the terms of the MIT License (http://opensource.org/licenses/MIT).

