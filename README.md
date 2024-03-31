# Docker NodeJS App

This Docker container hosts a NodeJS application powered by NGINX.

## Getting Started

1. **Download Docker Desktop**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac or Windows. Docker Compose will be automatically installed along with Docker Desktop.

2. **Build and Run the App**: Navigate to the directory containing the Docker configuration file and execute the following command:

    ```shell
    docker compose up -d
    ```

3. **Access the App**: Open your web browser and navigate to [http://localhost](http://localhost) to access the running application.

4. **Stop and Remove the App**: To halt and remove the application, execute the following command:

    ```shell
    docker compose down -v --rmi all
    ```