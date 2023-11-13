# Photo Album Showcase

## Overview

This technical showcase was built on top of a standard [Create React App](https://create-react-app.dev/) boilerplate, with TypeScript, Tailwind CSS, and [React Query](https://tanstack.com/query/v3/) being some of the more important stack details.

The purpose of the showcase is to display photo IDs and titles, filtered on an album ID query parameter supplied to [this](https://jsonplaceholder.typicode.com/photos) mock endpoint. Beyond these requirements, the application also shows the thumbnails of the mock images, and allows a more detailed single-image view on click.

Relatively recent versions of Node and NPM should be all that's necessary to use this repository. As always, make sure to run `npm install` as a first step after cloning.

## Automated Testing

A key feature of the showcase is to demonstrate well-organized, test-driven automated suites.

Unit tests for each of the components can be run with the command `npm run test`; these tests are built using Jest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). These tests are always colocated in the same directory as the component that they describe.

End-to-end tests can be run with the command `npm run cypress`, which will open a Google Chrome window that is controlled by the [Cypress](https://www.cypress.io/) engine and displays scenarios that closely mimic human-like inputs. This suite lives separately, in [this cypress subdirectory](./cypress/e2e).

The general philosophy for the unit tests is to lean into React Testing Library patterns by selecting based on text and other obvious UI cues as often as possible. This could lead to sudden test failures in the development cycle, but this almost always results in immediate fixes to tests, and appropriately draws human developer attention to confirming a change in requirements. This also allows for a certain non-technical aspect to persist as living documentation through the unit tests. Conversely, for the more expensive and less frequent end-to-end tests, the Cypress ethos is to prefer attributes like `data-testid` that remain stable; the primary value is found in deferring details like text content to the unit level while the big picture concerns can remain stable over time.

## Running the Application (Developers)

As is standard for a Node + Create React App setup, after an up-to-date `npm install`, `npm start` will host the application on [localhost:3000](http://localhost:3000) with hot reloading. Most changes you make should be reflected in real-time, without a new `npm start` necessary to pick up on them.

## Building the Application

After an `npm install`, `npm run build` should successfully build the application for production. The output will be in [this build directory](./build)
