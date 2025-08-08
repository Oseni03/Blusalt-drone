# Blusalt Drone Medication Delivery Service

A REST API service for managing a fleet of drones to deliver medications, built with Node.js, TypeScript, Express, and MongoDB.

## Prerequisites

-   Node.js (v18 or later)
-   npm
-   MongoDB

## Setup

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd blusalt-drone-service
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   Create a .env file in the root directory with:

    ```text
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/blusalt_drone
    ```

4. Run MongoDB locally or via Docker:

    ```bash
    docker run -d -p 27017:27017 --name mongodb mongo
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```

## API Endpoints

    POST /api/drones/register: Register a new drone.
    POST /api/drones/load: Load a drone with medications.
    GET /api/drones/:droneId/medications: Get loaded medications for a drone.
    GET /api/drones/available: Get available drones for loading.
    GET /api/drones/:droneId/battery: Check drone battery level.

## Build

    ```bash
    npm run build
    npm run start
    ```

## Notes

    The service preloads 10 drones on startup.
    A periodic task logs battery levels every 5 minutes.
    Input/output is in JSON format.
    The service prevents loading if battery < 25% or weight exceeds limit.
